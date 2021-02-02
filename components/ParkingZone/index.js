import { useCallback } from 'react';

import './ParkingZone.css';

export default function ParkingZone(props) {
	const click = useCallback(() => props.onClick());

	return (
		 <div className={'component-parking-zone ' + (props.show ? '' : 'zone-hidden')} onClick={click}></div>
	);
}