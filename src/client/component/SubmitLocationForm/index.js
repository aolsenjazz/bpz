import React from 'react';
import axios from 'axios';

import HoverForm from '../HoverForm';
import Pin from './pin.svg';
import Sign from './sign.svg';
import Details from './details.svg'
import {OVERLAYS} from '../OverlayContainer';

import './SubmitLocationForm.css';

class SubmitLocationForm extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			form: React.createRef(),
			'zId': '',
			description: '',
		}

		this.onSubmit = this.onSubmit.bind(this);
		this.onClose = this.onClose.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	onClose() {
		this.props.overlayMode(OVERLAYS.NONE);
	}

	// Form is validated + submit blocked automatically by react-form-with-constraints if invalid input
	onSubmit(e) {
		e.preventDefault();
		
		this.setState({ loading: true });

		let active = this.props.activeLocation();
		this.sendRequest({zId: this.state.zId, lat: active.lat, lng: active.lng, text: this.state.description})
	}

	sendRequest(proposal) {

		axios.post('https://bpz.onrender.com/proposals', proposal)
			.then(response => {
				this.setState({
					loading: false,
					submitted: true,
				})
				
				setTimeout(() => { this.onClose(); }, 1000);
			})
			.catch (e => {
				console.error(e);
			})
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	render() {
		return (
			<div id='submit-location'>
				<HoverForm
					title='SUBMIT AN UNLISTED ZONE' 
					show={this.props.show} 
					onClose={this.onClose} 
					onSubmit={this.onSubmit}
					loading={this.state.loading}
					submitted={this.state.submitted}
					>
					<div>
						<p>Zone ID</p>
						<div>
							<img src={Sign} alt='number icon' height='14' />
							<input 
								name='zId' 
								placeholder='e.g. 219' 
								onChange={this.handleChange} 
								value={this.state.zId}
								required minLength={3} maxLength={10}
							/>
						</div>
					</div>
					<div>
						<p>Latitude</p>
						<div>
							<img src={Pin} alt='number icon' height='14' />
							<p className='read-only-field'>{this.props.activeLocation().lat || 'Click somewhere on the map!'}</p>
						</div>
					</div>
					<div>
						<p>Longitude</p>
						<div>
							<img src={Pin} alt='number icon' height='14' />
							<p className='read-only-field'>{this.props.activeLocation().lng || 'Click somewhere on the map!'}</p>
						</div>
					</div>
					<div>
						<p>Description</p>
						<div>
							<img src={Details} alt='number icon' height='14' />
							
							<input 
								name='description' 
								placeholder='Any addition info' 
								onChange={this.handleChange} 
								value={this.state.description}
								maxLength={300}
							/>
						</div>
					</div>
				</HoverForm>
			</div>
		);
	}

}

export default SubmitLocationForm;