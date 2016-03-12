var IdimsApp = IdimsApp || {};

// create all modules in the application for later user so we can add service
// on the fly and still attach it to existing modules
IdimsApp.Services = angular.module('idimsApp.services', []);

IdimsApp.Directives = angular.module('idimsApp.directives', []);

IdimsApp.Controllers = angular.module('idimsApp.controllers', []);




