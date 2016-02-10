/// <reference path="angular.min.js" />

var handlingEventsApp = angular.module("handlingEventsModule", []);

handlingEventsApp.controller("handlingEventsController", function ($scope) {
    $scope.techonolgies = [
        { name: "C#", likes: 0, dislikes: 0 },
        { name: "ASP.NET", likes: 0, dislikes: 0 },
        { name: "SQL Server", likes: 0, dislikes: 0 },
        { name: "AngularJS", likes: 0, dislikes: 0 }
    ];

    $scope.incrementLikes = function (technology) {
        technology.likes += 1;
    }

    $scope.incrementDislikes = function (technology) {
        technology.dislikes += 1;
    }
})