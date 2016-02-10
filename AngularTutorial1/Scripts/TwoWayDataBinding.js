/// <reference path="angular.min.js" />

var twoWayDataBindingApp = angular
                                   .module("twoWayDataBindingModule", [])
                                   .controller("twoWayDataBindingController", function ($scope) {
                                       $scope.message = "Hello Angular";
                                       $scope.employee = {
                                           firstName: "Ben",
                                           lastName: "Hastings",
                                           gender: "Male"
                                       };
                                   });