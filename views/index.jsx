import { useState, useEffect, Fragment } from 'react';
import ReactGA from 'react-ga';
import Favicon from 'react-favicon';

import App from '@Components/App';

import './global.css';

export default function Index(props) {
	useEffect(() => {
		ReactGA.initialize(props.gaId);
		ReactGA.pageview(window.location.pathname + window.location.search);
	});

	return (
		<Fragment>
			<title>Boston Parking Zones</title>
			<Favicon url="/pin.ico" />
			<App markers={props.markers} mapsKey={props.mapsKey} />
		</Fragment>
	);
}