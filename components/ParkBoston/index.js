import React from 'react';

import './ParkBoston.css';

class ParkBoston extends React.Component {

	render() {
		return (
			<div id='park-boston'>
				<div className='width-40 inline float-right'>
					<img src='/park-boston.png' alt='ParkBoston Passport Parking app'></img>
				</div>
				<div className='width-60 inline float-left'>
					<h2>
						What is ParkBoston?
					</h2>
					<p>
						ParkBoston is a mobile app used to pay for parking in Boston. Available for Android and iPhone, the ParkBoston app allows drivers to pay for their parking with their phone by entering the zone number they're parked in. ParkBoston is powered by Passport Parking.
					</p>
				</div>
			</div>
		)
	}

}

export default ParkBoston;