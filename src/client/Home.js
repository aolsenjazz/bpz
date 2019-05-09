import React from 'react';
import Twitter from './twitter.svg';
import App from './component/App';

class Home extends React.Component {

	render() {
		// console.log(this.props);
		return (
			<App markers={this.props.markers} />
		)
	}

}

export default Home;