import {Component, Host, h, State} from '@stencil/core';

@Component({
  tag: 'vff-team-line-up',
  styleUrl: 'team-line-up.css',
  shadow: true
})
export class TeamLineUp {
  // private leftTeam = {formation: '', players: []};
  // private rightTeam = {formation: '', players: []};
  @State() lineUp = {home: {}, away: {}};

  /*componentWillLoad() {
    return fetch('http://127.0.0.1:8080/teams_lineup.json')
      .then(response => response.json())
      .then(json => {
        this.lineUp = json;
        this.leftTeam = this.lineUp.home;
        this.rightTeam = this.lineUp.away;
      }).catch(err => {
        return err;
      });
  }*/

  render() {
    return (
      <Host>
        <vff-formation/>
      </Host>
    );
  }

}
