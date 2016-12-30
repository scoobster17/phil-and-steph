// React dependencies
import React from 'react';
import { Link } from 'react-router';

/**
 * Events page component; details events happening with Phil & Steph.
 */
class EventsPage extends React.Component {

    /**
     * Render method for React component to render HTML utilising JSX
     * @return {JSX} Returns the JSX to be rendered by React into HMTL
     */
    render() {

        const { events } = this.props;

        return (
            <main>
                <h1>Events</h1>
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
            </main>
        )
    }
}

export default EventsPage;