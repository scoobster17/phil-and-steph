// React dependencies
import React from 'react';
import { Link } from 'react-router';

// App dependencies
import news from '../../data/news';
import WeddingCountdown from '../wedding/countdown';

/**
 * Home page component; default page of app.
 */
class HomePage extends React.Component {

    /**
     * Render method for React component to render HTML utilising JSX
     * @return {JSX} Returns the JSX to be rendered by React into HMTL
     */
    render() {
        return (
            <main>
                <h1 className="access">Welcome to PhilAndSteph.co.uk</h1>
                <article>
                    <section className="panel weddingCountdown">
                        <h2 className="access">
                            Wedding Countdown
                        </h2>
                        <WeddingCountdown />
                        <Link to="/events/wedding" className="btnPrimary">
                            All about the Wedding
                            <i className="icon-heart"></i>
                        </Link>
                    </section>
                    <section className="panel alternativePanel news">
                        <h2>Latest News</h2>
                        <ol>
                            {
                                news && news.sort((a, b) => {
                                    return b.timestamp - a.timestamp;
                                }).map((item, index) => {
                                    return (
                                        <li key={ index }>
                                            <article>
                                                <h3>{ item.title }</h3>
                                                <p dangerouslySetInnerHTML={{
                                                    __html: item.preview
                                                }}>
                                                </p>
                                                <Link to={ '/news/' + item.urlText } className="btn">
                                                    Read more<span className="access"> about { item.accessibliltyDescription }</span>
                                                    <i className="icon-right-open"></i>
                                                </Link>
                                            </article>
                                        </li>
                                    )
                                })
                            }
                        </ol>
                        <Link to="/news" className="btnPrimary">
                            See all news
                            <i className="icon-th-list"></i>
                        </Link>
                    </section>
                    <section className="panel alternativePanel">
                        <h2>People</h2>
                        <p>Whether you are a friend or family member of &ldquo;him&rdquo; or &ldquo;her&rdquo;, you can get to know a bit about the couple on our People page. There are also details about the whole bridal party too!</p>
                        <Link to="/people" className="btnPrimary">
                            People
                            <i className="icon-male"></i>
                            <i className="icon-female"></i>
                        </Link>
                    </section>
                    <section id="wedding" className="panel happilyEngaged">
                        <h2>Photos & Videos</h2>
                        <p>Take a look at a selection of media of the couple and events, including the engagement party!</p>
                        <Link to="/media" className="btnPrimary">
                            Photos &amp; Videos
                            <i className="icon-camera"></i>
                            <i className="icon-video"></i>
                        </Link>
                    </section>
                </article>
            </main>
        )
    }
}

export default HomePage;