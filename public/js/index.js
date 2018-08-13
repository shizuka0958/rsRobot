var app = angular.module('myApp', ['ui.router']);
// socket.io
//const socket = io.connect();

app.run(['$rootScope', function ($rootScope) {
  
}]);

app.config(["$stateProvider", function ($stateProvider) {
    $stateProvider
        .state("welcome", { 
            url: '/welcome',    
            templateUrl: 'welcome.html'
        }).state("introduce", { 
            url: '/introduce',  
            templateUrl: 'introduce.html'
        }).state("visit", { 
            url: '/visit',   
            templateUrl: 'visit.html'
        }).state("consult", { 
            url: '/consult',   
            templateUrl: 'consult.html'
        }).state("statistics", { 
            url: '/statistics',   
            templateUrl: 'statistics.html'
        }).state("photo", { 
            url: '/photo',   
            templateUrl: 'photo.html'
        }).state("demo", { 
            url: '/demo',  
            templateUrl: 'demo.html'
        })
}]);

app.controller('indexController', ['$scope', '$http', '$rootScope', '$state', function ($scope, $http, $rootScope, $state) {

    //initialize

    $state.go('welcome'); //for windows :cannot location to faceSearch default in electron file mode

    // receive socket.io msg from server
   // socket.on('connect', function (data) {
        //init
        // socket.emit('user query');
        // socket.emit('emp query');
        // socket.emit('group query');
        // socket.emit('dev query');

        // //emp
        // socket.on('emp query', function (data) {
        //     console.log("[RCV] emp query=", data);
        //     if (data.err == 0) {
        //         $rootScope.empList = data.result;
        //     }else{
        //         $rootScope.empList = [];
        //     }
        //     $scope.$broadcast('emp query', data);
        // });
   // });

}])