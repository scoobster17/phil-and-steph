// React dependencies
import React from 'react';
import { Link, browserHistory } from 'react-router';

// App dependencies
import events from '../../data/events';
import Comments from '../global/comments';

/**
 * Event page component; details for a single event either as an article or informational page.
 */
class EventPage extends React.Component {

    /**
     * Render method for React component to render HTML utilising JSX
     * @return {JSX} Returns the JSX to be rendered by React into HMTL
     */
    render() {
        const eventUrlText = this.props.params.urlText;
        const matchingEventArray = events.filter((event) => {
            return event.urlText === eventUrlText;
        });
        let event;

        if (matchingEventArray.length) {
            event = matchingEventArray[0]
        } else if (browserHistory) {
            browserHistory.push('/404');
        }

        return (
            <main>
                {
                    event &&
                    <section>
                        <h1>{ event.article.title }</h1>
                        <p dangerouslySetInnerHTML={{
                            __html: event.article.content
                        }}></p>
                        { event.comments && <Comments /> }
                        <Link to="/events" className="btn">
                            Back to Events
                        </Link>
                    </section>
                }
            </main>
        )
    }
}

export default EventPage;