import React, {useState, useEffect } from 'react';
import "./detail-info.css";
import {NavLink, useParams} from "react-router-dom";

const DetailInfo = () => {
    let { characterId } = useParams();
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
            .then(response => response.json())
            .then(data => setCharacter(data))
            .catch(error => console.error(error));
    }, [characterId]);

    if (!character) {
        return <div>Loading...</div>;
    }

    return (
        <div className='detail-container'>
            <NavLink to="/" >
                <button className="back-button">
                    <i className="fa-solid fa-arrow-left"></i>
                    GO BACK
                </button>
            </NavLink>

            <div className="detail-info">
                <img
                    className="avatar-detail"
                    src={character.image}
                    alt="avatar detail information"
                />
                <h1 className="name-detail">{character.name}</h1>
                <h6 className="information">Information</h6>

                <ul className="list-detail">
                    <li>
                        <p className="detail-info-key">Gender</p>
                        <p className="detail-info-prop">{character.gender}</p>
                    </li>
                    <li>
                        <p className="detail-info-key">Status</p>
                        <p className="detail-info-prop">{character.status}</p>
                    </li>
                    <li>
                        <p className="detail-info-key">Specie</p>
                        <p className="detail-info-prop">{character.species}</p>
                    </li>
                    <li>
                        <p className="detail-info-key">Origin</p>
                        <p className="detail-info-prop">{character.origin.name}</p>
                    </li>
                    <li>
                        <p className="detail-info-key">Type</p>
                        <p className="detail-info-prop">{character.type}</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default DetailInfo;