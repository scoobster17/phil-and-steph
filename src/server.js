/* ************************************************************************** */

/**
 * Server config for Phil and Steph wedding website project
 * Author: Phil Gibbins
 */

/* DEPENDENCIES */

// Server dependencies
import path from 'path';
import { Server } from 'http';
import Express from 'express';

// React dependencies
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';

// App dependencies
import routes from './config/routes';
import NotFoundPage from './components/pages/404';

/* ************************************************************************** */

/* APP SETUP & CONFIGURATION */

const app = new Express();
const server = new Server(app);

// configure ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// define folder used for static assets
app.use(Express.static(path.join(__dirname, 'static')));

/* ************************************************************************** */

/* UNIVERSAL ROUTING AND RENDERING */

app.get('*', (req, res) => {
	match(
		{ routes, location: req.url },
		(err, redirectLocation, renderProps) => {

			// show error if one present
			if (err) {
				return res.status(500).send(err.message);
			}

			// propogate redirect to browser if one present
			if (redirectLocation) {
				return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
			}

			// generate markup for the current route
			let markup;
			if (renderProps) {
				markup = renderToString(<RouterContext {...renderProps} />);
			} else {
				markup = renderToString(<NotFoundPage />);
				res.status(404);
			}

			// render the index template with the embedded React markup
			return res.render('index', { markup });

		}
	);
});

/* ************************************************************************** */

/* SERVER SETUP AND START */

const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
server.listen(port, err => {
	if (err) {
		return console.error(err);
	}
    console.info(`Wedding website running on http://localhost:${port} [${env}]`);
});

/* ************************************************************************** */