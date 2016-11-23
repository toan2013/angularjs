(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.inputItems = "";

  $scope.checkLunch = function() {
    if($scope.inputItems=="") {
      $scope.myColor = "color:red; padding: 5px; border: 1px solid red";
      $scope.myMessage = "Please enter data first"
    } else {
      $scope.myColor = "color:green; padding: 5px; border: 1px solid green";
      var items = $scope.inputItems.split(",");
      if(items.length > 3) {
        $scope.myMessage = "Too much!";
      } else {
        $scope.myMessage = "Enjoy!"
      };
      //if()
    };
  };
}

})();
