export interface LineUpPlayer {
  'name': string,
  'substitution': string,
  'shirt_number': string
}

export interface TeamsLineUp {
  home: { players: LineUpPlayer[], team_color: string },
  away: { players: LineUpPlayer[], team_color: string }
}
