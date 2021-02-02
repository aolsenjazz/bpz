import { useState } from 'react';

import './ZoneList.css';

export default function ZoneList(props) {
	const [showAll, setShowAll] = useState(false);

	return (
		<div id='zone-list' className='zone-list'>
			<div>
				<h2>
					ZONE LIST
				</h2>
				<div className='underline'>
				</div>
			</div>
			<table>
				<thead>
					<tr>
						<th>
							<img src='/sign.svg' alt='boston parking meter sign icon'></img>
							<p>
								Zone ID
							</p>
						</th>
						<th>
							<img src='/pin.svg' alt='parking zone location'></img>
							<p>
								Street
							</p>
						</th>
						<th>
							<img src='/compass.svg' alt='parking street direction'></img>
							<p>
								Side of Street
							</p>
						</th>
					</tr>
					</thead>
				<tbody>
					{
						showAll
							? props.zones.map(z => {
								return (
									<tr key={z.z_id}>
										<td>
											{z.z_id}
										</td>
										<td>
											{z.street}
										</td>
										<td>
											{z.direction}
										</td>
									</tr>
									)
							})
							: props.zones.map((z, index) => {
								if (index >= 5) return;
								return (
									<tr key={z.z_id}>
										<td>
											{z.z_id}
										</td>
										<td>
											{z.street}
										</td>
										<td>
											{z.direction}
										</td>
									</tr>
									)
							})
					}
				</tbody>
			</table>
			<p className='more' hidden={showAll} onClick={() => setShowAll(true)} >
				Show All (587 Total)
			</p>
			<p className='more' hidden={!showAll} onClick={() => setShowAll(false)} >
				Show Less (587 Total)
			</p>
		</div>
	);
}