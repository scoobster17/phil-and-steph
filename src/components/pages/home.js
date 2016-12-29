// React dependencies
import React from 'react';
import { Link } from 'react-router';

/**
 * Home page component; default page of app.
 */
class HomePage extends React.Component {

    /**
     * Render method for React component to render HTML utilising JSX
     * @return {JSX} Returns the JSX to be rendered by React into HMTL
     */
    render() {

        const { news } = this.props;

        return (
            <main>
                <h1 className="access">Welcome to PhilAndSteph.co.uk</h1>
                <article className="panel weddingCountdown">
                    <section>
                        <h2 className="access">
                            Wedding Countdown
                        </h2>
                        <p>
                            <span id="remaining-time" className="remaining-time">
                                Ages&nbsp;
                            </span>
                            left until the wedding!
                        </p>
                        <Link to="/events/wedding" className="btnPrimary">
                            All about the Wedding
                            <i className="icon-heart"></i>
                        </Link>
                    </section>
                </article>
                <article className="panel alternativePanel news">
                    <section className="panelContent">
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
                </article>
                <article className="panel alternativePanel">
                    <section className="panelContent">
                        <h2>People</h2>
                        <p>Whether you are a friend or family member of &ldquo;him&rdquo; or &ldquo;her&rdquo;, you can get to know a bit about the couple on our People page. There are also details about the whole bridal party too!</p>
                        <Link to="/people" className="btnPrimary">
                            People
                            <i className="icon-male"></i>
                            <i className="icon-female"></i>
                        </Link>
                    </section>
                </article>
                <article id="wedding" className="panel happilyEngaged">
                    <section className="panelContent">
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

    componentDidMount() {
        this.updateWeddingCountdown();
    }

    updateWeddingCountdown() {

        const weddingDay = new Date(2017, 6, 31, 14, 30);
        // console.log(weddingDay.toUTCString())

        const remainingTimeIndicator = document.getElementById('remaining-time');

        const processRemainingTime = function() {

            const today = new Date();
            const remainingTime = {
                milliseconds: weddingDay - today
            };

            if (remainingTime.milliseconds < 0) {

                clearTimeout(refreshInterval);

                remainingTime.days    = 0;
                remainingTime.hours   = 0;
                remainingTime.minutes = 0;
                remainingTime.seconds = 0;

            } else {

                const second = 1000;
                const minute = 60 * second;
                const hour = 60 * minute;
                const day = 24 * hour;

                remainingTime.days    = Math.floor(remainingTime.milliseconds / day);
                remainingTime.hours   = Math.floor((remainingTime.milliseconds % day) / hour);
                remainingTime.minutes = Math.floor((remainingTime.milliseconds % hour) / minute);
                remainingTime.seconds = Math.floor((remainingTime.milliseconds % minute) / second);

            }

            if (remainingTime.minutes < 10) remainingTime.minutes = '0' + remainingTime.minutes;
            if (remainingTime.seconds < 10) remainingTime.seconds = '0' + remainingTime.seconds;

            remainingTimeIndicator.innerHTML =
                '<span>' + remainingTime.days + '<abbr title="days">d</abbr></span> ' +
                '<span class="clearfix clearfix-small-only">' + remainingTime.hours + '<abbr title="hours">h</abbr></span> ' +
                '<span>' + remainingTime.minutes + '<abbr title="minutes">m</abbr></span> ' +
                '<span>' + remainingTime.seconds + '<abbr title="seconds">s</abbr></span>';

        }

        const refreshInterval = setInterval(
            processRemainingTime,
            1000
        );
    };
}

export default HomePage;