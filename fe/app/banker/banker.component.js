import html from './banker.html';
import Controller from './banker.controller.js';

export default {
  controller: Controller,
  template: html,
  bindings: {
    interval: '<'
  }
}
