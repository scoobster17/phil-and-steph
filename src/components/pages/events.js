// React dependencies
import React from 'react';
import { Link } from 'react-router';

// App dependencies
import events from '../../data/events';

/**
 * Events page component; details events happening with Phil & Steph.
 */
class EventsPage extends React.Component {

    /**
     * Render method for React component to render HTML utilising JSX
     * @return {JSX} Returns the JSX to be rendered by React into HMTL
     */
    render() {
        return (
            <main>
                <section>
                    <h1>Events</h1>
                    <p>
                        Here you can find out about a major feature in our lives; our wedding, amongst many others.
                    </p>
                    <p>
                        This section lists events featuring details of the proposal, the engagement party and the wedding itself. That's right, you get to find out why on earth Steph is wearing that dress! But if you are a guest at our wedding, some details you may need to know will be available here as they become available.
                    </p>
                </section>
                <section>
                    <h2>Events List</h2>
                    <ul>
                        {
                            events && events.map((event, index) => {
                                return (
                                    <li key={ index }>
                                        <h2>{ event.title }</h2>
                                        <p>{ event.preview }</p>
                                        <Link to={ '/events/' + event.urlText } className="btn">
                                            Read more<span className="access"> about { event.accessibliltyDescription }</span>
                                            <i className="icon-right-open"></i>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </section>
            </main>
        )
    }
}

export default EventsPage;