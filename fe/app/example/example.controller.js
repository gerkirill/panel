export default class Controller {

  constructor($http, $q, $interval, exampleService) {
    // bindings
    this.url = '';
    this.limit = 10;
    this.interval = 60;
    // dependencies
    this.$http = $http;
    this.$q = $q;
    this.$interval = $interval;
    this.exampleService = exampleService;
  }

  getRss() {
    return this.exampleService.getRss(this.url);
  }

  getConfig() {
    return this.exampleService.getConfig('/seasonvar.json');
  }

  updateSeries() {
    this.$q.all({rss: this.getRss(), config: this.getConfig()})
    .then(res => {
      let allSeriesInRss = res.rss;
      let seriesOfInterest = res.config['series-of-interest'];
      let filtered = allSeriesInRss.filter(value => {
        for (let i = 0; i < seriesOfInterest.length; i++) {
          if (value.title._cdata.indexOf(seriesOfInterest[i]) === 0) {
            return true;
          }
        }
        return false;
      });
      this.items = filtered.slice(0, this.limit);
    });
  }

  $onInit() {
    this.updateSeries();
    this.$interval(
      () => this.updateSeries(),
      1000 * (this.interval ? this.interval : 60)
    );
  }
}
