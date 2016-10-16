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

        return (
            <main>
                <article className="panel">
                    <h1>Welcome to PhilAndSteph.co.uk</h1>
                    <section>
                        <h2>
                            Wedding Countdown
                        </h2>
                        <p>
                            <span id="remaining-time">
                                Ages&nbsp;
                            </span>
                            left until the wedding!
                        </p>
                        <Link to="events/wedding" className="btnPrimary">
                            All about the Wedding
                            <i className="icon-heart"></i>
                        </Link>
                    </section>
                </article>
                <article id="theCouple" className="panel alternativePanel cheekyAndCute">
                    <section className="panelContent">
                        <h2>The couple</h2>
                        <div className="mblImg portrait"></div>
                        <p>Whether you are a friend or family member of &lsquo;him&rdquo; or &lsquo;her&rdquo;, get to know a bit about the couple here.</p>
                        <p>You never know, if you do think you know them, you might find out something new! For instance, did you know Phil is a massive Iron Man fan? Or that Steph is ginger?</p>
                        <a href="#" className="btnPrimary">About Phil &amp; Steph<i className="icon-right-open"></i></a>
                    </section>
                </article>
                <article id="wedding" className="panel happilyEngaged">
                    <section className="panelContent">
                        <h2>The Wedding</h2>
                        <div className="mblImg portrait"></div>
                        <p>Here you can find out about a major feature in our lives; our wedding.</p>
                        <p>This section features details of the proposal and the engagement party and the wedding itself. That&apos;s right, you get to find out why on earth Steph is wearing that dress! But if you are a guest at our wedding, some details you may need to know will be available here as they become available.</p>
                        <a href="#" className="btnPrimary">The Wedding<i className="icon-right-open"></i></a>
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

            remainingTimeIndicator.innerHTML =
                remainingTime.days + ' days ' +
                remainingTime.hours + ' hours ' +
                remainingTime.minutes + ' minutes ' +
                remainingTime.seconds + ' seconds';

        }

        const refreshInterval = setInterval(
            processRemainingTime,
            1000
        );
    };
}

export default HomePage;