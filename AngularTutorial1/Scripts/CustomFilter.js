/// <reference path="angular.min.js" />

var customFilterModule = angular.module("customFilterModule", []);


customFilterModule.controller("customFilterController", function ($scope) {
    var employees = [
        { name: "Ben", gender: 1, city: "London" },
        { name: "Sara", gender: 2, city: "Los Angles" },
        { name: "Mark", gender: 1, city: "New York" },
        { name: "Pam", gender: 2, city: "San Francisco" },
        { name: "Todd", gender: 3, city: "Hong Kong" }
    ];

    $scope.employees = employees;
    
})

