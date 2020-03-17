import teamLineUp from "./team-line-up";
import teamColor from "./team-color";
import teamScore from "./team-score";
import {combineReducers} from "redux";

export const rootReducer = combineReducers({
  teamScore,
  teamColor,
  teamLineUp
});

export default rootReducer;
