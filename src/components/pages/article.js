// React dependencies
import React from 'react';
import { Link } from 'react-router';

// App dependencies
import news from '../../data/news';

/**
 * Article page component; details for an individual news item
 */
class ArticlePage extends React.Component {

    /**
     * Render method for React component to render HTML utilising JSX
     * @return {JSX} Returns the JSX to be rendered by React into HMTL
     */
    render() {
        const articleUrlText = this.props.params.urlText;
        const article = news.filter((article) => {
            return article.urlText === articleUrlText;
        })[0];
        return (
            <main>
                {
                    article &&
                    <section>
                        <h1>{ article.title }</h1>
                        <p dangerouslySetInnerHTML={{
                            __html: article.content
                        }}></p>
                        <Link to="/news" className="btn">
                            Back to News
                        </Link>
                    </section>
                }
            </main>
        )
    }
}

export default ArticlePage;