import React from 'react';
import LocationSearch from '../LocationSearch';
import './GenericHeader.css';

class GenericHeader extends React.Component {

	render() {
		return (
			<header>
				<div className='title'>
					<h1><a href='/'>BOSTON PARKING ZONES</a></h1>
					<div className='underline'></div>
				</div>
			</header>
		)
	}

}

export default GenericHeader;