import './LocationSelectTitle.css';

export default function LocationSelectTitle(props) {
	return (
		<div className={props.show ? 'select-location-title title-visible' : 'select-location-title'}>
			<div>
				<p>SELECT LOCATION</p>
				<div className='cross' onClick={props.onClick}></div>
			</div>
		</div>
	);
}