import React from 'react';
import ReactGA from 'react-ga';
import Favicon from 'react-favicon';

import App from '@Components/App';

import './global.css';

class Home extends React.Component {

	componentDidMount() {
		ReactGA.initialize('UA-140209997-1');
		ReactGA.pageview(window.location.pathname + window.location.search);
	}

	render() {
		return (
			<React.Fragment>
				<title>Boston Parking Zones</title>
				<Favicon url="/pin.ico" />
				<App markers={this.props.markers} mapsKey={this.props.mapsKey} />
			</React.Fragment>
		)
	}

}

export default Home;