(function () {
  'use strict';

  angular.module('Data')
    .service('MenuDataService', MenuDataService)
    .constant('ApiBasePath','https://davids-restaurant.herokuapp.com');

    MenuDataService.$inject = ['$http','ApiBasePath']
    function MenuDataService($http, ApiBasePath) {
      var service = this;
      var categoryList = [];
      var menuItemList = [];

      service.getAllCategories = function () {
        var promise = $http({
          method: "GET",
          url: (ApiBasePath + "/categories.json")
        });
        promise.then(function (result) {
          categoryList = result.data;
          console.log('promise.then=' + categoryList);
          return categoryList;
        })
        .catch(function (error) {
          console.log("Error while retrieving the data.");
        });
        return promise;
      };

      service.getItemsForCategory = function(categoryShortName) {
        var promise = $http({
          method: "GET",
          url: (ApiBasePath + "/menu_items.json"),
          params: {category: categoryShortName}
        });
        promise.then(function (result) {
          menuItemList = result.data;
          console.log(menuItemList);
          return menuItemList;
        })
        .catch(function (error) {
          console.log("Error while retrieving the data.");
        });
        return promise;
      };

    }

})();
