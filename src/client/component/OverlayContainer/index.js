import React from 'react';
import {Link, animateScroll as scroll} from 'react-scroll';

import SubmitLocationForm from '../SubmitLocationForm';
import ReportIncorrectForm from '../ReportIncorrectForm';
import SimpleMap from '../Map';
import FeedbackForm from '../FeedbackForm';

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
				/>
				<SubmitLocationForm 
					show={this.props.overlayMode() === OVERLAYS.SUBMIT}
					activeLocation={this.props.activeLocation}
					onCloseSubmit={this.removeTemporaryMarker}
					overlayMode={this.props.overlayMode}
				/>
				<ReportIncorrectForm 
					show={this.props.overlayMode() === OVERLAYS.REPORT}
					overlayMode={this.props.overlayMode}
				/>
				<FeedbackForm 
					show={this.props.overlayMode() === OVERLAYS.FEEDBACK}
					overlayMode={this.props.overlayMode}
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