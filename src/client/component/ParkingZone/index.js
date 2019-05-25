import React from 'react';

import './ParkingZone.css';

export default class ParkingZone extends React.Component {

	constructor(props) {
		super(props);

		this.onClick = this.onClick.bind(this);
	}

	onClick(e) {
		console.log('sanity');
		e.preventDefault();
		this.props.onClick();
	}

	render() {
		return (
			 <div className={'component-parking-zone ' + (this.props.show ? '' : 'zone-hidden')} onClick={this.onClick}>
			 </div>
		);
	}
}