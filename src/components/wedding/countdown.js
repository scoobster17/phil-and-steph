// React dependencies
import React from 'react';

/**
 * Countdown component; used for wedding countdown.
 */
class WeddingCountdown extends React.Component {

    /**
     * Render method for React component to render HTML utilising JSX
     * @return {JSX} Returns the JSX to be rendered by React into HMTL
     */
    render() {
    	return (
	    	<p>
	            <span id="remaining-time" className="remaining-time">
	                Ages&hellip;&nbsp;
	            </span>
	            left until the wedding!
	        </p>
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

export default WeddingCountdown;