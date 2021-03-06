import { useEffect } from 'react';
import ReactGA from 'react-ga';
import Favicon from 'react-favicon';

import Footer from '@Components/Footer';
import GenericHeader from '@Components/GenericHeader';
import Faces from '@Components/Faces';

import './contact.css';
import './global.css';

export default function Contact(props) {
	useEffect(() => {
		ReactGA.initialize(props.gaId);
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);

	return (
		<div id='contact'>
			<title>BPZ - Contact</title>
			<Favicon url="/pin.ico" />
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
	);
}