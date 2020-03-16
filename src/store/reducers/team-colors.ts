import {TypeKeys} from "../actions";

const getInitialState = () => {
  return {
    "home": {
      color: '#FFF'
    },
    "away": {
      color: '#FFF'
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
