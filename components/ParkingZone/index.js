import { useCallback } from 'react';

import './ParkingZone.css';

export default function ParkingZone(props) {
	const click = useCallback(() => props.onClick());

	return (
		 <div className="component-parking-zone" onClick={click}></div>
	);
}