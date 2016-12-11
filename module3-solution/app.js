(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItemsDirective)
  .constant('ApiBasePath',"https://davids-restaurant.herokuapp.com");

  function FoundItemsDirective() {
    var ddo = {
        templateUrl: 'foundItems.html',
        scope: {
          items: '<',
          onRemove: '&'
        },
        controller: FoundItemsDirectiveController,
        controllerAs: 'list',
        bindToController: true
    };

    return ddo;
  }

  function FoundItemsDirectiveController() {
    var list = this;

    list.emptyList = function() {
      return list.items !=null && list.items.length==0;
    };

  };

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var ctrl = this;

    ctrl.items = null;
    ctrl.searchTerm = "";

    ctrl.searchItem = function() {

      ctrl.items = [];
      if(ctrl.searchTerm!='') {
        MenuSearchService.getMatchedMenuItems(ctrl.searchTerm,ctrl.items);
      }

    };

    ctrl.removeItem = function(itemIndex) {
      ctrl.items.splice(itemIndex,1);
    };
  };

  MenuSearchService.$inject = ['$http','ApiBasePath'];
  function MenuSearchService($http,ApiBasePath) {
    var service = this;

    service.getMatchedMenuItems = function(description,foundItems) {
      var item, i;

      return $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json") //,

      }).then(function (result) {
        for(i = 0; i < result.data.menu_items.length; i++ ) {
          item = result.data.menu_items[i];
          if(item.description.indexOf(description)!=-1) {
            foundItems.push(item);
          }
        }
        return foundItems;
      });
    }

    service.removeItem = function(itemIndex) {
      foundItems.splice(itemIndex,1);
    };

    service.getFoundItems = function() {
      return foundItems;
    };
  };

}) ();
