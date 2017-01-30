import angular from 'angular';
import uirouter from 'angular-ui-router';
import example from './example/example.module';
import banker from './banker/banker.module';

require('./main.scss');

angular.module('app', [
  uirouter,
  'example',
  'banker'
]);
