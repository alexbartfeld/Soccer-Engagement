/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  RouterHistory,
} from '@stencil/router';

export namespace Components {
  interface VffLoader {}
  interface VffScoreBoard {}
  interface VffScoreBoardItem {
    'props': any;
  }
  interface VffSportFan {}
  interface VffStatItem {
    'props': any;
  }
  interface VffStats {}
  interface VffTab {
    'imgSrc': string;
    'route': string;
  }
  interface VffTabs {
    'history'?: RouterHistory;
  }
  interface VffTimeLine {}
  interface VffTimeLineEvent {
    'props': any;
  }
}

declare global {


  interface HTMLVffLoaderElement extends Components.VffLoader, HTMLStencilElement {}
  var HTMLVffLoaderElement: {
    prototype: HTMLVffLoaderElement;
    new (): HTMLVffLoaderElement;
  };

  interface HTMLVffScoreBoardElement extends Components.VffScoreBoard, HTMLStencilElement {}
  var HTMLVffScoreBoardElement: {
    prototype: HTMLVffScoreBoardElement;
    new (): HTMLVffScoreBoardElement;
  };

  interface HTMLVffScoreBoardItemElement extends Components.VffScoreBoardItem, HTMLStencilElement {}
  var HTMLVffScoreBoardItemElement: {
    prototype: HTMLVffScoreBoardItemElement;
    new (): HTMLVffScoreBoardItemElement;
  };

  interface HTMLVffSportFanElement extends Components.VffSportFan, HTMLStencilElement {}
  var HTMLVffSportFanElement: {
    prototype: HTMLVffSportFanElement;
    new (): HTMLVffSportFanElement;
  };

  interface HTMLVffStatItemElement extends Components.VffStatItem, HTMLStencilElement {}
  var HTMLVffStatItemElement: {
    prototype: HTMLVffStatItemElement;
    new (): HTMLVffStatItemElement;
  };

  interface HTMLVffStatsElement extends Components.VffStats, HTMLStencilElement {}
  var HTMLVffStatsElement: {
    prototype: HTMLVffStatsElement;
    new (): HTMLVffStatsElement;
  };

  interface HTMLVffTabElement extends Components.VffTab, HTMLStencilElement {}
  var HTMLVffTabElement: {
    prototype: HTMLVffTabElement;
    new (): HTMLVffTabElement;
  };

  interface HTMLVffTabsElement extends Components.VffTabs, HTMLStencilElement {}
  var HTMLVffTabsElement: {
    prototype: HTMLVffTabsElement;
    new (): HTMLVffTabsElement;
  };

  interface HTMLVffTimeLineElement extends Components.VffTimeLine, HTMLStencilElement {}
  var HTMLVffTimeLineElement: {
    prototype: HTMLVffTimeLineElement;
    new (): HTMLVffTimeLineElement;
  };

  interface HTMLVffTimeLineEventElement extends Components.VffTimeLineEvent, HTMLStencilElement {}
  var HTMLVffTimeLineEventElement: {
    prototype: HTMLVffTimeLineEventElement;
    new (): HTMLVffTimeLineEventElement;
  };
  interface HTMLElementTagNameMap {
    'vff-loader': HTMLVffLoaderElement;
    'vff-score-board': HTMLVffScoreBoardElement;
    'vff-score-board-item': HTMLVffScoreBoardItemElement;
    'vff-sport-fan': HTMLVffSportFanElement;
    'vff-stat-item': HTMLVffStatItemElement;
    'vff-stats': HTMLVffStatsElement;
    'vff-tab': HTMLVffTabElement;
    'vff-tabs': HTMLVffTabsElement;
    'vff-time-line': HTMLVffTimeLineElement;
    'vff-time-line-event': HTMLVffTimeLineEventElement;
  }
}

declare namespace LocalJSX {
  interface VffLoader {}
  interface VffScoreBoard {}
  interface VffScoreBoardItem {
    'props'?: any;
  }
  interface VffSportFan {}
  interface VffStatItem {
    'props'?: any;
  }
  interface VffStats {}
  interface VffTab {
    'imgSrc'?: string;
    'route'?: string;
  }
  interface VffTabs {
    'history'?: RouterHistory;
  }
  interface VffTimeLine {}
  interface VffTimeLineEvent {
    'props'?: any;
  }

  interface IntrinsicElements {
    'vff-loader': VffLoader;
    'vff-score-board': VffScoreBoard;
    'vff-score-board-item': VffScoreBoardItem;
    'vff-sport-fan': VffSportFan;
    'vff-stat-item': VffStatItem;
    'vff-stats': VffStats;
    'vff-tab': VffTab;
    'vff-tabs': VffTabs;
    'vff-time-line': VffTimeLine;
    'vff-time-line-event': VffTimeLineEvent;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'vff-loader': LocalJSX.VffLoader & JSXBase.HTMLAttributes<HTMLVffLoaderElement>;
      'vff-score-board': LocalJSX.VffScoreBoard & JSXBase.HTMLAttributes<HTMLVffScoreBoardElement>;
      'vff-score-board-item': LocalJSX.VffScoreBoardItem & JSXBase.HTMLAttributes<HTMLVffScoreBoardItemElement>;
      'vff-sport-fan': LocalJSX.VffSportFan & JSXBase.HTMLAttributes<HTMLVffSportFanElement>;
      'vff-stat-item': LocalJSX.VffStatItem & JSXBase.HTMLAttributes<HTMLVffStatItemElement>;
      'vff-stats': LocalJSX.VffStats & JSXBase.HTMLAttributes<HTMLVffStatsElement>;
      'vff-tab': LocalJSX.VffTab & JSXBase.HTMLAttributes<HTMLVffTabElement>;
      'vff-tabs': LocalJSX.VffTabs & JSXBase.HTMLAttributes<HTMLVffTabsElement>;
      'vff-time-line': LocalJSX.VffTimeLine & JSXBase.HTMLAttributes<HTMLVffTimeLineElement>;
      'vff-time-line-event': LocalJSX.VffTimeLineEvent & JSXBase.HTMLAttributes<HTMLVffTimeLineEventElement>;
    }
  }
}


