(function () {
    'use strict';
    angular
    .module('puzzle', ['ui.router', 'content.module', 'categories.module'])
    .config(uiRouterConfig);
   

    function uiRouterConfig($stateProvider, $urlRouterProvider) {
        
        $urlRouterProvider.otherwise('/');
        $stateProvider
        .state('home', {
            url: '/',
            views: {
                'content': {
                    templateUrl: 'Views/items.html',
                    controller: 'contentCtrl'
                },
                'login': {
                    templateUrl:'Views/login.html'
                },
                'cart': {
                    templateUrl:'Views/cart.html'
                },
                'items': {
                    templateUrl: 'Views/content.html',
                    controller: 'categoryCtrl'
                },
            }
            
        })
        .state('category', {
            url: '/:category/:subcategory',
            views: {
                'items': {
                    templateUrl: 'Views/content.html',
                    controller: 'categoryCtrl'
                },
                 'content': {
                     templateUrl: 'Views/SubCategory.html',
                     controller: 'categoryCtrl'
                 },
                 //'items2': {
                 //    templateUrl: 'Views/SubCategory.html',
                 //    controller: 'categoryCtrl'
                 //},
            }
            
        })
         .state('category.subcategory', {
             url: '/:subcategory',
             views: {
                 'items2': {
                     templateUrl: 'Views/SubCategory.html',
                     controller: 'categoryCtrl'
                 },
                
             }
         })
    }
    //Modal
    //$(document).ready(function () {
    //    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    //    $('.modal-trigger').leanModal({
    //        dismissible: true, // Modal can be dismissed by clicking outside of the modal
    //        opacity: .5, // Opacity of modal background
    //        in_duration: 300, // Transition in duration
    //        out_duration: 200, // Transition out duration
    //    });
    //});

    ////Mobile-Menu
    //$(document).ready(function () { $(".button-collapse").sideNav(); })

    ////PicturesZoom
    //$(document).ready(function () {
    //    $('.materialboxed').materialbox();
    //});

    //$('.dropdown-button').dropdown({
    //    inDuration: 300,
    //    outDuration: 225,
    //    constrain_width: false, // Does not change width of dropdown to that of the activator
    //    hover: true, // Activate on hover
    //    gutter: 0, // Spacing from edge
    //    belowOrigin: false // Displays dropdown below the button
    //}
 //);
})();




