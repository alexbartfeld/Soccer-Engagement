import {Config} from '@stencil/core';
// import {readFileSync} from 'fs';
// @ts-ignore
const readFileSync = require('fs').readFileSync;
// https://stenciljs.com/docs/config

export const config: Config = {
  devServer: {
    https: {
      cert: readFileSync('./cert/localhost.crt', 'utf8'),
      key: readFileSync('./cert/localhost.key', 'utf8')
    },
    port: 8000
  },
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  outputTargets: [
    {
      type: 'www',
      serviceWorker: null, // comment the following line to disable service workers in production
      copy: [
        {src: 'mocks', dest: 'build/mocks'}
      ]
    }
  ]
};
