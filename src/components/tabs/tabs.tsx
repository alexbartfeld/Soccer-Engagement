import {Component, Host, h, Listen, Element, State, Prop} from '@stencil/core';
import {RouterHistory} from '@stencil/router';

@Component({
  tag: 'vff-tabs',
  styleUrl: 'tabs.css',
  shadow: true
})
export class Tabs {
  @State() route: string;
  @Element() el: HTMLElement;
  @Prop() history?: RouterHistory;

  @Listen('click')
  handleTabClick(e) {
    Array.prototype.forEach.call(this.el.children, (tab) => {
      tab.classList.remove('active')
    });
    e.target.classList.add('active');
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
