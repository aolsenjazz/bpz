import React from 'react';
import Sidebar from 'react-sidebar';
import SidebarMenu from '../SidebarMenu';
import Header from '../Header';
import ZoneList from '../ZoneList';
import OverlayContainer, {OVERLAYS} from '../OverlayContainer';
import Footer from '../Footer';
import FAQ from '../FAQ';

import './App.css';

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			sidebarOpen: false,
			overlayMode: 0,
			activeLocation: {
				lat: 42.3596779,
				lng: -71.0621397, 
				zoom: 16,
				zId: '',
				description: '',
				direction: '',
				street: '',
			},
			center: {
				lat: 42.3596779,
				lng: -71.0621397,
			},
		};

		this.activeLocation = this.activeLocation.bind(this);
		this.overlayMode = this.overlayMode.bind(this);
		this.sidebarOpen = this.sidebarOpen.bind(this);
		this.center = this.center.bind(this);
	}

	activeLocation(lat, lng, zoom, zId, description, direction, street) {
		if (!lat && !lng && !zoom && !zId) return this.state.activeLocation;

		this.setState({
			activeLocation: {
				lat: lat ? lat : this.state.activeLocation.lat,
				lng: lng ? lng : this.state.activeLocation.lng,
				zoom: zoom ? zoom : this.state.activeLocation.zoom,
				zId: zId,
				description: description,
				direction: direction ? direction : this.state.activeLocation.direction,
				street: street ? street : this.state.activeLocation.street,
			}
		});
	}

	overlayMode(mode) {
		if (mode === undefined) return this.state.overlayMode;

		this.setState({
			overlayMode: mode,
			sidebarOpen: false,
			activeLocation: {
				lat: '',
				lng: '',
				zId: '',
				description: '',
				direction: '',
				street: '',
			}
		});
	}

	sidebarOpen(open) {
		if (open === undefined) return this.state.sidebarOpen;

		this.setState({
			sidebarOpen: open,
		});
	}

	center(lat, lng) {
		if (lat === undefined && lng === undefined) return this.state.center;

		this.setState({
			center: {
				lat: lat,
				lng: lng,
			}
		})
	}

	render() {
		return (
			<Sidebar
				sidebar={
					<SidebarMenu 
						overlayMode={this.overlayMode}
						sidebarOpen={this.sidebarOpen}
					/>
				}
				open={this.sidebarOpen()}
				overlayMode={this.overlayMode()}
				onSetOpen={this.sidebarOpen}
				sidebarClassName='sidebar'
			>
				<Header 
					activeLocation={this.activeLocation} 
					sidebarOpen={this.sidebarOpen}
					overlayMode={this.overlayMode() !== OVERLAYS.NONE}
					center={this.center}
				/>
				<OverlayContainer
					overlayMode={this.overlayMode}
					activeLocation={this.activeLocation}
					center={this.center}
					markers={this.props.markers}
					scroll={this.scroll}
				/>
				<div id='static-content'>
					<ZoneList zones={this.props.markers} ref={(section) => { this.ZoneList = section; }} />
					<FAQ />
				</div>
				<Footer />
			</Sidebar>
		);
	}
}

export default App;