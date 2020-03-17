import {LineUpPlayer} from "../../components/team-line-up/models/team-line-up.model";

export enum TypeKeys {
  // Won't match anything
  NULL = "NULL",
  ERROR = "ERROR",
  SET_SCORE = "SET_SCORE",
  SET_COLOR = "SET_COLOR",
  SET_TEAM_LINE_UP = "SET_TEAM_LINE_UP"
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

export const SetTeamLineUp = (isHome: boolean, lineUp: LineUpPlayer[]) => (dispatch, _getState) => {
  const action = {
    type: TypeKeys.SET_TEAM_LINE_UP,
    isHome,
    lineUp
  };
  dispatch(action);
};
