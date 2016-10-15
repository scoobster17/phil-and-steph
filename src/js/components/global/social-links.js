// React dependencies
import React from 'react';

// App dependencies
import { Link } from 'react-router';

/**
 * Social Links component
 */
class SocialLinks extends React.Component {

    /**
     * Render method for React component to render HTML utilising JSX
     * @return {JSX} Returns the JSX to be rendered by React into HMTL
     */
    render() {

        const { person } = this.props;

        return (
            <section className="socialLinks">
                <h2>
                    { person.nickname }
                    <span className="access">&#39;s Social Media</span>
                </h2>
                <ul>
                    <li className="facebook">
                        <Link to="#">
                            <i className="icon-facebook-rect"></i>
                            <span className="access">Find { person.nickname } on </span>Facebook
                        </Link>
                    </li>
                    <li className="twitter">
                        <a href="#">
                            <i className="icon-twitter-bird"></i>
                            <span className="access">Find { person.nickname } on </span>Twitter
                        </a>
                    </li>
                    <li className="pinterest">
                        <a href="#">
                            <i className="icon-pinterest-circled"></i>
                            <span className="access">Find { person.nickname } on </span>Pinterest
                        </a>
                    </li>
                </ul>
            </section>
        )
    }
}

export default SocialLinks;