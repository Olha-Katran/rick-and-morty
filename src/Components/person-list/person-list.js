import React from 'react';
import './person-list.css'
import PersonRow from "../person-row/person-row";

const PersonList = (props) => {
    props.characters.sort((a, b) => (a.name > b.name) ? 1 : -1);

    return (
        <div className="persons-list">
            {props.characters.map(character => {
                return <PersonRow
                    id={character.id}
                    name={character.name}
                    avatar={character.image}
                    species={character.species}
                />
            })}
        </div>
    )
}

export default PersonList;