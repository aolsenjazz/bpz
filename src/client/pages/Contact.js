import React from 'react';
import Footer from '../component/Footer';
import GenericHeader from '../component/GenericHeader';
import Faces from '../component/Faces';

import './contact-us.css';

class Contact extends React.Component {

	render() {
		return (
			<div id='contact'>
				<GenericHeader />
				<div id='contact-container'>
					<div className='contact-wrapper'>
						<div className='width-40 inline'>
							<Faces />
						</div>
						<div className='width-60 inline'>
							<h2>
								Contact Us
							</h2>
							<p>
								We're all pretty friendly. You can contact us via email by clicking <a href="mailto:aolsenjazz@gmail.com">here</a>.
							</p>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		)
	}

}

export default Contact;