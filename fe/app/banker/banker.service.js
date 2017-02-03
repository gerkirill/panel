import moment from 'moment';

class BankerService {
  constructor($http, $q, ratesUrl) {
    this.$http = $http;
    this.$q = $q;
    this.ratesUrl = ratesUrl;
  }

  getRates() {
    let endDate = moment().format('DD.MM.YYYY');
    let startDate = moment().subtract(3, 'days').format('DD.MM.YYYY');
    let params = {
      startDate: startDate,
      endDate: endDate,
      currency: 'USD'
    }
    let bidUrl = this.parseUrl(
      this.ratesUrl,
      Object.assign({}, params, {'bid-or-ask': 'bid'})
    );
    let askUrl = this.parseUrl(
      this.ratesUrl,
      Object.assign({}, params, {'bid-or-ask': 'ask'})
    );
    return this.$q.all({
      'bid': this.$http.get(bidUrl),
      'ask': this.$http.get(askUrl),
    }).then(resp => {return {'bid': resp.bid.data, 'ask': resp.ask.data}});
  }

  parseUrl(url, data) {
    for (let [k, v] of Object.entries(data)) {
      url = url.replace('{{' + k + '}}', v);
    }
    return url;
  }
}

export default class BankerServiceProvider {
  constructor() {
    this.ratesUrl =
      'http://banker.ua/marketindex/currency_graph_ib/' +
      '{{startDate}}/{{endDate}}/{{currency}}/{{bid-or-ask}}/'
    ;
  }
  setRatesUrl(url) {
    this.ratesUrl = url;
  }
  $get($http, $q) {
    return new BankerService($http, $q, this.ratesUrl);
  }
}
