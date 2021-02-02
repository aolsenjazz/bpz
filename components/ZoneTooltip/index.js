import './ZoneTooltip.css';

export default function ZoneTooltip(props) {
	return (
		 <div className='component-zone-tooltip' onClick={(e) => e.stopPropagation()}>
		 	<div className='tooltip-data-container'>
				<div className='data-container tooltip-header'>
					<div>
						<img src='/sign.svg' height='15' alt='park boston zone id sign' />
						<p>
							Zone ID
						</p>
						<div className='cross' onClick={() => { this.props.setActiveMarker(undefined) }}>
						</div>
					</div>
					<p>
						{this.props.zone.zId}
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
						{this.props.zone.street}
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
						{this.props.zone.direction}
					</p>
				</div>
			</div>
		 </div>
	);
}