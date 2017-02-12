import {module} from 'angular';
import directive from './kurs.directive';

export let kurs =
  module('kurs', [])
  .directive('kursComUa', directive);
