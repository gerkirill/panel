import angular from 'angular';
import component from './banker.component';
import service from './banker.service';

angular
  .module('banker', [])
  .component('banker', component)
  .service('bankerService', service);
