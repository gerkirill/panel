import exampleHtml from './example.html';
import Controller from './example.controller.js';

export default {
  controller: Controller,
  template: exampleHtml,
  controllerAs: 'example',
  bindings: {
    limit: '<',
    interval: '<'
  }
}
