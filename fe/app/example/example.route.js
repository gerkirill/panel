export default function exampleRoutes($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.when('', '/example');
  $urlRouterProvider.when('/', '/example');

  $stateProvider
    .state('example', {
      url: '/example',
      template:
        `<example limit=1000 interval=60></example>
         <banker interval=60></banker>
         <kurs-com-ua interval=60></kurs-com-ua>`
    })
}
