import convert from 'xml-js';

export default class ExampleService {
  constructor($http) {
    this.$http = $http;
  }
  getRss(url) {
    return this.$http.get(url)
    .then(res => convert.xml2js(res.data, {compact: true}).rss.channel.item);
  }
  getConfig(url) {
    return this.$http.get(url).then(resp => resp.data);
  }
}
