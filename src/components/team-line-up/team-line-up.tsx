import {Component, Host, h, State} from '@stencil/core';

function lineUpItem(player, color, setColor, isLeft) {
  const c = setColor ? `linear-gradient(${isLeft ? '270' : '90'}deg, rgba(0, 0, 0, 0) 0%, ${color} 100%)` : 'transparent';

  return (<div class='player' style={{backgroundImage: c}}>
    <span class='player__num'>{player.shirt_number}</span>
    <span class='player__name'>{player.name}</span>
  </div>)
}

@Component({
  tag: 'vff-team-line-up',
  styleUrl: 'team-line-up.css',
  shadow: true
})
export class TeamLineUp {
  @State() teamsLineUp;

  componentWillLoad() {
    return fetch('./build/mocks/teams_lineup.json')
      .then(response => response.json())
      .then(json => {
        this.teamsLineUp = json;
      }).catch(err => {
        return err;
      });
  }

  render() {
    const leftTeam = this.teamsLineUp.home;
    const rightTeam = this.teamsLineUp.away;
    const leftTeamPlayers = leftTeam.players;
    const rightTeamPlayers = rightTeam.players;
    const leftTeamActivePlayers = leftTeamPlayers.filter(player => player.substitution === '0');
    const rightTeamActivePlayers = rightTeamPlayers.filter(player => player.substitution === '0');
    const leftTeamSubstitutes = leftTeamPlayers.filter(player => player.substitution === '1');
    const rightTeamSubstitutes = rightTeamPlayers.filter(player => player.substitution === '1');
    const leftTeamColor = leftTeam.team_color;
    const rightTeamColor = rightTeam.team_color;
    return (
      <Host>
        <vff-formation/>
        <div id='line-up'>
          <div class='left'>
            {
              leftTeamActivePlayers.map((player, i) => {
                return lineUpItem(player, leftTeamColor, (i % 2 === 0), true);
              })}
          </div>
          <div class='right'>
            {
              rightTeamActivePlayers.map((player, i) => {
                return lineUpItem(player, rightTeamColor, (i % 2 === 0), false);
              })}
          </div>
        </div>
        <div id='substitutes__title'>Substitutes</div>
        <div id='substitutes'>
          <div class='left'>
            {
              leftTeamSubstitutes.map((player, i) => {
                return lineUpItem(player, leftTeamColor, (i % 2 === 0), true);
              })}
          </div>
          <div class='right'>
            {
              rightTeamSubstitutes.map((player, i) => {
                return lineUpItem(player, rightTeamColor, (i % 2 === 0), false);
              })}
          </div>
        </div>
      </Host>
    );
  }

}
