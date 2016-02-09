/// <reference path="angular.min.js" />

var ngSrcDirectiveApp = angular.module("ngSrcDirectiveModule", []);

ngSrcDirectiveApp.controller("ngSrcDirectiveController", function ($scope) {
    var country = {
        name: "USA",
        capital: "Washington DC",
        flag: "image/us-flag.gif"
    };

    $scope.country = country;
});