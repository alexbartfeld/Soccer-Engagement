import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'vff-score-board',
  styleUrl: 'score-board.css',
  shadow: true
})
export class ScoreBoard {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
