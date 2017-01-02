// React dependencies
import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Pages (and container 'Layout' component)
import Layout from './layout';
import HomePage from '../components/pages/home';
import EventsPage from '../components/pages/events';
import EventPage from '../components/pages/event';
import PeoplePage from '../components/pages/people';
import MediaPage from '../components/pages/media';
import NewsPage from '../components/pages/news';
import ArticlePage from '../components/pages/article';
import ContactPage from '../components/pages/contact';
import NotFoundPage from '../components/pages/404';

const routes = (
    <Route path="/" component={Layout}>
        <IndexRoute component={HomePage} />
        <Route path="events" component={EventsPage} />
        <Route path="events/:urlText" component={EventPage} />
        <Route path="people" component={PeoplePage} />
        <Route path="media" component={MediaPage} />
        <Route path="news" component={NewsPage} />
        <Route path="news/:urlText" component={ArticlePage} />
        <Route path="contact" component={ContactPage} />
        <Route path="*" component={NotFoundPage} />
    </Route>
)

export default routes;