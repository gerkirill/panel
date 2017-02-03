export default class KursController {
  constructor($interval) {
    this.$interval = $interval;
    // binding
    this.int = 3600;
    // set by link()
    this.updateCurrencies = function() {};
  }

  $postLink() {
    this.updateCurrencies();
    this.interval = this.$interval(
      () => this.updateCurrencies(),
      (this.int ? this.int : 3600) * 1000
    );
  }

  $onDestroy() {
    this.$interval.cancel(this.interval);
  }

  // called by the link() of the directive
  static link(scope, iElement, iAttrs, controller) {
    controller.updateCurrencies = function() {
      let iframe = `
        <iframe src="http://kurs.com.ua/informer/inf2?color=green"
          width="350" height="130"
          frameborder="0" vspace="0"
          scrolling="no" hspace="0"></iframe>
      `;
      iElement[0].getElementsByClassName('kurs-com-ua-informer-main-ukraine-350x130-green')[0]
        .innerHTML = iframe;
    }
  }
}
