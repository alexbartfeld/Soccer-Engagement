import {Component, Host, h, State, Prop} from '@stencil/core';
import {Store, Unsubscribe} from "@stencil/redux";

@Component({
  tag: 'vff-score-board',
  styleUrl: 'score-board.css',
  shadow: true
})
export class ScoreBoard {
  private storeUnsubscribe: Unsubscribe;

  @State() teamScore;

  @Prop({context: "store"})
  store: Store;

  @State() home_team: { name: '', score: '', img_src: '' };
  @State() away_team: { name: '', score: '', img_src: '' };

  componentWillLoad() {
    this.storeUnsubscribe = this.store.mapStateToProps(this, (state) => {
      const {teamScore} = state;
      this.home_team = {...this.home_team, score: teamScore.home.score};
      this.away_team = {...this.away_team, score: teamScore.away.score};
      return {teamScore};
    });
/*
    return fetch('./build/mocks/score_board.json')
      .then(response => response.json())
      .then(json => {
        this.home_team = json.home;
        this.away_team = json.away;
      }).catch(err => {
        return err;
      });*/
  }

  componentDidUnload() {
    this.storeUnsubscribe();
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
