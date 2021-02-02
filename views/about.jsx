import { useEffect, Fragment } from 'react';
import ReactGA from 'react-ga';
import Favicon from 'react-favicon';

import GenericHeader from '@Components/GenericHeader';
import AboutUs from '@Components/AboutUs';
import ParkBoston from '@Components/ParkBoston';
import Footer from '@Components/Footer';

import './about.css';
import './global.css';

export default function About(props) {
	useEffect(() => {
		ReactGA.initialize(props.gaId);
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);

	return (
		<Fragment>
			<title>BPZ - About</title>
			<Favicon url="/pin.ico" />
			<GenericHeader />
			<div id='about-container'>
				<AboutUs />
				<ParkBoston />
				<div id='not-the-government-container'>
					<h2>
						We are not ParkBoston, Passport Parking, or the Government
					</h2>
					<p>
						Boston Parking Zones is a group of friends looking to help the Boston driving community. We started this project to fix a problem not solved by ParkBoston, Passport Parking, or City Hall. If you use this service, please consider donating via Paypal.
					</p>
				</div>
			</div>
			<Footer />
		</Fragment>
	);
}