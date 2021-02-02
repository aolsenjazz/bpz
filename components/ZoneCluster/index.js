import { useCallback } from 'react';

import './ZoneCluster.css';

export default function ZoneCluster(props) {
	const click = useCallback((e) => {
		props.onClick({lat: props.lat, lng: props.lng, numZones: props.numZones});
	});

	return (
		 <div className="component-zone-cluster" onClick={(e) => click(e)}>
		 	{props.numZones}
		 </div>
	);
}