import React from "react";
import "./CardList.styles.css";
import Card from "../Card/Card.component";

function CardList(props) {
    return (
        <div className="card-list">
            {props.monsters.map((monster) => (
                <Card monster={monster} />
            ))}
        </div>
    );
}

export default CardList;
