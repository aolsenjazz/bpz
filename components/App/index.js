import { useState, useEffect, useCallback } from 'react';

import Header from '../Header';
import ZoneList from '../ZoneList';
import Footer from '../Footer';
import FAQ from '../FAQ';
import SimpleMap from '../Map';

import './App.css';

export default function App(props) {
	const [location, setLocation] = useState({
		lat: 42.3596779,
		lng: -71.0621397, 
		zoom: 16
	});

	return (
		<React.Fragment>
			<Header location={location} setLocation={setLocation} />
			
			<div id='map-container'>
				<SimpleMap location={location} setLocation={setLocation} markers={props.markers} mapsKey={props.mapsKey} />
				<a href='#zone-list'className='bottom-scroll-label'>Zone List & FAQ</a>
			</div>

			<div id='static-content'>
				<ZoneList zones={props.markers}/>
				<FAQ />
			</div>

			<Footer />
		</React.Fragment>
	);
}





// activeLocation(lat, lng, zoom, zId, description, direction, street) {
	// 	if (!lat && !lng && !zoom && !zId) return this.state.activeLocation;

	// 	this.setState({
	// 		activeLocation: {
	// 			lat: lat ? lat : this.state.activeLocation.lat,
	// 			lng: lng ? lng : this.state.activeLocation.lng,
	// 			zoom: zoom ? zoom : this.state.activeLocation.zoom,
	// 			zId: zId,
	// 			description: description,
	// 			direction: direction ? direction : this.state.activeLocation.direction,
	// 			street: street ? street : this.state.activeLocation.street,
	// 		}
	// 	});
	// }

	// center(lat, lng) {
	// 	if (lat === undefined && lng === undefined) return this.state.center;

	// 	this.setState({
	// 		center: {
	// 			lat: lat,
	// 			lng: lng,
	// 		}
	// 	})
	// }