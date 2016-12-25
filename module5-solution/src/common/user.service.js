(function () {
  "use strict";

  angular.module('common')
    .service('UserService', UserService);

    function UserService() {
      var service = this;
      service.userinfo = null;
      service.info = null;


      service.saveInfo = function (user,favorite) {
        service.info = {};
        service.info.user = user;
        service.info.favorite = favorite;
      }

      service.getInfo  = function () {
        console.log('UserService.getInfo');
        return service.info;
      }

    }
})();
