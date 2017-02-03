import convert from 'xml-js';

class ExampleService {
  constructor($http, url) {
    this.$http = $http;
    this.url = url;
  }
  setRssUrl(url) {
    this.url = url;
  }
  getRss() {
    return this.$http.get(this.url)
    .then(res => convert.xml2js(res.data, {compact: true}).rss.channel.item);
  }
  getConfig(url) {
    return this.$http.get(url).then(resp => resp.data);
  }
}

export default class ExampleServiceProvider {
  constructor() {
    this.url = 'http://seasonvar.ru/rss.php';
  }
  setRssUrl(url) {
    this.url = url;
  }
  $get($http) {
    return new ExampleService($http, this.url);
  }
}
