// React dependencies
import React from 'react';
import { Link } from 'react-router';

// App dependencies
import news from '../../data/news';

/**
 * News page component; latest news from Phil and Steph.
 */
class NewsPage extends React.Component {

    /**
     * Render method for React component to render HTML utilising JSX
     * @return {JSX} Returns the JSX to be rendered by React into HMTL
     */
    render() {
        return (
            <main>
                <h1>News</h1>
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
                                        <Link to={ '/news/' + item.id } className="btn">
                                            Read more<span className="access"> about { item.accessibliltyDescription }</span>
                                            <i className="icon-right-open"></i>
                                        </Link>
                                    </article>
                                </li>
                            )
                        })
                    }
                </ol>
            </main>
        )
    }
}

export default NewsPage;