import { useEffect, Fragment } from 'react';
import ReactGA from 'react-ga';
import Favicon from 'react-favicon';

import Footer from '@Components/Footer';
import GenericHeader from '@Components/GenericHeader';

import './privacy-policy.css';
import './global.css';

export default function PrivacyPolicy(props) {
	useEffect(() => {
		ReactGA.initialize(props.gaId);
		ReactGA.pageview(window.location.pathname + window.location.search);
	});

	return (
		<Fragment>
			<title>BPZ - Privacy</title>
			<Favicon url="/pin.ico" />
			<GenericHeader />
			<div id='privacy-policy'>
				<h1>Welcome to our Privacy Policy</h1>
				<h3>Your privacy is critically important to us.</h3>
				<p>Boston Parking Zones is located at:<br/></p>
				<address>33 Granite St.<br />Foxboro MA 02035<br/>5082330087</address>

				<p>It is Boston Parking Zones's policy to respect your privacy regarding any information we may collect while operating our website. This Privacy Policy applies to <a href="http://bostonparkingzones.com">bostonparkingzones.com</a> (hereinafter, "us", "we", or "bostonparkingzones.com"). We respect your privacy and are committed to protecting personally identifiable information you may provide us through the Website. We have adopted this privacy policy ("Privacy Policy") to explain what information may be collected on our Website, how we use this information, and under what circumstances we may disclose the information to third parties. This Privacy Policy applies only to information we collect through the Website and does not apply to our collection of information from other sources.</p>
				<p>This Privacy Policy, together with the Terms and conditions posted on our Website, set forth the general rules and policies governing your use of our Website. Depending on your activities when visiting our Website, you may be required to agree to additional terms and conditions.</p>

				<h2>Website Visitors</h2>
				<p>Like most website operators, Boston Parking Zones collects non-personally-identifying information of the sort that web browsers and servers typically make available, such as the browser type, language preference, referring site, and the date and time of each visitor request. Boston Parking Zones's purpose in collecting non-personally identifying information is to better understand how Boston Parking Zones's visitors use its website. From time to time, Boston Parking Zones may release non-personally-identifying information in the aggregate, e.g., by publishing a report on trends in the usage of its website.</p>
				<p>Boston Parking Zones also collects potentially personally-identifying information like Internet Protocol (IP) addresses for logged in users and for users leaving comments on http://bostonparkingzones.com blog posts. Boston Parking Zones only discloses logged in user and commenter IP addresses under the same circumstances that it uses and discloses personally-identifying information as described below.</p>
				
				<h2>Gathering of Personally-Identifying Information</h2>
				<p>Certain visitors to Boston Parking Zones's websites choose to interact with Boston Parking Zones in ways that require Boston Parking Zones to gather personally-identifying information. The amount and type of information that Boston Parking Zones gathers depends on the nature of the interaction. For example, we ask visitors who sign up for a blog at http://bostonparkingzones.com to provide a username and email address.</p>
				
				<h2>Security</h2>
				<p>The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.</p>
				
				<h2>Advertisements</h2>
				<p>Ads appearing on our website may be delivered to users by advertising partners, who may set cookies. These cookies allow the ad server to recognize your computer each time they send you an online advertisement to compile information about you or others who use your computer. This information allows ad networks to, among other things, deliver targeted advertisements that they believe will be of most interest to you. This Privacy Policy covers the use of cookies by Boston Parking Zones and does not cover the use of cookies by any advertisers.</p>
				
				<h2>Links To External Sites</h2>
				<p>Our Service may contain links to external sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy and terms and conditions of every site you visit.</p>
				<p>We have no control over, and assume no responsibility for the content, privacy policies or practices of any third party sites, products or services.</p>
				
				<h2>Bostonparkingzones.com uses Google AdWords for remarketing</h2>
				<p>Bostonparkingzones.com uses the remarketing services to advertise on third party websites (including Google) to previous visitors to our site. It could mean that we advertise to previous visitors who haven't completed a task on our site, for example using the contact form to make an enquiry. This could be in the form of an advertisement on the Google search results page, or a site in the Google Display Network. Third-party vendors, including Google, use cookies to serve ads based on someone's past visits. Of course, any data collected will be used in accordance with our own privacy policy and Google's privacy policy.</p>
				<p>You can set preferences for how Google advertises to you using the Google Ad Preferences page, and if you want to you can opt out of interest-based advertising entirely by cookie settings or permanently using a browser plugin.</p>
				
				<h2>Aggregated Statistics</h2>
				<p>Boston Parking Zones may collect statistics about the behavior of visitors to its website. Boston Parking Zones may display this information publicly or provide it to others. However, Boston Parking Zones does not disclose your personally-identifying information.</p>
				
				<h2>Cookies</h2>
				<p>To enrich and perfect your online experience, Boston Parking Zones uses "Cookies", similar technologies and services provided by others to display personalized content, appropriate advertising and store your preferences on your computer.</p>
				<p>A cookie is a string of information that a website stores on a visitor's computer, and that the visitor's browser provides to the website each time the visitor returns. Boston Parking Zones uses cookies to help Boston Parking Zones identify and track visitors, their usage of http://bostonparkingzones.com, and their website access preferences. Boston Parking Zones visitors who do not wish to have cookies placed on their computers should set their browsers to refuse cookies before using Boston Parking Zones's websites, with the drawback that certain features of Boston Parking Zones's websites may not function properly without the aid of cookies.</p>
				<p>By continuing to navigate our website without changing your cookie settings, you hereby acknowledge and agree to Boston Parking Zones's use of cookies.</p>
				
				<h2>Privacy Policy Changes</h2>
				<p>Although most changes are likely to be minor, Boston Parking Zones may change its Privacy Policy from time to time, and in Boston Parking Zones's sole discretion. Boston Parking Zones encourages visitors to frequently check this page for any changes to its Privacy Policy. Your continued use of this site after any change in this Privacy Policy will constitute your acceptance of such change.</p>
				
				<h2>Contact Information</h2>
				<p>If you have any questions about this Privacy Policy, please contact us via <a href="mailto:aolsenjazz@gmail.com">email</a> or <a href="tel:5082330087">phone</a>.</p>
			</div>
			<Footer />
		</Fragment>
	);
}