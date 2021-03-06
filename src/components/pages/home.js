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
            <main className="home">
                <h1 className="visually-hidden">Welcome to PhilAndSteph.co.uk</h1>
                <article>
                    <section className="panel weddingCountdown">
                        <h2 className="visually-hidden">
                            Wedding Countdown
                        </h2>
                        <WeddingCountdown />
                        <ul>
                            <li>
                                <Link to="/events/wedding-day-guide" className="btn-primary">
                                    Wedding Day Guide
                                    <i className="icon-help-circled"></i>
                                </Link>
                            </li>
                            <li>
                                <Link to="/events/wedding" className="btn">
                                    All about the Wedding
                                    <i className="icon-heart"></i>
                                </Link>
                            </li>
                        </ul>
                    </section>
                    <section className="panel news">
                        <h2>Latest News</h2>
                        <ol className="article-list">
                            {
                                news && news.sort((a, b) => {
                                    return b.timestamp - a.timestamp;
                                }).slice(0,3).map((item, index) => {
                                    const articleHasImagery = (item.img && item.img.src);
                                    return (
                                        <li key={ index }>
                                            <article className={ articleHasImagery ? 'hasImagery' : '' }>
                                                <h3>{ item.title }</h3>
                                                {
                                                    articleHasImagery &&
                                                    <img src={ '/img/' + item.img.src } alt={ item.img.alt } />
                                                }
                                                <p dangerouslySetInnerHTML={{
                                                    __html: item.preview
                                                }}>
                                                </p>
                                                <Link to={ '/news/' + item.urlText } className="btn">
                                                    Read more<span className="visually-hidden"> about { item.accessibilityDescription }</span>
                                                    <i className="icon-right-open"></i>
                                                </Link>
                                            </article>
                                        </li>
                                    )
                                })
                            }
                        </ol>
                        <Link to="/news" className="btn-primary">
                            See all news
                            <i className="icon-th-list"></i>
                        </Link>
                    </section>
                    <section className="panel">
                        <h2>People</h2>
                        <p>Whether you are a friend or family member of &ldquo;him&rdquo; or &ldquo;her&rdquo;, you can get to know a bit about the couple on our People page. There are also details about the whole bridal party too!</p>
                        <Link to="/people" className="btn-primary">
                            People
                            <i className="icon-male"></i>
                            <i className="icon-female"></i>
                        </Link>
                    </section>
                    {/*
                    <section id="wedding" className="panel">
                        <h2>Photos & Videos</h2>
                        <p>Take a look at a selection of media of the couple and events, including the engagement party!</p>
                        <Link to="/media" className="btn-primary">
                            Photos &amp; Videos
                            <i className="icon-camera"></i>
                            <i className="icon-video"></i>
                        </Link>
                    </section>
                    */}
                </article>
            </main>
        )
    }
}

export default HomePage;