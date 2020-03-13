import {Component, Host, h, Element, State} from '@stencil/core';

@Component({
  tag: 'vff-time-line',
  styleUrl: 'time-line.css',
  shadow: true
})
export class TimeLine {
  @Element() el: HTMLElement;
  @State() events: object[] = [];

  componentWillLoad() {
    return fetch('http://127.0.0.1:8080/game_events.json')
      .then(response => response.json())
      .then(json => {
        if (json.success) {
          this.events = json.data.event
        }
      }).catch(err => {
        return err;
      });
  }


  render() {
    return (
      <Host>
        <div class="timeline__live">
          <button class="timeline__live-btn" type="button">LIVE</button>
        </div>
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
