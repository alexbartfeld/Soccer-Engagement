import {Component, Host, h, Element, State} from '@stencil/core';
import {GameStatus} from "./models/time-line.models";

@Component({
  tag: 'vff-time-line',
  styleUrl: 'time-line.css',
  shadow: true
})
export class TimeLine {
  @Element() el: HTMLElement;
  @State() events: object[] = [];
  @State() isGameLive: boolean = false;

  componentWillLoad() {
    return fetch('./build/mocks/game_events.json')
      .then(response => response.json())
      .then(json => {
        if (json.success) {
          this.events = json.data.event;
          this.isGameLive = json.data.match.status === GameStatus.LIVE;
        }
      }).catch(err => {
        return err;
      });
  }

  render() {
    const liveButton = this.isGameLive ?
      <div class="timeline__live">
        <button class="timeline__live-btn" type="button">LIVE</button>
      </div> : null;

    return (
      <Host>
        {liveButton}
        <div class="timeline">
          {
            this.events.reverse().map(event => {
              return (<vff-time-line-event props={event}/>)
            })
          }
        </div>
      </Host>
    );
  }
}
