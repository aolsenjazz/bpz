import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import './index.css';

const jsx = (<Home />);

ReactDOM.hydrate(jsx, document.getElementById('app'));
