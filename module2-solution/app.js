(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService)

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var buyList = this;

    buyList.items = ShoppingListCheckOffService.getItems();

    buyList.removeItem = function (itemIndex) {
      ShoppingListCheckOffService.removeItem(itemIndex);
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtList = this;

    boughtList.items = ShoppingListCheckOffService.getBoughtItems();

    boughtList.addItem = function (itemName, itemQuantity) {
      ShoppingListCheckOffService.addItem(itemName, itemQuantity);
    };
  };

  function ShoppingListCheckOffService() {
    var service = this;

    var shoppingList = [
      { name: "Milk", quantity: "2" },
      { name: "Donuts", quantity: "200" },
      { name: "Cookies", quantity: "300" },
      { name: "Chocolate", quantity: "5" },
      { name: "Peanut Butter", quantity: "10" },
      { name: "Pepto Bismol", quantity: "20" },
      { name: "Pepto Bismol (Chocolate flavor)", quantity: "50" },
      { name: "Pepto Bismol (Cookie flavor)", quantity: "100" }];

    var boughtList = [];

    service.addItem = function(itemName, itemQuantity) {
      var item = {
        name: itemName,
        quantity: itemQuantity
      };
      boughtList.push(item);
    }

    service.removeItem = function(itemIndex) {
      service.addItem(shoppingList[itemIndex].name,shoppingList[itemIndex].quantity);
      shoppingList.splice(itemIndex,1);
    };

    service.getItems = function() {
      return shoppingList;
    };

    service.getBoughtItems = function() {
      return boughtList;
    };

  }
})();
