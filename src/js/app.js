// React dependencies
import { render } from 'react-dom';

// App dependencies
import routes from './config/routes';

/**
 * App initialisation
 * @returns {Object} Renders the app using React
 */
render(
    routes,
    document.getElementById('container')
);