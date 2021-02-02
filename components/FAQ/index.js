import './FAQ.css';

export default function FAQ() {
	return (
		<div id='faq' className='faq'>
			<div>
				<h2>
					FAQ
				</h2>
				<div className='underline'>
				</div>
			</div>
			<div>
				<h3>
					What is ParkBoston?
				</h3>
				<p className='answer'>
					<a href='http://park.boston.gov/'>ParkBoston</a> is a mobile app and website developed by <a href='https://www.passportinc.com/'>Passport Labs</a> which can be used to pay for parking at metered parking spots in Boston, Massachusetts.
				</p>
			</div>
			<div>
				<h3>
					What is Passport Labs?
				</h3>
				<p className='answer'>
					<a href='https://www.passportinc.com/'>Passport Labs</a> is a mobile app development company that has developed parking apps for several cities. In addition to the ParkBoston app, they have also published the Passport Parking app. Bostonians should use ParkBoston.
				</p>
			</div>
			<div>
				<h3>
					Where is this data from?
				</h3>
				<p className='answer'>
					I downloaded most of this data from the City of Boston. <a href='http://bostonopendata-boston.opendata.arcgis.com/datasets/962da9bb739f440ba33e746661921244_9'>Check this link</a> if you'd like to download it.
				</p>
			</div>
			<div>
				<h3>
					Where is there free parking in Boston?
				</h3>
				<p className='answer'>
					Here are the only spots I know. If you know of any sweet spots, help everyone out and <a href='/contact'>Contact Us</a> to let me know.<br /><br />
					<a href='https://goo.gl/maps/vAWtjn4hGBeW3Km66'>Orkney Road</a>: This spot is nice because there's a ton of spots during the day and it's at the end of the green line.<br /><br />
					<a href='https://goo.gl/maps/6TRLoNWQYN8ZbBsGA'>Behind the MFA</a>: There are a number of spots on Fenway (the road) directly behind the MFA.<br /><br />
					<a href='https://goo.gl/maps/8rVi73AYCGBDKeuQ6'>Across from South Station</a>: There are a few 15 minute parking spots available. Good in a pinch.
				</p>
			</div>
			<div>
				<h3>
					How do I get a resident permit?
				</h3>
				<p className='answer'>
					You can get a resident parking permit by bringing your registration and valid <a href='https://www.boston.gov/departments/parking-clerk/how-get-resident-parking-permit#proof-of-boston-residency'>proof of residence</a> to the Parking Dept (second floor) at City Hall. <a href='https://www.boston.gov/departments/parking-clerk/how-get-resident-parking-permit'>More info here.</a>
				</p>
			</div>
			<div>
				<h3>
					How do I Dispute a Parking Ticket?
				</h3>
				<p className='answer'>
					You can dispute a parking ticket by filling out a <a href='https://prdwmq.etimspayments.com/pbw/include/boston/complaintform.jsp'>Parking Dispute form.</a>
				</p>
			</div>
		</div>
	);
}