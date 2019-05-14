import React from 'react';

import './Faces.css';

import Kevin from './boston-parking-expert-1.png';
import Alex from './boston-parking-expert-2.png';
import Aquila from './boston-parking-expert-3.png';
import Jon from './boston-parking-expert-4.png';
import JP from './boston-parking-expert-5.png';
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
										alt='parking expert'
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