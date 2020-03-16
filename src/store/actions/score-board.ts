import {TypeKeys} from "./index";

export interface SetUserName {
  type: TypeKeys.SET_TEAMS_INIT_DATA;
  teams: object
}

export const setTeamsInitialData = (teams: object) => (dispatch, _getState) => {
  const action: SetUserName = {
    type: TypeKeys.SET_TEAMS_INIT_DATA,
    teams
  };
  dispatch(action);
};
