var app = angular.module('myApp', ['ui.router']);
// socket.io
//const socket = io.connect();
const ipc = window.nodeRequire('electron').ipcRenderer

app.run(['$rootScope', function ($rootScope) {

}]);

app.config(["$stateProvider", function ($stateProvider) {
    $stateProvider
        .state("welcome", {
            url: '/welcome',
            templateUrl: 'welcome.html'
        }).state("map", {
            url: '/map',
            templateUrl: 'map.html'
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
    var temp = 1;
    $('.details').click(function () {
        if (temp == 1) {
            $('#d1').addClass('hide');
            $('#d2').removeClass('hide');
            $('.quit').removeClass('hide');
            $('#guide').animate({ "left": "0px" }, 500)
            temp = 2;
        } else {
            $('#d2').addClass('hide');
            $('#d1').removeClass('hide');
            $('.quit').addClass('hide');
            $('#guide').animate({ "left": "-200px" }, 500)
            temp = 1;
        }
    })
    $('#guide ul li').click(function () {
        $('#guide ul li').css('background', '#eee')
        $(this).css('background', 'yellow')
        //alert($(this).index());
        switch ($(this).index()) {
            case 0:
                $state.go('map');
                break;
            case 1:
                $state.go('introduce');
                break;
            case 2:
                $state.go('visit');
                break;
            case 3:
                $state.go('consult');
                break;
            case 4:
                $state.go('statistics');
                break;
            case 5:
                $state.go('photo');
                break;
            case 6:
                $state.go('demo');
                break;
            default:
                break;
        }
    })

    $('#quitBtn').click(function () {
        alert('即将退出app');
        ipc.send('closeApp');
    });

    // route to welcome page when init.
    $state.go('welcome');

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