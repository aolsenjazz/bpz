import React from 'react';
import { renderToString } from 'react-dom/server';

function renderer(title, content) {
	const _content = renderToString(content);

	const jsx = `
		<!DOCTYPE html>
		<html>
		<head>
			<title>${title}</title>
			<meta charset="utf-8">
			<meta name="viewport" content="width=device-width, initial-scale=1">
			<link rel="stylesheet" type="text/css" href="styles.css">
		</head>

		<body>
			<div id="app">${_content}</div>
			<script src="/bundle.js"></script>
		</body>
		</html>
	`;

	return jsx;
}

export default renderer;