import {Component, Host, h, Prop} from '@stencil/core';

@Component({
  tag: 'vff-stat-item',
  styleUrl: 'stat-item.css',
  shadow: true
})
export class StatItem {
  @Prop() props;

  render() {
    const {name, home, away} = this.props;

    return (
      <Host>
        <div id='home_value'>{home}</div>
        <div id='stat_name'>{name}</div>
        <div id='away_value'>{away}</div>
      </Host>
    );
  }

}
