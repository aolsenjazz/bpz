import React from 'react';
import './LocationSelectTitle.css';


class LocationSelectTitle extends React.Component {

	render() {
		return (
			<div className={this.props.show ? 'select-location-title title-visible' : 'select-location-title'}>
				<div>
					<p>SELECT LOCATION</p>
					<div className='cross' onClick={this.props.onClick}></div>
				</div>
			</div>
		);
	}

}

export default LocationSelectTitle;