// React dependencies
import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Pages (and container 'Layout' component)
import Layout from './layout';
import HomePage from '../components/pages/home';
import ContactPage from '../components/pages/contact';

const routes = (
    <Route path="/" component={Layout}>
        <IndexRoute component={HomePage} />
        <Route path="contact" component={ContactPage} />
    </Route>
)

export default routes;