(function () {
  'use strict';

  angular.module('Data')
    .component('categoryList', {
      templateUrl: 'src/menuapp/templates/categories.html',
      bindings: {
        categories: '<'
      }
      // use default controller $ctrl
      // should be called after route state function
    });
})();
