import './LoadingDots.css';

export default function LoadingDots(props) {
	return (
		 <div className={'lds-ellipsis ' + (props.show ? '' : 'lds-hidden')}>
			 <div style={{ backgroundColor: props.color ? props.color : 'white' }}></div>
			 <div style={{ backgroundColor: props.color ? props.color : 'white'}}></div>
			 <div style={{ backgroundColor: props.color ? props.color : 'white'}}></div>
			 <div style={{ backgroundColor: props.color ? props.color : 'white'}}></div>
		 </div>
	);
}