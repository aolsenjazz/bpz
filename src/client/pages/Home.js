import React from 'react';
import ReactGA from 'react-ga';
import App from '../component/App';

class Home extends React.Component {

	onComponentMount() {
		ReactGA.initialize('UA-140209997-1');
		ReactGA.pageview(window.location.pathname + window.location.search);
	}

	render() {
		return (
			<App markers={this.props.markers} />
		)
	}

}

export default Home;