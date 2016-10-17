// React dependencies
import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

// Redux dependencies
import { Provider } from 'react-redux';
import store, { history } from './store';

// Pages (and container 'App' component)
import Layout from '../components/global/layout';
import HomePage from '../pages/home';
import EventsPage from '../pages/events';
import PeoplePage from '../pages/people';
import MediaPage from '../pages/media';
import NewsPage from '../pages/news';
import ContactPage from '../pages/contact';

const routes = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Layout}>
                <IndexRoute component={HomePage} />
                <Route path="events" component={EventsPage} />
                <Route path="people" component={PeoplePage} />
                <Route path="people/:personId" component={PeoplePage} />
                <Route path="media" component={MediaPage} />
                <Route path="news" component={NewsPage} />
                <Route path="contact" component={ContactPage} />
            </Route>
        </Router>
    </Provider>
)

export default routes;