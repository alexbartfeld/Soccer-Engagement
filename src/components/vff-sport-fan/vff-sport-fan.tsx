import {Host, Component, h, Element} from '@stencil/core';
import {routes} from "../../routes/routes";

@Component({
  tag: 'vff-sport-fan',
  styleUrl: 'vff-sport-fan.css',
  shadow: true
})
export class VffSportFan {
  @Element() el: HTMLElement;

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
                <stencil-route component="vff-time-line"/>
              </stencil-route-switch>
            </stencil-router>
          </div>
        </main>
        <slot></slot>
      </Host>
    );
  }
}
