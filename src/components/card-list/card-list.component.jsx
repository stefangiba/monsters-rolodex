import React from "react";
import "./card-list.styles.css";
import PropTypes from "prop-types";

import Card from "../card/card.component";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster}></Card>
      ))}
    </div>
  );
};

export default CardList;

CardList.propTypes = {
  monsters: PropTypes.array,
};
