import {Component, Host, h, Prop, getAssetPath} from '@stencil/core';

@Component({
  tag: 'vff-score-board-item',
  styleUrl: 'score-board-item.css',
  shadow: true,
  assetsDirs: ['assets-sc']
})
export class ScoreBoardItem {
  @Prop() props;

  render() {
    const {name, score, img_src} = this.props;
    return (
      <Host>
        <div id='logo'><img alt='TEAM LOGO' src={getAssetPath(img_src)}/></div>
        <div id='name'>{name}</div>
        <div id='score'>{score}</div>
      </Host>
    );
  }
}
