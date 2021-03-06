import React from "react";
import "./Card.styles.css";

function Card(props) {
    return (
        <div className="card-container">
            <img
                alt="monster"
                src={`https://robohash.org/${props.monster.id}?set=set2&size=200x200`}
            />
            <h2 key={props.monster.id}>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
        </div>
    );
}
export default Card;
