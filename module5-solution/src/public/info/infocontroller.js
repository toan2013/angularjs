(function () {
  "use strict;"

  angular.module('public')
    .controller('InfoController',InfoController);

    InfoController.$inject = ['ApiPath','userInfo'];
    function InfoController(ApiPath,userInfo) {
        var ctrl = this;
        console.log('InfoController, userInfo', userInfo);
        ctrl.basePath = ApiPath;
        ctrl.userInfo = userInfo;
    }

})();
