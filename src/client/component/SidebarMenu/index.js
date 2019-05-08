import React from 'react';

import SidebarButton from '../SidebarButton';
import Warning from '../SidebarButton/warning.svg';
import Report from '../SidebarButton/report.svg';
import Smile from '../SidebarButton/smile.svg';
import {OVERLAYS} from '../OverlayContainer';

import './SidebarMenu.css';

export default class LoadingDots extends React.Component {

	render() {
		let controls = [
			{ icon: Report, text: 'Submit Unlisted Zone', click: () => this.props.overlayMode(OVERLAYS.SUBMIT) },
			{ icon: Warning, text: 'Report Incorrect Info', click: () => this.props.overlayMode(OVERLAYS.REPORT) },
			{ icon: Smile, text: 'Send Feedback', click: () => this.props.overlayMode(OVERLAYS.FEEDBACK),},
		]

		let controlElems = controls.map((c, i) => { return (<SidebarButton onClick={c.click} icon={c.icon} text={c.text} key={i} />) });

		return (
			 <div>
				<button onClick={() => this.props.sidebarOpen(false)}>
					Hide
				</button>
				{ controlElems }
			</div>
		);
	}
}