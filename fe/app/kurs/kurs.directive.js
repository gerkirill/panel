import tempalte from './kurs.html';
import KursController from './kurs.controller.js';


export default function() {
  return {
    template: tempalte,
    scope: {
      int: '<interval'
    },
    bindToController: true,
    controller: KursController,
    link: KursController.link
  }
};
