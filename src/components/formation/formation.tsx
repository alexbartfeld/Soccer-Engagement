import {Component, Host, h, State, getAssetPath, Element, Watch, Listen} from '@stencil/core';
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
  @State() leftTeam: TeamFormation;
  @State() rightTeam: TeamFormation;

  @State() width;
  @State() height;

  private formationContainer;

  @Element() el: HTMLElement;

  componentWillLoad() {
    return fetch('http://127.0.0.1:8080/teams_formation.json')
      .then(response => response.json())
      .then(json => {
        this.leftTeam = json.leftTeam;
        this.rightTeam = json.rightTeam;
      }).catch(err => {
        return err;
      });
  }

  componentDidRender() {
    this.formationContainer = this.el.shadowRoot.querySelector('#formation-container');
    this.width = this.formationContainer.getBoundingClientRect().width;
  }

  @Listen('resize', {target: 'window'})
  handleResize() {
    this.width = this.formationContainer.getBoundingClientRect().width;
  }

  @Watch('width')
  handleWidthChange(width) {
    this.height = width * 62.5 / 100;
  }

  renderFormation(team: TeamFormation) {
    const result = [];
    const teamColor = team.team_color || '#000';
    const goalKeeper = team.goal_keeper;
    const teamFormation = team.team_formation;

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
    const height = this.height + 'px';
    return (
      <Host>
        <div id="formation-container" style={{height}}>
          <img id="field" src={getAssetPath("./assets-fr/soccer_field_bg.svg")}/>
          <div class="left">{this.renderFormation(this.leftTeam)}</div>
          <div class="right">{this.renderFormation(this.rightTeam)}</div>
        </div>
      </Host>
    );
  }
}
