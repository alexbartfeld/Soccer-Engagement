import {Component, h, Prop, getAssetPath} from '@stencil/core';

@Component({
  tag: 'vff-tab',
  styleUrl: 'tab.css',
  shadow: true,
  assetsDirs: ['assets']
})
export class Tab {
  @Prop() imgSrc: string;
  @Prop() route: string;

  render() {
    return (
        <stencil-route-link activeClass="active" url={this.route}>
          <img src={getAssetPath(this.imgSrc)}/>
        </stencil-route-link>
    );
  }

}
