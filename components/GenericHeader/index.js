import './GenericHeader.css';

export default function GenericHeader() {
	return (
		<header id='generic-header'>
			<div id='header-content-wrapper'>
				<div className='title'>
					<h1><a href='/'>BOSTON PARKING ZONES</a></h1>
					<div className='underline'></div>
				</div>
				<nav>
					<ul>
						<li>
							<a href='/'>
								<img src='/pin.svg' alt='parking zone location' height={18}></img>
								View the Map
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}