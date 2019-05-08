import React from 'react';

import './ZoneCluster.css';

export default class ParkingZone extends React.Component {

	constructor(props) {
		super(props);

		this.onClick = this.onClick.bind(this);
	}

	onClick(e) {
		e.preventDefault();
		this.props.onClick({lat: this.props.lat, lng: this.props.lng, numZones: this.props.numZones});
	}

	render() {
		return (
			 <div className={'component-zone-cluster ' + (this.props.show ? '' : 'cluster-hidden')} onClick={this.onClick}>
			 	{this.props.numZones}
			 </div>
		);
	}
}