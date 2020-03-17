import "@stencil/redux";
import {Store} from "@stencil/redux";
import {Host, Component, h, Element, Prop} from '@stencil/core';
import {routes} from "../../routes/routes";
import {configureStore} from "../../store";
// Actions
declare var vff: any;
import {SetScore, SetColor} from '../../store/actions/';

@Component({
  tag: 'vff-sport-fan',
  styleUrl: 'vff-sport-fan.css',
  shadow: true
})
export class VffSportFan {
  SetScore: typeof SetScore;
  SetColor: typeof SetColor;

  @Element() el: HTMLElement;

  @Prop({context: "store"})
  store: Store;

  async componentWillLoad() {
    this.store.mapDispatchToProps(this, {SetScore, SetColor});
    this.store.setStore(configureStore({}));

    vff.registerControl("score", 0, {group: 'home'}).on(e => {
      this.SetScore(true, e.data);
    });

    vff.registerControl("color", 0, {group: 'home', ui: {type: 'color'}}).on(e => {
      this.SetColor(true, e.data);
    });

    vff.registerControl("score", 0, {group: 'away'}).on(e => {
      this.SetScore(false, e.data);
    });

    vff.registerControl("color", 0, {group: 'away', ui: {type: 'color'}}).on(e => {
      this.SetColor(false, e.data);
    });
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
      </Host>
    );
  }
}
