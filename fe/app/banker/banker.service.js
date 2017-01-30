import moment from 'moment';

export default class BankerService {
  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;
  }

  getRates() {
    let endDate = moment().format('DD.MM.YYYY');
    let startDate = moment().subtract(3, 'days').format('DD.MM.YYYY');
    let url = '/api/proxy/http://banker.ua/marketindex/currency_graph_ib/' +
              `${startDate}/${endDate}/USD/`;
    return this.$q.all({
      'bid': this.$http.get(`${url}/bid`),
      'ask': this.$http.get(`${url}/ask`)
    }).then(resp => {return {'bid': resp.bid.data, 'ask': resp.ask.data}});
  }
}
