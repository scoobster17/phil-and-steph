// React dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import RoutesClientWrapper from './config/routes-client-wrapper';

require('./static/css/style.scss');

window.onload = () => {
	ReactDOM.render(
		<RoutesClientWrapper />,
		document.getElementById('container')
	);
};