// React dependencies
import React from 'react';

// App dependencies
import people from '../../data/people';

/**
 * People page component; details people involved in wedding.
 */
class PeoplePage extends React.Component {

    /**
     * Render method for React component to render HTML utilising JSX
     * @return {JSX} Returns the JSX to be rendered by React into HMTL
     */
    render() {

        const brideAndGroom = [];
        const bridalParty = [];

        // separate bride and groom
        people && people.forEach((person) => {

            // only use people involved in wedding
            if (!person.wedding) return false;

            if (person.wedding.role.toLowerCase() === 'bride' ||
                person.wedding.role.toLowerCase() === 'groom') {
                brideAndGroom.push(person);
            } else {
                bridalParty.push(person);
            }

        });

        return (
            <main>
                <article className="people">
                    <section className="panel">
                        <h1>People</h1>
                        <p>
                            Whether you are a friend or family member of ‘him” or ‘her”, get to know a bit about the couple here. You never know, if you do think you know them, you might find out something new! For instance, did you know Phil is a massive Iron Man fan? Or that Steph is ginger?
                        </p>
                        <p>
                            You can also find out about the bridal party, featuring the best man, the maid of honour, groomsmen and bridesmaids.
                        </p>
                    </section>
                    <section className="panel">
                        <h2>The Bride &amp; Groom</h2>
                        <blockquote>
                            <p>
                                This is a dynamic relationship which has the potential of clashes prompted through stubbornness from both sides. However as long as Leo has enough attention and feels loved and loving and Taurus feels comfortable and safe within the relationship, then the relationship can be very enjoyable. Taurus may tend to focus on the practical concerns too much for Leo's happiness and Leo may appear to be too much a drama queen for Taurus' peace of mind and stability. However if you are able to incorporate each other's difference, then a strong and stable relationship is possible. If you bring Taurus' sensual expression and Leo's warmth together then this should foster an enduring love.
                            </p>
                            <footer>
                                <cite>
                                    <a href="http://www.horoscopes.co.uk/extras/Taurus/Leo-with-Taurus.php" rel="external" target="_blank">
                                        Source: www.horoscopes.co.uk
                                    </a>
                                </cite>
                            </footer>
                        </blockquote>
                        <ul className="brideAndGroom">
                            {
                                brideAndGroom && brideAndGroom.sort((a, b) => {
                                    return a.order - b.order;
                                })
                                .map((person, index) => {
                                    return (
                                        <li key={index}>
                                            <img src={ '/img/people/portraits/' + person.portrait } alt={ 'portrait of ' + person.firstName } />
                                            <dl>
                                                <dt className="visually-hidden">Role in the wedding</dt>
                                                    <dd>
                                                        <h3>
                                                            { person.wedding.role }
                                                        </h3>
                                                    </dd>
                                                <dt>Name</dt>
                                                    <dd>
                                                        { person.firstName + ' ' + person.lastName }
                                                    </dd>
                                                <dt>Occupation</dt>
                                                    <dd>
                                                        { person.occupation }
                                                    </dd>
                                                <dt>Worked with</dt>
                                                    <dd>
                                                        <ul>
                                                            {
                                                                person.workExamples.map((example, index) => {
                                                                    return example.link ?
                                                                        <li key={index}>
                                                                            <a href={example.link} rel="external" target="_blank">
                                                                                {example.name}
                                                                            </a>
                                                                        </li>
                                                                    :
                                                                        <li key={index}>
                                                                            {example.name}
                                                                        </li>
                                                                })
                                                            }
                                                        </ul>
                                                    </dd>
                                                <dt>
                                                    Favourite Sport
                                                </dt>
                                                    <dd>
                                                        {person.favourites.sport}
                                                    </dd>
                                                <dt>
                                                    Favourite Film
                                                </dt>
                                                    <dd>
                                                        {person.favourites.film}
                                                    </dd>
                                                <dt>
                                                    Favourite Food
                                                </dt>
                                                    <dd>
                                                        {person.favourites.food}
                                                    </dd>
                                                <dt>
                                                    Hobbies
                                                </dt>
                                                    <dd>
                                                        <ul>
                                                            {
                                                                person.interests.map((interest, index) => {
                                                                    return <li key={index}>
                                                                        { interest }
                                                                    </li>
                                                                })
                                                            }
                                                        </ul>
                                                    </dd>
                                            </dl>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </section>
                    <section className="panel">
                        <h2>The Bridal Party</h2>
                        <ul className="bridalParty">
                            {
                                bridalParty && bridalParty.sort((a, b) => {
                                    return a.order - b.order;
                                })
                                .map((person, index) => {
                                    return (
                                        <li key={index}>
                                            <img src={ '/img/people/portraits/' + person.portrait } alt={ 'portrait of ' + person.firstName } />
                                            <dl>
                                                <dt className="visually-hidden">Role in the wedding</dt>
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
                                            {
                                                person.id != 6 &&
                                                <p>More info coming soon!</p>
                                            }
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </section>
                </article>
            </main>
        )
    }
}

export default PeoplePage;