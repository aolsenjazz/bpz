import React from 'react';

import {OVERLAYS} from '../OverlayContainer';

import './ZoneTooltip.css';

export default class ParkingZone extends React.Component {

	constructor(props) {
		super(props)

		this.onReportClick = this.onReportClick.bind(this);
	}

	onReportClick() {
		this.props.show(false);
		this.props.overlayMode(OVERLAYS.REPORT);
		this.props.activeLocation(null, null, null, this.props.zId);
	}

	render() {
		return (
			 <div className={'component-zone-tooltip ' + (this.props.show() ? '' : 'tooltip-hidden')} onClick={(e) => e.stopPropagation()}>
			 	<div className='tooltip-data-container'>
					<div className='data-container tooltip-header'>
						<div>
							<img src='/sign.svg' height='15' alt='park boston zone id sign' />
							<p>
								Zone ID
							</p>
							<div className='cross' onClick={() => this.props.show(false)}>
							</div>
						</div>
						<p>
							{this.props.activeLocation().zId}
						</p>
					</div>
					<div className='data-container width-50'>
						<div>
							<img src='/pin.svg' height='15' alt='meter zone location icon' />
							<p>
								Street
							</p>
						</div>
						<p>
							{this.props.activeLocation().street}
						</p>
					</div>
					<div className='data-container width-50'>
						<div>
							<img src='/compass.svg' height='15' alt='meter zone location icon side of street' />
							<p>
								Side of Street
							</p>
						</div>
						<p>
							{this.props.activeLocation().direction}
						</p>
					</div>
					<p className='report-incorrect' onClick={this.onReportClick}>
						Report Incorrect Information
					</p>
				</div>
			 </div>
		);
	}
}