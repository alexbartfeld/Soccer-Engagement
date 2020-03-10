import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'vff-stat-item',
  styleUrl: 'stat-item.css',
  shadow: true
})
export class StatItem {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
