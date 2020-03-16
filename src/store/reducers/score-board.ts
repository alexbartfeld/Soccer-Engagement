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
    // here's where we handle actions
  }
  return state;
};

export default scoreBoard;
