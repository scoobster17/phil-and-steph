// React dependencies
import React from 'react';

/**
 * Contact page component; details to contact Phil & Steph.
 */
class ContactPage extends React.Component {

    /**
     * Render method for React component to render HTML utilising JSX
     * @return {JSX} Returns the JSX to be rendered by React into HMTL
     */
    render() {

        return (
            <main>
                <h1>Contact</h1>
                <p>
                    In future, around the time / after the wedding invitations
                    are sent out, we may introduce <abbr lang="fr" title="Répondez s'il vous plaît">RSVP</abbr> functionality
                    on this page.
                </p>
                <p>
                    If you wish to contact either Phil or Steph, about the
                    wedding (or otherwise), please don&#39;t hesitate to contact
                    us via the phone numbers / e-mail addresses / other social
                    media that you are connected with us on (Facebook, Twitter,
                    etc.). Being family / friends, we would hope you have this
                    already!
                </p>
                <p>
                    If you aren&#39;t using any of the above, (yes, we&#39;re
                    thinking of granddads in particular) can&#39;t find the
                    number, just want to use our 'wedding' e-mail address for
                    the sake of it or any other reason, please e-mail us at <a href="mailto:phil-and-steph@hotmail.com" className="textLink">
                        phil&ndash;and&ndash;steph@hotmail.com
                    </a>
                </p>
                <p>
                    Please note any unsoliticed e-mail including all advertising
                    will be ignored, and, if necessary, reported.
                </p>
            </main>
        )
    }
}

export default ContactPage;