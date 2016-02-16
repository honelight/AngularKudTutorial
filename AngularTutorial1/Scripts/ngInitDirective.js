/// <reference path="angular.min.js" />

var ngInitDirectiveModule = angular.module("ngInitDirectiveModule", []);
ngInitDirectiveModule.controller("ngInitDirectiveController", function ($scope) {
    employees = [
            { name: 'Ben', gender: 'Male', salary: '55000.788' },
            { name: 'Sara', gender: 'Female', salary: '68000' },
            { name: 'Mark', gender: 'Male', salary: '57000' },
            { name: 'Pam', gender: 'Female', salary: '53000' },
            { name: 'Todd', gender: 'Male', salary: '60000' }
    ]

    $scope.employees = employees
});