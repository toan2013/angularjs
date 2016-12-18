(function () {
  'use strict';

  angular.module('Data')
    .controller('MenuItemController', MenuItemController);

    MenuItemController.$inject = ['menuItems'];
    function MenuItemController(menuItems) {
      var list = this;

      list.menuItems = menuItems.data.menu_items;
    }
})();
