import {Component, h, getAssetPath} from '@stencil/core';

@Component({
  tag: 'vff-loader',
  styleUrl: 'loader.css',
  shadow: true,
  assetsDirs: ['assets-lo']
})
export class Loader {

  render() {
    return (
      <div class="lds-ring"><img
        alt="loader"
        height='80'
        width='80'
        src={getAssetPath('./assets-lo/goal.svg')}/></div>
    );
  }

}
