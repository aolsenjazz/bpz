import React from 'react';
import axios from 'axios';

import './ZoneList.css';

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			showAll: false
		}
	}

	render() {
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
							this.state.showAll
								? this.props.zones.map(z => {
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
								: this.props.zones.map((z, index) => {
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
				<p className='more' hidden={this.state.showAll} onClick={() => this.setState({showAll: true})} >
					Show All (587 Total)
				</p>
				<p className='more' hidden={!this.state.showAll} onClick={() => this.setState({showAll: false})} >
					Show Less (587 Total)
				</p>
			</div>
		);
	}
}

export default App;