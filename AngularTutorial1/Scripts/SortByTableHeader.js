﻿/// <reference path="angular.min.js" />


var sortingDataApp = angular.module("sortingDataModule", []);

sortingDataApp.controller("sortingDataController", function ($scope) {
    var employees = [
                        { firstName: "Ben", dateOfBirth: new Date("November 23, 1980"), gender: "Male", salary: 55000.788 },
                        { firstName: "Sara", dateOfBirth: new Date("May 05, 1970"), gender: "Female", salary: 68000 },
                        { firstName: "Mark", dateOfBirth: new Date("August 15, 1974"), gender: "Male", salary: 57000 },
                        { firstName: "Pam", dateOfBirth: new Date("October 27, 1979"), gender: "Female", salary: 53000 },
                        { firstName: "Todd", dateOfBirth: new Date("December 30, 1983"), gender: "Male", salary: 60000 }
    ];

    $scope.employees = employees;
    $scope.parts = "firstName";
    $scope.reverseSort = false;

    $scope.sortData = function (columnName) {
        if ($scope.parts == columnName) {
            $scope.reverseSort = !$scope.reverseSort;
        }
        else {
            $scope.reverseSort = false;
        }
        $scope.parts = columnName;       
    }


    //$scope.getSortData = function (column) {
    //    if ($scope.parts == column) {
    //        return $scope.reverseSort;
    //    }
    //}
});