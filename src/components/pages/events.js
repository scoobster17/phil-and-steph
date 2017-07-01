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
                <section className="panel">
                    <h1>Events</h1>
                    <p>
                        Here you can find out about a major feature in our lives; our wedding, amongst many others.
                    </p>
                    <p>
                        This section lists events featuring details of the proposal, the engagement party and the wedding itself. That's right, you get to find out why on earth Steph is wearing that dress! But if you are a guest at our wedding, some details you may need to know will be available here as they become available.
                    </p>
                </section>
                <section className="panel">
                    <h2>Events List</h2>
                    <ol className="article-list">
                        {
                            events && events.sort((a, b) => {
                                return b.order - a.order;
                            }).map((event, index) => {
                                const eventHasImagery = (event.img && event.img.src);
                                return (
                                    <li key={ index }>
                                        <article className={ eventHasImagery ? 'hasImagery' : '' }>
                                            <h2>{ event.title }</h2>
                                            {
                                                eventHasImagery &&
                                                <img src={ '/img/' + event.img.src } alt={ event.img.alt } />
                                            }
                                            <p>{ event.preview }</p>
                                            <Link to={ '/events/' + event.urlText } className="btn">
                                                Read more<span className="visually-hidden"> about { event.accessibliltyDescription }</span>
                                                <i className="icon-right-open"></i>
                                            </Link>
                                        </article>
                                    </li>
                                )
                            })
                        }
                    </ol>
                </section>
            </main>
        )
    }
}

export default EventsPage;