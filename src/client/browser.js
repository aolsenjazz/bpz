import React from 'react';
import ReactDOM from 'react-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

import './index.css';

let mappings = {
	'/': <Home {...window.__APP_INITIAL_STATE__}/>,
	'/about': <About {...window.__APP_INITIAL_STATE__}/>,
	'/privacy-policy': <PrivacyPolicy {...window.__APP_INITIAL_STATE__}/>,
	'/terms-of-service': <TermsOfService {...window.__APP_INITIAL_STATE__}/>,
	'/contact': <Contact {...window.__APP_INITIAL_STATE__}/>,
}
let pathName = window.location.pathname;

ReactDOM.hydrate(mappings[pathName], document.getElementById('app'));
