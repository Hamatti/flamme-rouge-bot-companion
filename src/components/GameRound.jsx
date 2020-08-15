import React, { useState, useEffect } from "react";

import { MUSCLE_SPRINTER, MUSCLE_ROULER, PELOTON } from "../util/Deck";
import shuffle from "../util/Shuffle";

import { CardView } from "./CardView";

const createDecks = (bots) => {
  let muscleCounter = 1;
  let pelotonCounter = 1;
  const decks = bots.flatMap((bot, idx) => {
    if (bot === "peloton") {
      return [
        { cards: shuffle([...PELOTON]), name: `peloton-${pelotonCounter++}` },
      ];
    } else {
      return [
        {
          cards: shuffle([...MUSCLE_SPRINTER]),
          name: `muscle-${muscleCounter}-sprinter`,
        },
        {
          cards: shuffle([...MUSCLE_ROULER]),
          name: `muscle-${muscleCounter++}-rouler`,
        },
      ];
    }
  });

  return decks;
};

export const GameRound = ({ bots }) => {
  const advanceRound = () => {
    setRound(round + 1);
    const newCards = decks.map((deck) => {
      if (deck.cards.length > 0) {
        return {
          name: deck.name,
          card: deck.cards.pop(),
        };
      } else {
        return {
          name: deck.name,
          card: -1,
        };
      }
    });
    setCards(newCards);
  };
  const [round, setRound] = useState(0);
  const [cards, setCards] = useState([]);
  const [decks, setDecks] = useState([]);
  useEffect(() => {
    setDecks(createDecks(bots));
  }, []);
  return (
    <div>
      <h2>
        {" "}
        {round === 0
          ? "Hit next round when all human players have made their decisions"
          : "Here are bots cards!"}
      </h2>

      <div>
        {round === 0 ? null : (
          <div>
            <CardView cards={cards} />
          </div>
        )}
      </div>
      <div>
        <button
          onClick={() => {
            advanceRound();
          }}
          className="next-round-btn"
        >
          Next round
        </button>
      </div>
    </div>
  );
};
