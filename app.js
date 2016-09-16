(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchController', LunchController);

LunchController.$inject = ['$scope'];
function LunchController($scope) {
  
  $scope.ctrlLunch = function () {
    var lunch_items = [];
	for (var i = 0; i < lunchContents.length; i++) {
		var item = lunchContents[i].trim();
		if (item.length > 0) {
			lunch_items.push(item);
			} else {
				$scope.lunch_items++;
			}
		}
    if (lunch_items.length == 0) {
		$scope.status=0;
		}

  	if (lunch_items.length <= 3) {
		$scope.status = 1;
		} else {
		$scope.status = 2;
		}

		$scope.lunchContents = lunch_items.join(', ');

	return;
  };
}

})();
