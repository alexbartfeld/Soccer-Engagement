import {Component, Host, h, State, getAssetPath, Element, Prop} from '@stencil/core';
import {Store, Unsubscribe} from "@stencil/redux";
// models
import {TeamFormation, TeamPlayer} from "./models/formation-models";

function nameFormat(name) {
  return name
    .split(' ')
    .map((n, i, str) => {
      return str[i + 1] === undefined ? n.substring(0, 6) : n.substring(0, 1)
    })
    .join('.')
}

@Component({
  tag: 'vff-formation',
  styleUrl: 'formation.css',
  shadow: true,
  assetsDirs: ['assets-fr']
})
export class Formation {
  private storeUnsubscribe: Unsubscribe;

  @State() leftTeam: TeamFormation = {
    team_color: '',
    goal_keeper: {
      name: '',
      shirt_number: ''
    },
    formation_details: [],
    formation: ''
  };
  @State() rightTeam: TeamFormation = {
    team_color: '',
    goal_keeper: {
      name: '',
      shirt_number: ''
    },
    formation_details: [],
    formation: ''
  };

  @State() teamColor;

  @Prop({context: "store"})
  store: Store;

  @Element() el: HTMLElement;

  componentWillLoad() {
    this.storeUnsubscribe = this.store.mapStateToProps(this, (state) => {
      const {teamColor} = state;
      this.leftTeam = {...this.leftTeam, team_color: teamColor.home.color};
      this.rightTeam = {...this.rightTeam, team_color: teamColor.away.color};
      return {teamColor};
    });
    /*
        return fetch('./build/mocks/teams_formation.json')
          .then(response => response.json())
          .then(json => {
            this.leftTeam = json.leftTeam;
            this.rightTeam = json.rightTeam;
          }).catch(err => {
            return err;
          });*/
  }

  componentDidUnload() {
    this.storeUnsubscribe();
  }

  renderFormation(team: TeamFormation) {
    const result = [];
    const teamColor = team.team_color || '#000';
    const goalKeeper = team.goal_keeper;
    const teamFormation = team.formation_details;

    const playerFormat = function (num, name) {
      return (
        <div style={{backgroundColor: teamColor}} class='player' data-name={nameFormat(name)}>{num}</div>
      )
    };

    result.push(<div class="goal-keeper">
      {playerFormat(goalKeeper.shirt_number, goalKeeper.name)}
    </div>);

    result.push(...teamFormation.map(column => {
      return (
        <div class='column'>
          {column.map((player: TeamPlayer) => {
            return (playerFormat(player.shirt_number, player.name));
          })}
        </div>
      )
    }));

    return result;
  }

  render() {
    return (
      <Host>
        <div id="formation__container">
          <div id='formation__title'>
            <div id='formation__title--left'>{this.leftTeam.formation}</div>
            <div id='formation__title--right'>{this.rightTeam.formation}</div>
          </div>
          <div id='formation__details'>
            <img id="field" src={getAssetPath("./assets-fr/soccer_field_bg.svg")}/>
            <div class="left">{this.renderFormation(this.leftTeam)}</div>
            <div class="right">{this.renderFormation(this.rightTeam)}</div>
          </div>
        </div>
      </Host>
    );
  }
}
