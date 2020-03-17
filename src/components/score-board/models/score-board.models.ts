export interface ScoreBoardTeamModel {
  name: string,
  score: string,
  img_src: string
}

export interface ScoreBoardModel {
  home: ScoreBoardTeamModel,
  away: ScoreBoardTeamModel
}
