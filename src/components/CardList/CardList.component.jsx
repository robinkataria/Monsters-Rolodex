import React from "react";
import "./CardList.styles.css";

function CardList(props) {
    return <div className="card-list">{props.children}</div>;
}

export default CardList;
