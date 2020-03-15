import {Component, Host, h, State} from '@stencil/core';

@Component({
  tag: 'vff-score-board',
  styleUrl: 'score-board.css',
  shadow: true
})
export class ScoreBoard {
  @State() home_team = {};
  @State() away_team = {};

  componentWillLoad() {
    return fetch('./build/mocks/score_board.json')
      .then(response => response.json())
      .then(json => {
        this.home_team = json.home;
        this.away_team = json.away;
      }).catch(err => {
        return err;
      });
  }

  render() {
    return (
      <Host>
        <vff-score-board-item class='home_team' props={this.home_team}/>
        <span>-</span>
        <vff-score-board-item class='away_team' props={this.away_team}/>
      </Host>
    );
  }

}
