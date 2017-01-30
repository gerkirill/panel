export default function exampleRoutes($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.when('', '/example');
  $urlRouterProvider.when('/', '/example');

  $stateProvider
    .state('example', {
      url: '/example',
      template:
        `<example
           url="/api/proxy/http://seasonvar.ru/rss.php"
           limit=10
           interval=5
         ></example>
         <banker></banker>`
    })
}