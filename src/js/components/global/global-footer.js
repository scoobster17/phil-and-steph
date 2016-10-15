// React dependencies
import React from 'react';

/**
 * Global footer component
 */
class GlobalFooter extends React.Component {

    /**
     * Render method for React component to render HTML utilising JSX
     * @return {JSX} Returns the JSX to be rendered by React into HMTL
     */
    render() {

        return (
            <footer className="global-footer">
                <section className="socialLinks">
                    <h2>
                        Phil
                        <span className="access">&#39;s Social Media</span>
                    </h2>
                    <ul>
                        <li className="facebook">
                            <a href="https://www.facebook.com/scoobster17">
                                <i className="icon-facebook-rect"></i>
                                <span className="access">Find Phil on </span>Facebook
                            </a>
                        </li>
                        <li className="twitter">
                            <a href="https://twitter.com/scoobster17">
                                <i className="icon-twitter-bird"></i>
                                <span className="access">Find Phil on </span>Twitter
                            </a>
                        </li>
                        <li className="pinterest">
                            <a href="https://www.pinterest.com/scoobster17/">
                                <i className="icon-pinterest-circled"></i>
                                <span className="access">Find Phil on </span>Pinterest
                            </a>
                        </li>
                    </ul>
                </section>
                <section className="socialLinks">
                    <h2>
                        Steph
                        <span className="access">&#39;s Social Media</span>
                    </h2>
                    <ul>
                        <li className="facebook">
                            <a href="https://www.facebook.com/stephanie.underdown.1">
                                <i className="icon-facebook-rect"></i>
                                <span className="access">Find Steph on </span>Facebook
                            </a>
                        </li>
                        <li className="twitter">
                            <a href="https://twitter.com/s_underdown242?lang=en">
                                <i className="icon-twitter-bird"></i>
                                <span className="access">Find Steph on </span>Twitter
                            </a>
                        </li>
                        <li className="pinterest">
                            <a href="https://uk.pinterest.com/stephanie6041/">
                                <i className="icon-pinterest-circled"></i>
                                <span className="access">Find Steph on </span>Pinterest
                            </a>
                        </li>
                    </ul>
                </section>
                <section className="siteDetails">
                    <p>
                        &copy; Copyright Phil Gibbins of&nbsp;
                        <a href="/" className="textLink">
                            PhilAndSteph.co.uk
                        </a>
                        &nbsp;&amp;&nbsp;
                        <a href="http://philgibbins.com" className="textLink" rel="external" target="_blank">
                            PhilGibbins.com
                            <i className="icon-link-ext"></i>
                        </a>
                    </p>
                </section>
            </footer>
        )
    }
}

export default GlobalFooter;