var app = angular.module("movieApp", ["ngRoute"]);

app.config(function($routeProvider){

$routeProvider

.when("/",{
templateUrl:"views/home.html"
})

.when("/search",{
templateUrl:"views/search.html",
controller:"movieController"
})

.otherwise({
redirectTo:"/"
});

});

app.controller("movieController", function($scope, $http){

$scope.movies = [];

$scope.searchMovie = function(){

$http({
method:"GET",
url:"data/movies.json"

})

.then(function(response){

if(response.data){

$scope.movies =
response.data;

}

else{

$scope.movies=[];

alert("No movies found");

}

});

};

});