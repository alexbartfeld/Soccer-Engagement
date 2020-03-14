import {Component, Host, h, State} from '@stencil/core';

@Component({
  tag: 'vff-stats',
  styleUrl: 'stats.css',
  shadow: true
})
export class Stats {
  @State() game_stats = {};

  componentWillLoad() {
    return fetch('http://10.0.0.3:8080/match_stats.json')
      .then(response => response.json())
      .then(json => {
        this.game_stats = json;
      }).catch(err => {
        return err;
      });
  }

  render() {
    return (
      <Host>
        <div id='title'>TEAM STATS</div>
        {Object.keys(this.game_stats).map((key, i) => {
          const t = this.game_stats[key].split(':');
          return (
            <vff-stat-item class={i % 2 === 0 ? 'even' : 'odd'} props={{name: key, home: t[0], away: t[1]}}/>
          );
        })}
      </Host>
    );
  }

}
