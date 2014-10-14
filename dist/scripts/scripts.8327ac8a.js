"use strict";angular.module("config",[]).constant("ENV",{name:"production",apiEndpoint:"https://pigion.herokuapp.com"}),angular.module("pigionWebApp",["config","ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","angularMoment","cfp.hotkeys","restangular","angularFileUpload","ui.bootstrap"]).config(["$routeProvider","$locationProvider",function(a,b){a.when("/",{templateUrl:"views/landing.html",controller:"LandingCtrl"}).when("/login",{templateUrl:"views/login.html",controller:"LoginCtrl"}).when("/dashboard",{templateUrl:"views/dashboard.html",controller:"DashboardCtrl"}).when("/:hashKey",{templateUrl:"views/download.html",controller:"DownloadCtrl"}).otherwise({redirectTo:"/"}),b.html5Mode(!0)}]),angular.module("pigionWebApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("pigionWebApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("pigionWebApp").controller("LoginCtrl",["$scope","Restangular","$location","UserService","ENV",function(a,b,c,d,e){console.log(e.apiEndpoint),b.configuration.baseUrl=e.apiEndpoint,a.login=function(){b.all("auth").all("api").all("authenticate").all("userpass").post({username:a.username,password:a.password}).then(function(a){b.configuration.defaultHeaders["X-Auth-Token"]=a.token,d.saveUserToken(a.token),c.path("/dashboard")},function(a){console.log("There was an error saving",a)})}}]),angular.module("pigionWebApp").controller("DashboardCtrl",["$scope","hotkeys","$upload","Restangular","UserService","ENV",function(a,b,c,d,e,f){function g(a){return function(b,c){return new Date(b[a])>new Date(c[a])}}d.configuration.baseUrl=f.apiEndpoint,d.configuration.defaultHeaders["X-Auth-Token"]=e.getUserToken(),a.files=[],d.all("files").getList().then(function(b){for(var c=0;c<b.length;c++){var d=b[c];console.log("file",d);var e=d.fileName.lastIndexOf("/")+1,f=d.fileName.lastIndexOf("."),g=f-e;d.name=d.fileName.substr(e,g),d.extension=d.fileName.substr(d.fileName.lastIndexOf(".")+1),d.password=!1,d.size=d.contentSize,d.expirationDate=d.expirationTime,a.files.push(d)}}),a.files.sort(g("expirationDate")),a.toggleCheatSheet=b.toggleCheatSheet,a.totalFileSize=200,a.userAllTimeFiles=32;var h=function(){function a(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return function(){return a()+a()+"-"+a()+"-"+a()+"-"+a()+"-"+a()+a()+a()}}();a.onFileSelect=function(b){for(var d=0;d<b.length;d++){var g=b[d],i=h(),j=new Date,k=5;j.setDate(j.getDate()+k);var l={name:g.name.substr(0,g.name.lastIndexOf(".")),extension:g.name.substr(g.name.lastIndexOf(".")+1),numDownloads:0,maxDownloads:-1,password:!1,expirationDate:j.toISOString(),size:g.size,newFile:!0,guid:i};a.files.unshift(l),a.upload=c.upload({url:f.apiEndpoint+"/files/upload",headers:{"X-Auth-Token":e.getUserToken()},file:g}).progress(function(b){console.log("percent: "+parseInt(100*b.loaded/b.total)),a.$broadcast("fileUploadPercent-"+i,parseInt(100*b.loaded/b.total))}).success(function(a){console.log(a)}).error(function(a){console.log("error",a)})}}}]),angular.module("pigionWebApp").controller("DownloadCtrl",["$scope",function(){}]),angular.module("pigionWebApp").controller("LandingCtrl",["$scope",function(){}]),angular.module("pigionWebApp").directive("userUpload",function(){return{templateUrl:"/scripts/directives/userUpload/userUpload.html",restrict:"E",scope:{file:"=file"},controller:["$scope",function(a){a.date=new Date(a.file.expirationDate),a.newFile=a.file.newFile,a.counter=a.newFile?0:100,a.dynamic=a.counter,a.doneUploading=!a.newFile,a.max=100,a.newFile&&a.$on("fileUploadPercent-"+a.file.guid,function(b,c){a.dynamic=c,100==a.dynamic&&(a.doneUploading=!0)})}],link:function(a,b,c){c.newFile}}}),angular.module("pigionWebApp").directive("passwordTool",function(){return{templateUrl:"/scripts/directives/passwordTool/passwordTool.html",restrict:"E",scope:{hasPassword:"=hasPassword"},controller:["$scope",function(a){var b=5;a.getNumPasswordBubbles=function(){return new Array(b)}}],link:function(){}}}),angular.module("pigionWebApp").service("UserService",["$cookieStore",function(a){var b;this.saveUserToken=function(c){b=c,a.put("userToken",c)},this.getUserToken=function(){if(b)return b;var c=a.get("userToken");return c?c:""}}]),angular.module("pigionWebApp").filter("bytes",function(){return function(a,b){if(isNaN(parseFloat(a))||!isFinite(a))return"-";"undefined"==typeof b&&(b=1);var c=["bytes","kB","MB","GB","TB","PB"],d=Math.floor(Math.log(a)/Math.log(1024));return(a/Math.pow(1024,Math.floor(d))).toFixed(b)+" "+c[d]}});