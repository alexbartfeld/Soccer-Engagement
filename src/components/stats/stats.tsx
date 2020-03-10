import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'vff-stats',
  styleUrl: 'stats.css',
  shadow: true
})
export class Stats {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
