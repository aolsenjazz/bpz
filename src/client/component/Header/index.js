import React from 'react';
import LocationSearch from '../LocationSearch';
import './Header.css';

class Header extends React.Component {

	render() {
		return (
			<header className={this.props.overlayMode ? 'header-collapsed' : ''}>
				<button className='component-sidebar-toggle' onClick={() => this.props.sidebarOpen(true)}>
					<div />
					<div />
					<div />
				</button>

				<div className='title'>
					<h1><a href='/'>BOSTON PARKING ZONES</a></h1>
					<div className='underline'></div>
				</div>
				<LocationSearch 
					activeLocation={this.props.activeLocation} 
					overlayMode={this.props.overlayMode}
					center={this.props.center}
				/>
			</header>
		)
	}

}

export default Header;