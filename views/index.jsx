import React from 'react';
import ReactGA from 'react-ga';
import App from '@Components/App';

import './global.css';

class Home extends React.Component {

	componentDidMount() {
		ReactGA.initialize('UA-140209997-1');
		ReactGA.pageview(window.location.pathname + window.location.search);
	}

	render() {
		return (
			<App markers={this.props.markers} mapsKey={this.props.mapsKey} />
		)
	}

}

export default Home;