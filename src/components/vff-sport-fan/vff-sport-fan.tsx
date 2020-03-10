import {Host, Component, h} from '@stencil/core';
import {routes} from "../../routes/routes";

@Component({
  tag: 'vff-sport-fan',
  styleUrl: 'vff-sport-fan.css',
  shadow: true
})
export class VffSportFan {

  render() {
    return (
      <Host>
        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url={routes.TIME_LINE} component='vff-time-line' exact={true}/>
              <stencil-route url={routes.FORMATION} component='vff-formation'/>
              <stencil-route url={routes.STATS} component='vff-stats'/>
              <stencil-route component="vff-time-line" />
            </stencil-route-switch>
          </stencil-router>
        </main>
        <slot></slot>
      </Host>
    );
  }
}
