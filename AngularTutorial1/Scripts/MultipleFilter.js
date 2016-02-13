/// <reference path="angular.min.js" />

var multiplerFilterApp = angular.module("multipleFilterModule", []);

multiplerFilterApp.controller("multipleFilterController", function ($scope) {
    var employees = [
        { firstName: "Ben", dateOfBirth: new Date("November 23, 1980"), gender: "Male", city: "London" },
        { firstName: "Sara", dateOfBirth: new Date("May 05, 1970"), gender: "Female", city: "Los Angles" },
        { firstName: "Mark", dateOfBirth: new Date("August 15, 1974"), gender: "Male", city: "New York" },
        { firstName: "Pam", dateOfBirth: new Date("October 27, 1979"), gender: "Female", city: "San Francisco" },
        { firstName: "Todd", dateOfBirth: new Date("December 30, 1983"), gender: "Male", city: "Hong Kong" }
    ];

    $scope.employees = employees;

    $scope.search = function (item) {
        if ($scope.searchCityAndname == undefined) {
            return true;
        }
        else {
            if (item.firstName.toLowerCase().indexOf($scope.searchCityAndname.toLowerCase()) != -1 ||
                 item.city.toLowerCase().indexOf($scope.searchCityAndname.toLowerCase()) != -1) {
                return true;
            }
            else {
                return false;
            }
        }
    }

})
