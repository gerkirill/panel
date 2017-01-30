export default class BankerController {

  constructor($interval, bankerService) {
    this.interval = 60;
    this.$interval = $interval;
    this.bankerService = bankerService;
    // privates
    this.updateInterval = null;
  }

  $onInit() {
    this.update();
    this.updateInterval = this.$interval(
      () => this.update(),
      1000 * (this.interval ? this.interval : 60)
    );
  }

  $onDestroy() {
    this.$interval.cancel(this.updateInterval);
  }

  update() {
    this.bankerService.getRates().then(rates => {
      this.bidLines = rates.bid;
      this.askLines = rates.ask;
    });
  }
}
