import LocationSearch from '../LocationSearch';
import './Header.css';

export default function Header(props) {
	return (
		<header id='app-header' className={props.overlayMode ? 'header-collapsed' : ''}>
			<div className='title'>
				<h1><a href='/'>BOSTON PARKING ZONES</a></h1>
				<div className='underline'></div>
			</div>
			<LocationSearch 
				activeLocation={props.activeLocation} 
				overlayMode={props.overlayMode}
				center={props.center}
			/>
		</header>
	)
}