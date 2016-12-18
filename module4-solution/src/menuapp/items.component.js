(function () {
  'use strict';

  angular.module('Data')
    .component('menuItemList', {
      templateUrl: 'src/menuapp/templates/menu.items.html',
      bindings: {
        itemlist: '<' // should not use upper case like cammel notation here
                      // since the aangular converts automatically to lower
                      // case ine the template :-(s
      }
      // use default controller $ctrl
      // should be called after route state function
    });
})();
