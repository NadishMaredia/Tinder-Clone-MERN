import React, { useState, useEffect } from 'react'
import './TinderCards.css';
import TinderCard from 'react-tinder-card';
import axios from 'axios';

function TinderCards() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('http://localhost:8001/tinder/card');

            setPeople(req.data);
        }

        fetchData();
    }, []);

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' +nameToDelete);
    };

    const outOfFrame = (name) => {
        console.log(name + ' left the screen');
    };

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {
                    people.map((person) => (
                        <TinderCard
                            className="swipe"
                            key={people.name}
                            preventSwipe={["up","down"]}
                            onSwipe={(dir) => swiped(dir, people.name)}
                            onCardLeftScreen={() => outOfFrame(people.name)}
                        >

                        <div style={{ backgroundImage: `url(${person.url})`}}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>

                        </TinderCard>
                    ))
                }
            </div>
        </div>
    )
}

export default TinderCards
