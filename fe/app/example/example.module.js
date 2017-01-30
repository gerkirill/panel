import angular from 'angular';
import routing from './example.route';
import component from './example.component';
import service from './example.service';

angular
  .module('example', [])
  .component('example', component)
  .service('exampleService', service)
  .config(routing);
