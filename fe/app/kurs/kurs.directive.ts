import KursController from './kurs.controller';
import tempalte from './kurs.html';

export default () => ({
  template: tempalte,
  scope: {
    int: '<interval'
  },
  bindToController: true,
  controllerAs: '$ctrl',
  controller: KursController,
  link: KursController.link
});
