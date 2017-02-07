export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(false).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('hello', {
      url: '/',
      component: 'hello'
    })
    .state('login', {
      url: '/login',
      component: 'login'
    });
}
