import React from 'react';
import axios from 'axios';

import HoverForm from '../HoverForm';
import Sign from './sign.svg';
import Details from './details.svg';
import {OVERLAYS} from '../OverlayContainer';

import './ReportIncorrectForm.css';

class ReportIncorrectForm extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			form: React.createRef(),
			zId: '',
			description: '',
			email: '',
		}

		this.onSubmit = this.onSubmit.bind(this);
		this.onClose = this.onClose.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	onClose() {
		this.props.overlayMode(OVERLAYS.NONE);

		this.setState({ zId: '', description: '', email: '' });
	}

	onSubmit(e) {
		e.preventDefault();
		
		this.setState({
			loading: true
		});

		this.sendRequest({email: this.state.email, zId: this.state.zId, text: this.state.description});
	}

	sendRequest(correction) {
		return axios.post('https://parking.onrender.com/api/corrections', correction)
			.then(response => {
				this.setState({
					loading: false,
					submitted: true,
				})
				
				setTimeout(() => { this.onClose(); }, 1000);
			});
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	render() {
		return (
			<HoverForm
				title='REPORT AN INCORRECT ZONE' 
				show={this.props.show} 
				onClose={this.onClose} 
				onSubmit={this.onSubmit}
				loading={this.state.loading}
				submitted={this.state.submitted}
				>
				<div>
					<p>Zone ID</p>
					<div>
						<img src={Sign} alt='ParkBoston parking zone sign icon' height='14' />
						<input 
							name='zId' 
							placeholder='e.g. 219' 
							onChange={this.handleChange} 
							value={this.state.zId}
							required 
							minLength={3} 
							maxLength={10}
						/>
					</div>
				</div>
				<div>
					<p>Email</p>
					<div>
						<img src={Details} alt='contact email' height='14' />
						<input 
							name='email' 
							type='email'
							onChange={this.handleChange} 
							value={this.state.email}
							placeholder='In case I need more info' 
							maxLength={200}
							minLength={3}
							required
						/>
					</div>
				</div>
				<div>
					<p>Description</p>
					<div>
						<img src={Details} alt='description of incorrect parkboston parking zone icon' height='14' />
						<input 
							name='description' 
							onChange={this.handleChange} 
							value={this.state.description}
							placeholder='Short description of what is incorrect' 
							maxLength={200}
							required
						/>
					</div>
				</div>
			</HoverForm>
		);
	}

}

export default ReportIncorrectForm;