import {TypeKeys} from "../actions";

const getInitialState = () => {
  return {
    "home": {
      "name": "Bayern München",
      "score": "0",
      "img_src": "./assets-sc/Bayern_Munchen.svg"
    },
    "away": {
      "name": "Dortmund",
      "score": "0",
      "img_src": "./assets-sc/Dortmund.svg"
    }
  };
};

const scoreBoard = (
  state = getInitialState(),
  action: any /*for now...*/
) => {
  switch (action.type) {
    case TypeKeys.SET_SCORE: {
      if (action.isHome) {
        return {...state, home: {...state.home, score: action.score}}
      } else {
        return {...state, away: {...state.away, score: action.score}}
      }

    }
  }
  return state;
};

export default scoreBoard;
