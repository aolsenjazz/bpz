import './Faces.css';

const SMALL = 60;
const MEDIUM = 80;
const LARGE = 110;

const pics = [
	'/boston-parking-expert-1.png',
	'/boston-parking-expert-2.png',
	'/boston-parking-expert-3.png',
	'/boston-parking-expert-4.png',
	'/boston-parking-expert-5.png',
]

export default function Faces() {
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
								<img src='/shadow.svg' className='shadow' alt='shadow'></img>
							</div>
						);
				})
			}
		</div>
	);
}