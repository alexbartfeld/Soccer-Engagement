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

  toggleSportsFan() {
    this.featureActive = !this.featureActive;
    this.el.classList.toggle('show');
  }

  render() {
    return (
      <Host>
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
        <div id='feature-toggle-back' onClick={this.toggleSportsFan}>
          <img id='feature-toggle-back__image' alt='close' src={getAssetPath('./assets-sp/back.svg')}/>
        </div>
        <div class={this.featureActive ? 'hide' : ''} id='feature-toggle' onClick={this.toggleSportsFan}>
          <img id='feature-toggle__image' alt='open' src={getAssetPath('./assets-sp/goal.svg')}/>
        </div>
      </Host>
    );
  }
}
