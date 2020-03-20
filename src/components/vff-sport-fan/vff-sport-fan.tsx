import {Host, Component, h, Element, getAssetPath, State} from '@stencil/core';
import {routes} from "../../routes/routes";

@Component({
  tag: 'vff-sport-fan',
  styleUrl: 'vff-sport-fan.css',
  shadow: true,
  assetsDirs: ['assets-sp']
})
export class VffSportFan {
  @Element() el: HTMLElement;

  @State() featureActive: boolean = false;

  constructor() {
    this.toggleSportsFan = this.toggleSportsFan.bind(this);
  }

  connectedCallback() {
    document.body.addEventListener('click', (e) => {
      this.featureActive && this.toggleSportsFan(e);
    });
    // prevent click on feature from closing itself
    this.el.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  }

  toggleSportsFan(e) {
    e.stopPropagation(); // prevent click form propagation to body
    this.featureActive = !this.featureActive;
  }

  render() {
    return (
      <Host class={this.featureActive ? 'show' : ''}>
        <main>
          <vff-score-board/>
          <div id='engagement-feature'>
            <stencil-router historyType='hash'>
              <stencil-route-switch scrollTopOffset={0}>
                <stencil-route url={routes.TIME_LINE} component='vff-time-line' exact={true}/>
                <stencil-route url={routes.STATS} component='vff-stats'/>
                <stencil-route url={routes.FORMATION} component='vff-team-line-up'/>
                <stencil-route url={routes.SOCIAL} component='vff-social-embed'/>
                <stencil-route component="vff-time-line"/>
              </stencil-route-switch>
            </stencil-router>
          </div>
        </main>
        <slot></slot>
        <div id='feature-toggle-back' onClick={this.toggleSportsFan}>&#10005;</div>
        <div class={this.featureActive ? 'hide' : ''} id='feature-toggle' onClick={this.toggleSportsFan}>
          <img id='feature-toggle__image' alt='open' src={getAssetPath('./assets-sp/goal.svg')}/>
        </div>
      </Host>
    );
  }
}
