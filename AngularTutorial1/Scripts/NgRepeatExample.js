/// <reference path="angular.min.js" />

var ngRepeatExampleApp = angular.module("ngRepeatExampleModule", [])
                                .controller("ngRepeatExampleController", function ($scope) {
                                    $scope.employees = [
                                        {firstName:"Ben", lastName:"Hasting",gender:"Male", salary:55000},
                                        {firstName:"Sara", lastName:"Paul",gender:"Female", salary:68000},
                                        { firstName: "Mark", lastName: "Holland", gender: "Male", salary: 57000 },
                                        { firstName: "Pam", lastName: "Macintosh", gender: "Female", salary: 53000 },
                                        {firstName:"Todd", lastName:"Barber",gender:"Male", salary:60000}
                                    ];

                                    $scope.countries = [
                                        {
                                            countryName: "UK", cities: [{ name: "London" },
                                                                        { name: "London" },
                                                                        { name: "London" }]
                                        },
                                        {
                                            countryName: "USA", cities: [{ name: "Los Angeles" },
                                                                        { name: "Chicago" },
                                                                        { name: "Houston" }]
                                        },
                                        {
                                            countryName: "India", cities: [{ name: "Hyderbad" },
                                                                        { name: "Chennai" },
                                                                        { name: "Mumbai" }]
                                        }
                                    ];
                                });