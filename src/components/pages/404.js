// React Dependencies
import React from 'react';
import { Link } from 'react-router';

class NotFoundPage extends React.Component {
	render() {
		return (
			<main>
				<h1>404 error; page not found</h1>
				<p>
					The page you are looking for does not exist.
					<Link to="/">Go back to home page</Link>
				</p>
			</main>
		)
	}
}

export default NotFoundPage;