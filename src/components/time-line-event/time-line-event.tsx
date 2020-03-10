import {Component, Host, h, Prop, getAssetPath} from '@stencil/core';
import {event_types, event_images} from "./event-types";

@Component({
  tag: 'vff-time-line-event',
  styleUrl: 'time-line-event.css',
  shadow: true
})
export class TimeLineEvent {
  @Prop() props;

  render() {
    const {time, player, home_away, event} = this.props;
    const imgSrc = (event_types[event]) ? event_images[event_types[event]] : 'default.svg';
    return (
      <Host class={home_away === 'h' ? 'left' : 'right'} time={time}>
        <div id='event'>
          <span id='image'><img src={getAssetPath(`./assets-tl/${imgSrc}`)}/></span>
          <span id='text'>{player.toLowerCase()}</span>
        </div>
      </Host>
    );
  }
}
