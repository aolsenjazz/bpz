import React from 'react';

import './Faces.css';

import Kevin from './kevin.png';
import Alex from './alex.png';
import Aquila from './aquila.png';
import Jon from './jon.png';
import JP from './jp.png';
import Shadow from './shadow.svg';

const SMALL = 60;
const MEDIUM = 80;
const LARGE = 110;

const pics = [JP, Kevin, Alex, Aquila, Jon];

class Faces extends React.Component {
	render() {
		return (
			<div className='people'>
				{
					pics.map((pic, index) => {
						return (
								<div key={index} className={'person-' + index}>
									<img src={pic} 
										height={index === 2 ? LARGE : index === 1 || index === 3 ? MEDIUM : SMALL} 
										alt={pic}
										className='person'>
									</img>
									<img src={Shadow} className='shadow' alt='shadow'></img>
								</div>
							);
					})
				}
				
			</div>
		)
	}

}

export default Faces;