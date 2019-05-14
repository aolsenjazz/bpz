import React from 'react';
import axios from 'axios';

import HoverForm from '../HoverForm';
import {OVERLAYS} from '../OverlayContainer';
import Details from './details.svg';

import './FeedbackForm.css';

class FeedbackForm extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			form: React.createRef(),
			feedback: '',
			email: '',
		}

		this.onSubmit = this.onSubmit.bind(this);
		this.onClose = this.onClose.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	onClose() {
		this.props.overlayMode(OVERLAYS.NONE);

		this.setState({ email: '', feedback: ''})
	}

	onSubmit(e) {
		e.preventDefault();
		this.setState({ loading: true });

		this.sendRequest({email: this.state.email, text: this.state.feedback});
	}

	sendRequest(feedback) {
		return axios.post('https://bpz.onrender.com/feedback', feedback)
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
			<div id='feedback-form'>
				<HoverForm
					title='SUBMIT FEEDBACK' 
					show={this.props.show} 
					onClose={this.onClose} 
					onSubmit={this.onSubmit}
					loading={this.state.loading}
					submitted={this.state.submitted}
					>
					<div>
						<p>Email</p>
						<div>
							<img src={Details} alt='your email address' height='14' />
							<input 
								name='email'
								type='email'
								onChange={this.handleChange}
								value={this.state.email}
								placeholder='In case I need more info' 
								maxLength={200}
								minLength={6}
								required
							/>
						</div>
					</div>
					<div>
						<p>Feedback</p>
						<div>
							<img src={Details} alt='parking zone feedback' height='14' />
							<input 
								name='feedback' 
								onChange={this.handleChange} 
								value={this.state.feedback}
								placeholder='What can be done better?' 
								maxLength={200}
								required
							/>
						</div>
					</div>
				</HoverForm>
			</div>
		);
	}

}

export default FeedbackForm;