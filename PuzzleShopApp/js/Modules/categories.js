angular
.module('categories.module', ['factory.module',])

.controller('categoryCtrl', categoryCtrl)

function categoryCtrl($scope, itemTableFactory, $rootScope) {
    
    $scope.getCategory = function () {
        itemTableFactory.getcategorylist().success(function (data) {
            $scope.items2 = data;
            //console.log($scope.items);
        }).error(function (data) {
            $scope.error = "An Error has occured while Loading items! " + data.ExceptionMessage;
        });
    }

    $scope.getCategoryId = function () {
        $scope.itemId = this.item;
        itemTableFactory.getsubcategory($scope.itemId.Id).success(function (data) {
            $rootScope.CategoryItems = data;
            //console.log($scope.CategoryItems);
        }).error(function (data) {
            $scope.error = "An Error has occured while Loading items! " + data.ExceptionMessage;
        });
    }

     //get Subcategory Items
    $scope.getSubItems = function (item2) {
        $scope.itemId = item2;
        itemTableFactory.getsubItems($scope.itemId).success(function (data) {
            $rootScope.CategoryItems2 = data;
            console.log(data);
        }).error(function (data) {
            $scope.error = "An Error has occured while Loading items! " + data.ExceptionMessage;
        });
    }

    $scope.getCategory();
    $scope.mode = 1;
};
