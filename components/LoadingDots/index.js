import React from 'react';

import './LoadingDots.css';

export default class LoadingDots extends React.Component {

	render() {
		return (
			 <div className={'lds-ellipsis ' + (this.props.show ? '' : 'lds-hidden')}>
				 <div style={{ backgroundColor: this.props.color ? this.props.color : 'white' }}></div>
				 <div style={{ backgroundColor: this.props.color ? this.props.color : 'white'}}></div>
				 <div style={{ backgroundColor: this.props.color ? this.props.color : 'white'}}></div>
				 <div style={{ backgroundColor: this.props.color ? this.props.color : 'white'}}></div>
			 </div>
		);
	}
}