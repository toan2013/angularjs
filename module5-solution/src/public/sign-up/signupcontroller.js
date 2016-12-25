(function () {
  "use strict;"

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService','UserService']
function SignupController(MenuService,UserService) {
 var ctrl = this;
 ctrl.user = {
   firstname: '',
   lastname: '',
   email: '',
   phone: '',
   favorite: ""
 };
 ctrl.item = null;
 ctrl.error = false;
 ctrl.favorite = null;

 ctrl.submit = function () {
   ctrl.completed = false;
   ctrl.error = false;
   return MenuService.checkMenuItem(ctrl.user.favorite)
   .then(function (response){
     ctrl.favorite = response.data;
   },function errorCallback(response) {
     console.log('chekMenuItem returns error');
     ctrl.favorite = null;
   })
   .then(function(response){
     console.log("ctrl.favorite",ctrl.favorite);
     if(ctrl.favorite!=null) {
       ctrl.error = false;
       UserService.saveInfo(ctrl.user,ctrl.favorite);
     } else {
       ctrl.error = true;
     }
     ctrl.completed = true;

   });

 };
}

})();
