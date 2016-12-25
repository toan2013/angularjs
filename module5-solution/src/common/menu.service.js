(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  service.foundItem = null;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      console.log("getMenuItems", response.data);

      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      console.log("getMenuItems", response.data);

      return response.data;
    });
  };

  service.getAllMenuItems = function() {
    console.log("getAllMenuItems");
    return $http.get(ApiPath + '/menu_items.json')
      .then(function successCallback(response) {
      console.log("getAllMenuItems-response");
        return response.data;
      },function errorCallback(response) {
        console.log("getAllMenuItems-get error");
    }).catch(function (error) {
      return error;
    });
  };

  service.checkMenuItem = function(short_name) {
    var promise = $http.get(ApiPath + '/menu_items/' + short_name + '.json');
    console.log("promise.then-before");
    promise.then(function successCallback(response) {
      console.log("successCallback, response.data",response.data);

      return response.data;
    },function errorCallback(response) {
      console.log("errorCallback");
      return null;
    }).catch(function (error) {
      console.log("catch error");

    return null;
    });
    console.log("return promise");
    return promise;
  };

}

})();
