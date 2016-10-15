// React dependencies
import React from 'react';

// App dependencies
import { Link } from 'react-router';

/**
 * Social Links component
 */
class SocialLinksList extends React.Component {

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
                    {
                        person.socialLinks.map((link, index) => {

                            let icon = '';

                            switch (link.media) {

                                case 'Facebook':
                                    icon = 'icon-facebook-rect';
                                    break;

                                case 'Twitter':
                                    icon = 'icon-twitter-bird';
                                    break;

                                case 'Pinterest':
                                    icon = 'icon-pinterest-circled';
                                    break;

                                default:
                                    icon = '';
                                    break;

                            }

                            return (
                                <li className={ link.media.toLowerCase() } key={ index } >
                                    <Link to={ link.profile }>
                                        <i className={ icon }></i>
                                        <span className="access">Find { person.nickname } on </span>{ link.media }
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </section>
        )
    }
}

export default SocialLinksList;