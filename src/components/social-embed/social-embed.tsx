import {Component, h, Element, State, Host} from '@stencil/core';

// @ts-ignore
window.twttr = (function (d, s, id) {
  let js, fjs = d.getElementsByTagName(s)[0],
    // @ts-ignore
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);
  t._e = [];
  t.ready = function (f) {
    t._e.push(f);
  };
  return t;
}(document, "script", "twitter-wjs"));

@Component({
  tag: 'vff-social-embed',
  styleUrl: 'social-embed.css',
  shadow: true
})
export class SocialEmbed {
  @Element() el: HTMLElement;

  @State() isHidden = true;

  componentDidRender() {
    // @ts-ignore
    twttr.ready(
      function (twttr) {
        twttr.widgets
          .load(this.el.shadowRoot.querySelector('#twitter'))
          .then(() => this.isHidden = false);
      }.bind(this)
    );
  }

  render() {
    return (
      <Host>
        {this.isHidden ? <vff-loader/> : null}
        <div id='twitter' class={this.isHidden ? 'hidden' : ''}>
          <a class="twitter-timeline" data-width="1200" data-theme="dark"
             href="https://twitter.com/GGFN_?ref_src=twsrc%5Etfw">Tweets by GGFN_</a>
        </div>
      </Host>
    );
  }

}
