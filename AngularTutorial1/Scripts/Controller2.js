/// <reference path="angular.min.js" />

var myAppController2 = angular.module("myModuleController2", []);

myAppController2.controller("myControllerController2", function ($scope) {
    var employee = {
        firstName: 'David',
        lastName: 'Hastings',
        gender: 'Male'
    };

    $scope.employee = employee;
});