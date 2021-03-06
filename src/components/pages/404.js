// React Dependencies
import React from 'react';
import { Link } from 'react-router';

class NotFoundPage extends React.Component {
	render() {
		return (
			<main>
				<article>
					<section className="panel">
						<h1>Page not found</h1>
						<p>
							Whoops! You seem to have gotten a bit lost! But because we're kind we'll point you in the right direction.
						</p>
						<p>
							<Link to="/" className="btn">Go back to home page</Link>
						</p>
					</section>
				</article>
			</main>
		)
	}
}

export default NotFoundPage;