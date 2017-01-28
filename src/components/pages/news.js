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
                <section className="panel">
                    <h1>News</h1>
                    <p>Here you can find out the latest news happening with the wedding planning, and other events happening with Phil & Steph.</p>
                </section>
                <section className="panel">
                    <h2>News Articles</h2>
                    <ol className="article-list">
                        {
                            news && news.sort((a, b) => {
                                return b.timestamp - a.timestamp;
                            }).map((item, index) => {
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
                </section>
            </main>
        )
    }
}

export default NewsPage;