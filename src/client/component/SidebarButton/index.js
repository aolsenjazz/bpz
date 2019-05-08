import React from 'react';
import './SidebarButton.css';


class SidebarButton extends React.Component {

	render() {
		return (
			<div className='component-sidebar-button'>
				<div className='pad-wrapper'>
					<div>
						<img src={this.props.icon} alt={this.props.text} />
					</div>
					<button onClick={this.props.onClick}>
						{ this.props.text }
					</button>
				</div>
			</div>
		);
	}

}

export default SidebarButton;