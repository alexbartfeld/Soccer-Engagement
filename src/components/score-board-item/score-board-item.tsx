import {Component, Host, h, Prop, getAssetPath} from '@stencil/core';
// @ts-ignore
import teams from '../../mocks/teams.json';
declare var vff: any;
@Component({
  tag: 'vff-score-board-item',
  styleUrl: 'score-board-item.css',
  shadow: true,
  assetsDirs: ['assets-sc']
})
export class ScoreBoardItem {
  @Prop() props;
  @Prop() namespace;

  connectedCallback(){
    let t = teams.teams.reduce((res, team) => {
      res[team.name] = team;
      return res;
    },{});
    vff.registerControl("team", null, {group : this.namespace, ui: {type : 'dropdown', options : t}}).on(e => {
      let data = JSON.parse(e.data);
      this.props = {...this.props, name : data.name, img_src : data.logo};
    });
    vff.registerControl("score", 0, {group : this.namespace}).on(e => {
      this.props = {...this.props, score : e.data};
    });
    // vff.registerControls(this.props, {group : this.namespace}).on(e => {
    //   this.props = {...this.props, ...e.data};
    // });
  }

  render() {
    const {name, score, img_src} = this.props;
    return (
      <Host>
        <div id='logo'><img src={getAssetPath(img_src)}/></div>
        <div id='name'>{name}</div>
        <div id='score'>{score}</div>
      </Host>
    );
  }
}
