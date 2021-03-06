import React, {createContext, useReducer} from 'react';
import Home from "./Home";
import Game from "./Game";
import {appInitialState, AppReducer, GameStatus} from "./App.service";

const GameContext = createContext({});

const App = () => {
  const [{status}, dispatch] = useReducer(AppReducer, appInitialState);

  return (
    <GameContext.Provider  value={[{status}, dispatch]}>
      {status === GameStatus.INIT ? <Home /> : <Game />}
    </GameContext.Provider>
  )
};

export default App;
