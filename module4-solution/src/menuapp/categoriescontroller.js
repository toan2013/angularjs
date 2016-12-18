(function () {
  'use strict';

  angular.module('Data')
    .controller('CategoriesController', CategoriesController);

    CategoriesController.$inject = ['categories'];
    function CategoriesController(categories) {

      console.log(categories);
      var list = this;
      list.categories = categories.data;

    }
})();
