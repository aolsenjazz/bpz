import React from 'react';
import {Link, animateScroll as scroll} from 'react-scroll';

import SimpleMap from '../Map';

import './OverlayContainer.css';

export const OVERLAYS = {
	NONE: 0,
	SUBMIT: 1,
	REPORT: 2,
	FEEDBACK: 3,
}

class OverlayContainer extends React.Component {

	render() {
		return (
			<div id='overlay-container'>
				<SimpleMap 
					center={this.props.center} 
					zoom={ this.props.activeLocation().zoom } 
					activeLocation={this.props.activeLocation}
					overlayMode={this.props.overlayMode}
					markers={this.props.markers}
					mapsKey={this.props.mapsKey}
				/>
				<a 
					href='#zone-list'
					className='bottom-scroll-label' 
					hidden={this.props.overlayMode() != OVERLAYS.NONE}
				>Zone List & FAQ</a>
			</div>
		);
	}
}

export default OverlayContainer;