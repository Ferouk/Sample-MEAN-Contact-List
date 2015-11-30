var app = angular.module("myApp",[]);

app.controller('appCtrl', ["$scope", "$http", function($scope, $http){
  var onlyNumbers = /^\d+$/;

  var refresh = function(){
    $http.get('/contacts').success(function(res){
      $scope.contactList = res;
      $scope.contact = "";
    });
  };
  refresh();
  $scope.add = function(){

    if($scope.contact.name === "" || $scope.contact.number ==="" || !onlyNumbers.test($scope.contact.number)){
      refresh();
    }else{
    $http.post('/contacts', $scope.contact).success(function(res){
      refresh();
    });
    }
  };
  $scope.remove = function(id){
    $http.delete('/contact/'+id).success(function(res){
      refresh();
    });
  };
  $scope.edit = function(id){
    $http.get('contact/'+id).success(function(res){
      $scope.editMode = true;
      $scope.contact = res;
    });
  };
  $scope.update = function(){
    var current = [];
    var id = '';

    current = $scope.contact;
    id = current._id;
    if($scope.contact.name === "" || $scope.contact.number ==="" || !onlyNumbers.test($scope.contact.number)){
      refresh();
    }else{

    $http.put('contact/'+id, current).success(function(res){
      $scope.editMode = false;
      refresh();
    });
  }
  };



}]);
