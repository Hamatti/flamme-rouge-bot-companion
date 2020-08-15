import React, { useState } from "react";

import AppStates from "../util/AppStates";

export const BotSelector = ({ bots, setBots, setAppState }) => {
  const [selections, setSelections] = useState([]);
  const [dropdownSelection, setDropdownSelection] = useState("peloton");

  const removeFromSelection = (idx) => {
    setSelections([
      ...selections.slice(0, idx),
      ...selections.slice(idx + 1, selections.length),
    ]);
  };
  return (
    <div className="bot-selector-page">
      <h2>Let's start a new game</h2>
      <p>Add bots and hit submit when you're ready!</p>

      <div className="bot-selector">
        <select onChange={(event) => setDropdownSelection(event.target.value)}>
          <option value="peloton">Peloton Team</option>
          <option value="muscle">Muscle Team</option>
        </select>
        <button
          onClick={() => setSelections([...selections, dropdownSelection])}
        >
          +
        </button>
      </div>

      <div className="selected-bots">
        <h2>Selected teams</h2>
        {selections.length > 0 ? (
          <ul>
            {selections.map((selection, idx) => (
              <li key={idx}>
                {selection}
                <button onClick={() => removeFromSelection(idx)}>-</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>You haven't selected any teams yet.</p>
        )}
      </div>

      <div>
        <h2>Confirm</h2>
        {selections.length > 0 ? (
          <button
            onClick={() => {
              setBots(selections);
              setAppState(AppStates.BOTS_SELECTED);
            }}
            disabled={selections.length <= 0}
          >
            Submit
          </button>
        ) : (
          <p>You need to choose at least one bot</p>
        )}
      </div>
    </div>
  );
};
