/// <reference path="angular.min.js" />


var NgHideAndShowModule = angular.module("NgHideAndShowModule", []);

NgHideAndShowModule.controller("NgHideAndShowController", function ($scope) {
    var employees = [
        { name: "Ben", dateOfBirth: new Date("November 23, 1980"), gender: "Male", city: "London" },
        { name: "Sara", dateOfBirth: new Date("May 05, 1970"), gender: "Female", city: "Los Angles" },
        { name: "Mark", dateOfBirth: new Date("August 15, 1974"), gender: "Male", city: "New York" },
        { name: "Pam", dateOfBirth: new Date("October 27, 1979"), gender: "Female", city: "San Francisco" },
        { name: "Todd", dateOfBirth: new Date("December 30, 1983"), gender: "Male", city: "Hong Kong" }
    ];

    $scope.employees = employees;
})