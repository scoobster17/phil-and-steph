// React dependencies
import React from 'react';
import { Router, browserHistory } from 'react-router';

// App dependencies
import routes from './routes';

class RoutesClientWrapper extends React.Component {
	render() {
		return (
			<Router
				history={browserHistory}
				routes={routes}
				onUpdate={ () => window.scrollTo(0, 0) }
			/>
		)
	}
}

export default RoutesClientWrapper;