import { useCallback } from 'react';

import './ZoneCluster.css';

export default function ZoneCluster(props) {
	const click = useCallback(() => {
		e.preventDefault();
		props.onClick({lat: props.lat, lng: props.lng, numZones: props.numZones});
	});

	return (
		 <div className={'component-zone-cluster ' + (props.show ? '' : 'cluster-hidden')} onClick={click}>
		 	{props.numZones}
		 </div>
	);
}