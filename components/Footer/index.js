import React from 'react';
import './Footer.css';

class Footer extends React.Component {

	render() {
		return (
			<footer>
				<div>
					<div className='title'>
						<h1><a href='/'>BOSTON PARKING ZONES</a></h1>
						<div className='underline'></div>
					</div>
					<nav>
						<ul>
							<li>
								<a href='/'>View the Map</a>
							</li>
							<li>
								<a href='/terms-of-service'>Terms of Service</a>
							</li>
							<li>
								<a href='/about'>About</a>
							</li>
							<li>
								<a href='/privacy-policy'>Privacy Policy</a>
							</li>
							<li>
								<a href='/contact'>Contact Us</a>
							</li>
						</ul>
					</nav>
				</div>
			</footer>
		)
	}

}

export default Footer;