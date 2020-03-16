export enum TypeKeys {
  // Won't match anything
  NULL = "NULL",
  ERROR = "ERROR",
  SET_SCORE = "SET_SCORE",
  SET_COLOR = "SET_COLOR"
}

export const SetScore = (isHome: boolean, score: string,) => (dispatch, _getState) => {
  const action = {
    type: TypeKeys.SET_SCORE,
    isHome,
    score
  };
  dispatch(action);
};

export const SetColor = (isHome: boolean, color: string) => (dispatch, _getState) => {
  const action = {
    type: TypeKeys.SET_COLOR,
    isHome,
    color
  };
  dispatch(action);
};
