import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import './index.css';

const jsx = (<Home {...window.__APP_INITIAL_STATE__}/>);

ReactDOM.hydrate(jsx, document.getElementById('app'));
