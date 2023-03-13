import React from 'react';
import './person-row.css'
import {NavLink} from "react-router-dom";

const PersonRow = (props) => {
    return (
        <NavLink to={`/detail/${props.id}`} className="navLink-characters" >
            <div className="persons-item">
                <img  className="avatar" src={props.avatar} alt="avatar"/>
                <div className="persons-info">
                    <h3>{props.name}</h3>
                    <p>{props.species}</p>
                </div>
            </div>
        </NavLink>
    )
}

export default PersonRow;