import angular from 'angular';

import {hello} from './app/hello';
import {login} from './app/login';
import 'angular-ui-router';
import routesConfig from './routes';

import './index.scss';

export const app = 'app';

angular
  .module(app, ['ui.router'])
  .config(routesConfig)
  .component('login', login)
  .component('hello', hello);
