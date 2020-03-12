export interface TeamPlayer {
  name: string
  shirt_number: string
}

export interface TeamFormation {
  team_color: string
  goal_keeper: TeamPlayer
  formation_details: TeamPlayer[][]
  formation: string
}
