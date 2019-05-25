import React from 'react';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';
import supercluster from 'points-cluster';

import ParkingZone from '../ParkingZone';
import ZoneCluster from '../ZoneCluster';
import ZoneTooltip from '../ZoneTooltip';
import LocationSelectTitle from '../LocationSelectTitle';
import LoadingDots from '../LoadingDots';

import {OVERLAYS} from '../OverlayContainer';

import './Map.css';

class SimpleMap extends React.Component {

	constructor(props) {
		super(props);

		this.handleMapClick = this.handleMapClick.bind(this);
		this.handleZoneClick = this.handleZoneClick.bind(this);
		this.handleClusterClick = this.handleClusterClick.bind(this);
		this.onChange = this.onChange.bind(this);
		this.updateVisibleMarkers = this.updateVisibleMarkers.bind(this);
		this.showTooltip = this.showTooltip.bind(this);

		this.state = {
			showTooltip: false,
			markersToRender: [],
		}
	}

	handleZoneClick(zone) {
		console.log('zone click');
		let activeId = this.props.activeLocation().zId;

		this.props.activeLocation(zone.lat, zone.lng, null, zone.zId, zone.description, zone.direction, zone.street);
		this.setState({ showTooltip: activeId === zone.zId ? !this.state.showTooltip : true });
	}

	handleMapClick({x, y, lat, lng, event}) {
		console.log('map click');
		// if (!this.state.showTooltip) {
		// 	this.props.activeLocation(lat, lng);	
		// }

		// this.setState({ showTooltip: false });
	}

	handleClusterClick(marker) {
		this.setState({showTooltip: false})
		this.props.activeLocation(null, null, 17) ;
		this.props.center(marker.wy, marker.wx);
	}

	showTooltip(show) {
		if (show === undefined) return this.state.showTooltip;

		this.setState({
			showTooltip: show
		});
	}

	onChange({bounds, center, marginBounds, size, zoom}) {
		if (zoom !== this.props.activeLocation().zoom) {
			this.setState({ showTooltip: false })	
		}

		let active = this.props.activeLocation();
		this.props.activeLocation(active.lat, active.lng, zoom, active.zId, active.description);

		let parsed = this.props.markers.map(m => {
			m.zId = m.z_id;
			return m;
		});

		this.updateVisibleMarkers(parsed, bounds);
	}

	updateVisibleMarkers(markers, bounds) {
		let visible =  markers.filter(m => {
			return bounds.nw.lat > m.lat && m.lat > bounds.se.lat && bounds.nw.lng < m.lng && m.lng < bounds.se.lng;
		});

		let clExec = supercluster(visible, {
			maxZoom: 16,
			radius: 60,
		});

		let cl = clExec({
			center: this.props.center,
			bounds: bounds,
			zoom: this.props.zoom,
		});

		this.setState({
			markersToRender: cl
		});
	}

	render() {
		return (
			<div className='map'>
				<LocationSelectTitle 
					onClick={() => this.props.overlayMode(OVERLAYS.NONE)} 
					show={this.props.overlayMode() === OVERLAYS.SUBMIT} 
				/>
				<div className={'map-container ' + (this.state.mapLoaded && !this.state.connectFailed ? '' : 'map-hidden')}>
					<GoogleMapReact
						bootstrapURLKeys={{ key: 'AIzaSyCBgJaq_tUvshKMSJHsizmp5Ag3W2RSDyY' }}
						center={this.props.center()}
						zoom={this.props.activeLocation().zoom}
						onClick={this.handleMapClick}
						onChange={this.onChange}
						options={{clickableIcons: false, draggableCursor: (this.props.overlayMode() === OVERLAYS.SUBMIT ? 'pointer' : '')}}
						onTilesLoaded={() => this.setState({ mapLoaded: true, })}
					>	
						{this.state.markersToRender.map(marker => {
							if (marker.numPoints === 1) {
								return (<ParkingZone
									key={marker.points[0].z_id}
									lat={marker.wy}
									lng={marker.wx}
									show={this.props.overlayMode() === OVERLAYS.NONE}
									onClick={() => {this.handleZoneClick(marker.points[0])}}
								/>);
							} else {
								return (<ZoneCluster
									key={String(marker.wy) + String(marker.wx)}
									lat={marker.wy}
									lng={marker.wx}
									numZones={marker.numPoints}
									show={this.props.overlayMode() === OVERLAYS.NONE}
									onClick={() => {this.handleClusterClick(marker);}}
								/>);
							}

						})
						}
						<ParkingZone
							lat={this.props.activeLocation().lat}
							lng={this.props.activeLocation().lng}
							zId={this.props.activeLocation().zId}
							description={this.props.activeLocation().description}
							show={this.props.overlayMode() === OVERLAYS.SUBMIT}
							onClick={() => {}}
						/>
						<ZoneTooltip 
							key={'tooltip'} 
							lat={this.props.activeLocation().lat} 
							lng={this.props.activeLocation().lng} 
							overlayMode={this.props.overlayMode}
							show={this.showTooltip}
							activeLocation={this.props.activeLocation}
						/>
					</GoogleMapReact>
				</div>
				<div className='status-container'>
					<LoadingDots
						color='#288BE4'
						show={true}
					/>
					<p className={this.state.connectFailed ? '' : 'hidden'}>
						Failed to connect. Try reloading the page.
					</p>
				</div>
			</div>
		);
	}
}

export default SimpleMap;