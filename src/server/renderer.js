import React from 'react';
import { renderToString } from 'react-dom/server';

function renderer(title, initialState, content) {

	const jsx = `
		<!DOCTYPE html>
		<html>
		<head>
			<script>window.__APP_INITIAL_STATE__ = ${initialState}</script>
			<title>${title}</title>
			<meta charset="utf-8">
			<meta name="viewport" content="width=device-width, initial-scale=1">
			<link rel="stylesheet" type="text/css" href="styles.css">
		</head>

		<body>
			<div id="app">${content}</div>
			<script src="/bundle.js"></script>
		</body>
		</html>
	`;

	return jsx;
}

export default renderer;