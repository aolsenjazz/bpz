import React from 'react';
import ReactGA from 'react-ga';

import GenericHeader from '../component/GenericHeader';
import AboutUs from '../component/AboutUs';
import ParkBoston from '../component/ParkBoston';
import Footer from '../component/Footer';

import './about-us.css';

class About extends React.Component {

	onComponentMount() {
		ReactGA.initialize('UA-140209997-1');
		ReactGA.pageview(window.location.pathname + window.location.search);
	}
	
	render() {
		return (
			<div>
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
			</div>
		)
	}

}

export default About;