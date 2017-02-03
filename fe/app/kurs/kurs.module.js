import angular from 'angular';
import directive from './kurs.directive';

angular
  .module('kurs', [])
  .directive('kursComUa', directive);
