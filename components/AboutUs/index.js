import React from 'react';

import Faces from '../Faces';
import './AboutUs.css';

class AboutUs extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id='about-us'>
				<div className='width-40 inline'>
					<Faces />
				</div>
				<div className='width-60 inline'>
					<h2>
						We're Lifelong Boston Residents
					</h2>
					<p>
						and we’ve recieved our fair share of parking tickets. Parking in Boston is hard enough, and we thought it was ridiculous that there was no way to find ParkBoston meter zone numbers online.
					</p>
				</div>
			</div>
		)
	}

}

export default AboutUs;