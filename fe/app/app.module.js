import angular from 'angular';
import uirouter from 'angular-ui-router';
import example from './example/example.module';
import banker from './banker/banker.module';
import kurs from './kurs/kurs.module';

require('./main.scss');

angular.module('app', [
  uirouter,
  'example',
  'banker',
  'kurs'
])
.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('seasonvar', {
      url: '/seasonvar',
      template: '<example limit=1000 interval=60></example>'
    })
})
.config(function(bankerServiceProvider/*, exampleServiceProvider, $provide*/) {
  // exampleServiceProvider.setRssUrl('/proxy/seasonvar.ru/rss.php');
  // $provide.decorator(
  //   'exampleService',
  //   $delegate => ($delegate.setRssUrl('/proxy/seasonvar.ru/rss.php'), $delegate)
  // );
  bankerServiceProvider.setRatesUrl(
    '/proxy/banker.ua/marketindex/currency_graph_ib/' +
    '{{startDate}}/{{endDate}}/{{currency}}/{{bid-or-ask}}/'
  );
})

.run(function(exampleService) {
  exampleService.setRssUrl('/proxy/seasonvar.ru/rss.php');
});
