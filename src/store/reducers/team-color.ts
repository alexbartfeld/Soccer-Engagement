import {TypeKeys} from "../actions";

const getInitialState = () => {
  return {
    "home": {
      color: '#000'
    },
    "away": {
      color: '#000'
    }
  };
};

const teamColor = (
  state = getInitialState(),
  action: any /*for now...*/
) => {
  switch (action.type) {
    case TypeKeys.SET_COLOR: {
      if (action.isHome) {
        return {...state, home: {...state.home, color: action.color}}
      } else {
        return {...state, away: {...state.away, color: action.color}}
      }

    }
  }
  return state;
};

export default teamColor;
