import React from "react";

import rouler3 from "../img/rouler-3.png";
import rouler4 from "../img/rouler-4.png";
import rouler5 from "../img/rouler-5.png";
import rouler6 from "../img/rouler-6.png";
import rouler7 from "../img/rouler-7.png";
import sprinter2 from "../img/sprinter-2.png";
import sprinter3 from "../img/sprinter-3.png";
import sprinter4 from "../img/sprinter-4.png";
import sprinter5 from "../img/sprinter-5.png";
import sprinter9 from "../img/sprinter-9.png";
import pelotonAttack from "../img/peloton-attack.png";
import exhaustion from "../img/exhaustion.png";
import { Card } from "./Card";

const cardImages = {
  exhaustion,
  rouler3,
  rouler4,
  rouler5,
  rouler6,
  rouler7,
  sprinter2,
  sprinter3,
  sprinter4,
  sprinter5,
  sprinter9,
  rouler0: pelotonAttack,
};

const getFilename = (deckName, cardValue) => {
  if (cardValue === -1) {
    return cardImages.exhaustion;
  }

  const [teamName, teamNumber, deckIdentifier] = deckName.split("-");
  let name;
  if (teamName === "peloton") {
    name = "rouler";
  } else {
    name = deckIdentifier;
  }

  return cardImages[`${name}${cardValue}`];
};

const getDisplayName = (name) => {
  const [teamName, teamNumber, cyclistType] = name.split("-");

  if (cyclistType) {
    return `${teamName.slice(0, 1).toUpperCase()}${teamName.slice(
      1,
      teamName.length
    )} #${teamNumber}: ${cyclistType}`;
  } else {
    return `${teamName.slice(0, 1).toUpperCase()}${teamName.slice(
      1,
      teamName.length
    )} #${teamNumber}`;
  }
};

export const CardView = ({ cards }) => {
  return (
    <div className="card-view">
      {cards.map((card) => (
        <figure>
          <figcaption>{getDisplayName(card.name)}</figcaption>
          <Card image={getFilename(card.name, card.card)} />
        </figure>
      ))}
    </div>
  );
};
