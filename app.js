(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchController', LunchController);

LunchController.$inject = ['$scope'];

function LunchController($scope) {
  $scope.menues="";
  $scope.message="";	
  $scope.ctrlLunch = function () {
    if($scope.menues){
    	var sep=",";
    	var menuItems=$scope.menues.split(sep);
    	var counter=0;
    	for (var i=0; i<menuItems.length; i++){
    		if(!(menuItems[i].length==0||!menuItems[i].trim())){
    			counter+=1;
    		}
    	}
    	if(counter>3){
    		$scope.message="Too much!";
    	}else{
    		$scope.message="Enjoy!";
    	}
    }
    else{
    	$scope.message="Please enter data first";
    }
  };
 };   

    
})();
