import {Config} from '@stencil/core';

// https://stenciljs.com/docs/config

export const config: Config = {
  devServer: {
    port: 3333
  },
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  outputTargets: [
    {
      type: 'www',
      serviceWorker: null, // comment the following line to disable service workers in production
      copy: [
        { src: 'mocks', dest: 'build/mocks'}
      ]
    }
  ]
};
