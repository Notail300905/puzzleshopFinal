angular
.module('content.module', ['factory.module'])

//.config(function ($stateProvider) {
//    $stateProvider
//    .state('content.new', {
//        url: '/content',
//        views: {
//            'one@content.new': {
//                template: 'This is mavpa'
//            }
//        }
//    })
//})
.controller('contentCtrl', contentCtrl)


 


function contentCtrl($scope, itemTableFactory) {
   
    $scope.getItems = function () {
        itemTableFactory.getitemsList().success(function (data) {
            $scope.items = data;
            console.log($scope.items);
        }).error(function (data) {
            $scope.error = "An Error has occured while Loading items! " + data.ExceptionMessage;
        });
    }
    $scope.getItems();
    $scope.mode = 1;
};
