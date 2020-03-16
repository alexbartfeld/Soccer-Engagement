import {Component, Host, h, State, Prop} from '@stencil/core';
import {Store, Unsubscribe} from "@stencil/redux";

@Component({
  tag: 'vff-score-board',
  styleUrl: 'score-board.css',
  shadow: true
})
export class ScoreBoard {
  private storeUnsubscribe: Unsubscribe;

  @State() scoreBoard = {};

  @Prop({context: "store"})
  store: Store;

  @State() home_team = {};
  @State() away_team = {};

  componentWillLoad() {
    this.storeUnsubscribe = this.store.mapStateToProps(this, (state) => {
      const {scoreBoard} = state;
      this.home_team = scoreBoard.home;
      this.away_team = scoreBoard.away;
      return {scoreBoard};
    });
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
