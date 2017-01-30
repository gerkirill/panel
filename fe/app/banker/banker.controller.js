export default class BankerController {

  constructor($interval, bankerService) {
    this.$interval = $interval;
    this.bankerService = bankerService;
  }

  $onInit() {
    this.update();
    this.$interval(() => this.update(), 1000 * 60);
  }

  update() {
    this.bankerService.getRates().then(rates => {
      this.bidLines = rates.bid;
      this.askLines = rates.ask;
    });
  }
}
