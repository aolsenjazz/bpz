import React from 'react';
import App from '../component/App';

class Home extends React.Component {

	render() {
		return (
			<App markers={this.props.markers} />
		)
	}

}

export default Home;