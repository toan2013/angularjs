(function () {
  'use strict';

  angular.module('MenuApp')
    .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

      // Redirect to home page if not other URL matches
      $urlRouterProvider.otherwise("/");

      // *** Set up UI states ***
      $stateProvider

      // Home page
      .state('home', {
        url: '/',
        templateUrl: 'src/menuapp/templates/home.template.html'
      })

      .state('categories', {
        url: '/categories',
        templateUrl: '/src/menuapp/templates/main-category.template.html',
        controller: 'CategoriesController as categoryList',
        resolve: {
          categories: ['MenuDataService', function(MenuDataService) {
            console.log('state.categories');
            return MenuDataService.getAllCategories();
          }]
        }
      })

      .state('items', {
        url: '/categories/{categoryShortName}',
        templateUrl: '/src/menuapp/templates/main-menu-items.template.html',
        controller: 'MenuItemController as menuItemList',
        resolve: {
          menuItems: ['$stateParams','MenuDataService',
                      function($stateParams, MenuDataService) {
                        return  MenuDataService.getItemsForCategory($stateParams.categoryShortName);
                    }]
        }
      })

    }
})();
