import React from 'react';
import {FormWithConstraints} from 'react-form-with-constraints';
import LoadingDots from '../LoadingDots';

import './HoverForm.css';

export default class HoverForm extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			form: React.createRef(),
		};
	}

	render() {
		return (
			<div className={'component-hover-form ' + (this.props.show ? '' : 'submit-hidden')}>
				<div>
					<p>
						{this.props.title}
					</p>
					<div className='cross' onClick={this.props.onClose}>
					</div>
				</div>
				<FormWithConstraints ref={this.state.form} onSubmit={this.props.onSubmit}>
					{this.props.children}
					<input 
						type='submit' disabled={this.props.submitted || this.props.loading ? 'disabled' : ''}
						value={this.props.submitted ? this.props.completedMessage : this.props.loading ? '' : this.props.submitMessage}
						className={this.props.loading ? 'submit-loading' : this.props.submitted ? 'submit-submitted' : ''} />
					<LoadingDots show={this.props.loading} />
				</FormWithConstraints>
			</div>
		);
	}
}