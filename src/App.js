import React, { useState } from "react";

import "./App.css";

import { BotSelector } from "./components/BotSelector";
import { GameRound } from "./components/GameRound";
import AppStates from "./util/AppStates";

function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

function App() {
  const [bots, setBots] = useLocalStorage("bots", ["foo"]);
  const [appState, setAppState] = useLocalStorage("appState", 0);

  return (
    <div className="App">
      <header>
        <h1>Flamme Rouge Bot Companion App</h1>
        <button
          onClick={() => {
            setBots([]);
            setAppState(0);
          }}
        >
          Reset
        </button>
      </header>
      <main>
        {appState === AppStates.EMPTY ? (
          <BotSelector
            setBots={setBots}
            bots={bots}
            setAppState={setAppState}
          />
        ) : (
          <GameRound bots={bots} />
        )}
      </main>
    </div>
  );
}

export default App;
