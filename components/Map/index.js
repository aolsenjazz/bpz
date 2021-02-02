import { useState, useEffect, useCallback } from 'react';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';
import Supercluster from 'supercluster';

import ParkingZone from '../ParkingZone';
import ZoneCluster from '../ZoneCluster';
import ZoneTooltip from '../ZoneTooltip';
import LoadingDots from '../LoadingDots';

import './Map.css';

export default function SimpleMap(props) {
	const [markersToRender, setMarkersToRender] = useState([]);
	const [activeMarker, setActiveMarker] = useState(undefined);
	const [mapLoaded, setMapLoaded] = useState(false);

	const zoneClick = useCallback((zone) => {
		let _activeMarker;

		if (activeMarker === undefined) _activeMarker = zone;
		else _activeMarker = zone.zId === activeMarker.zId ? undefined : zone;
		
		setActiveMarker(_activeMarker);
	});

	const clusterClick = useCallback((marker) => {
		setActiveMarker(undefined);

		props.setLocation({
			lat: marker.geometry.coordinates[1], 
			lng: marker.geometry.coordinates[0], 
			zoom: 17
		});
	});

	const onChange = useCallback(({bounds, center, marginBounds, size, zoom}) => {
		let active = props.location;
		props.setLocation({
			lat: active.lat,
			lng: active.lng,
			zoom: zoom
		})

		let parsed = props.markers.map(m => {
			m.zId = m.z_id;
			return m;
		});

		updateVisibleMarkers(parsed, bounds, zoom);
	});

	const updateVisibleMarkers = useCallback((markers, bounds, zoom) => {
		let visible =  markers.filter(m => {
			m.geometry = {
				type: 'point',
				coordinates: [m.lng, m.lat]
			}
			m.type = 'point';

			return bounds.nw.lat > m.lat && m.lat > bounds.se.lat && bounds.nw.lng < m.lng && m.lng < bounds.se.lng;
		});

		let bbox = [bounds.nw.lng, bounds.sw.lat, bounds.se.lng, bounds.ne.lat];
		let index = new Supercluster({
			radius: 60,
			maxZoom: 16
		});
		
		index.load(visible);
		let clust = index.getClusters(bbox, zoom);
		setMarkersToRender(clust);
	});

	return (
		<div className='map'>
			<div className={'map-container ' + (mapLoaded ? '' : 'map-hidden')}>
				<GoogleMapReact
					bootstrapURLKeys={{ key: props.mapsKey }}
					center={props.location}
					zoom={props.location.zoom}
					onChange={onChange}
					options={{clickableIcons: false}}
					onTilesLoaded={() => setMapLoaded(true)} >	
					{
						markersToRender.map(marker => {
							if (marker.type === 'point') {
								return (<ParkingZone
									key={marker.z_id}
									lat={marker.lat}
									lng={marker.lng}
									onClick={() => {zoneClick(marker)}}
								/>);
							} else {
								return (<ZoneCluster
									key={String(marker.geometry.coordinates[0]) + String(marker.geometry.coordinates[1])}
									lat={marker.geometry.coordinates[1]}
									lng={marker.geometry.coordinates[0]}
									numZones={marker.properties.point_count}
									onClick={() => {clusterClick(marker);}}
								/>);
							}

						})
					}
					
					{
						activeMarker !== undefined ?
						<ZoneTooltip 
							lat={activeMarker.lat} 
							lng={activeMarker.lng} 
							zone={activeMarker}
							setActiveMarker={setActiveMarker} />
						:
						null
					}
				</GoogleMapReact>
			</div>
			<div className='status-container'>
				<LoadingDots
					color='#288BE4'
					show={true}
				/>
			</div>
		</div>
	);
}