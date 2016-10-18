// React dependencies
import React from 'react';

/**
 * People page component; details people involved in wedding.
 */
class PeoplePage extends React.Component {

    /**
     * Render method for React component to render HTML utilising JSX
     * @return {JSX} Returns the JSX to be rendered by React into HMTL
     */
    render() {

        const { people } = this.props;
        const brideAndGroom = [];
        const bridalParty = [];

        // separate bride and groom
        people.forEach((person) => {

            // only use people involved in wedding
            if (!person.wedding) return false;

            if (person.wedding.role === 'bride' ||
                person.wedding.role === 'groom') {
                brideAndGroom.push(person);
            } else {
                bridalParty.push(person);
            }

        });

        return (
            <main>
                <h1>People</h1>
                <section>
                    <h2>The Bride &amp; Groom</h2>
                    <ul>
                        {
                            brideAndGroom && brideAndGroom.sort((a, b) => {
                                return a.order - b.order;
                            })
                            .map((person, index) => {
                                return (
                                    <li key={index}>
                                        <dl>
                                            <dt>Role in the wedding</dt>
                                                <dd>
                                                    <h3>
                                                        { person.wedding.role }
                                                    </h3>
                                                </dd>
                                            <dt>Name</dt>
                                                <dd>
                                                    { person.firstName + ' ' + person.lastName }
                                                </dd>
                                        </dl>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </section>
                <section>
                    <h2>The Bridal Party</h2>
                    <ul>
                        {
                            bridalParty && bridalParty.sort((a, b) => {
                                return a.order - b.order;
                            })
                            .map((person, index) => {
                                return (
                                    <li key={index}>
                                        <dl>
                                            <dt>Role in the wedding</dt>
                                                <dd>
                                                    <h3>
                                                        { person.wedding.role }
                                                    </h3>
                                                </dd>
                                            <dt>Name</dt>
                                                <dd>
                                                    { person.firstName + ' ' + person.lastName }
                                                </dd>
                                        </dl>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </section>
            </main>
        )
    }
}

export default PeoplePage;