import { Component, h } from '@stencil/core';

@Component({
  tag: 'vff-loader',
  styleUrl: 'loader.css',
  shadow: true
})
export class Loader {

  render() {
    return (
      <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
    );
  }

}
