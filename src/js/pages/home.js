// React dependencies
import React from 'react';

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
                <article id="intro" className="panel currentPanel canterburyKiss">
                    <section className="panelContent">
                        <h1>Welcome to the wonderful world of Phil and Steph!</h1>
                        <div className="mblImg"></div>
                        <p>Hi there, you have found your way to PhilAndSteph.co.uk, the online home of everything that I, web developer Phil, thinks is important for you to know. For instance, there&apos;s now a wedding in sight!</p>
                        <p>This site will therefore revolve around that main point for the next couple of years, and then perhaps move onto something else&hellip;</p>
                        <h2><strong>We want your photos!</strong></h2>
                        <p>If you have any photos of the lovely couple, specificaly from the engagement party but all will be accepted, please do send them on to either Phil or Stephanie, and you may even see your handywork on this site!</p>
                        <p>Please send in high resolution, full size, original quality images (no jodgements made!) and Phil can photoshop them to look all sparkly. Even if you think they&apos;re no good, you'd be surprised how they can turn out!</p>
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
}

export default HomePage;