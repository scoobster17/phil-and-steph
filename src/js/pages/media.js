// React dependencies
import React from 'react';

/**
 * Media page component; photos and videos.
 */
class MediaPage extends React.Component {

    /**
     * Render method for React component to render HTML utilising JSX
     * @return {JSX} Returns the JSX to be rendered by React into HMTL
     */
    render() {

        return (
            <main>
                <article className="panel">
                    <section>
                        <h1>Photos &amp; Videos</h1>
                        <h2>We want your photos &amp; videos!</h2>
                        <p>If you have any photos or videos of the lovely couple, whether it&#39;s from the engagement party or another random time, please do send them on to either Phil or Stephanie, and you may even see your handywork on this site!</p>
                        <p>Please send in high resolution, full size, original quality images (no judgements made!) and Phil can photoshop them to look all sparkly if needs be.</p>
                        <p>Even if you think they&apos;re no good, you&#39;d be surprised how they can turn out!</p>
                    </section>
                </article>
            </main>
        )
    }
}

export default MediaPage;