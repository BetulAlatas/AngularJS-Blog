var app = angular.module("myApp" , ["ui.router"]);

app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state("/",{
            url:'/',
            templateUrl:"Partials/home.html"
        })
        .state("about",{
            url:'/about',
            templateUrl:"Partials/about.html"
        })
        .state("contact",{
            url:'/contact',
            templateUrl:"Partials/contact.html"
        })
        .state("detail",{
            url:'/detail/id',
            templateUrl:"Partials/detail.html",
            controller :"PostController",
            params: {id: null}
        })
        .state("newblog",{
            url:'/newblog',
            templateUrl:"Partials/newblog.html",
            controller :"myCtrl"

    });
});

app.run(function ($rootScope, $state) {
    $rootScope.$state = $state;
});

app.factory("PostFactory",function () {

    var obj = {
        posts : [
            {
                "title" : "Post 1",
                "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "like": 100,
                "author": "Betul metin",
                "comments" : [
                    {"comment":"Yorum1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam", "like": 10},
                    {"comment":"Yorum2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam", "like": 40},
                    {"comment":"Yorum3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam", "like": 25}
                ]
            },
            {
                "title" : "Post 2",
                "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum ",
                "like": 200,
                "author": "Betul metin",
                "comments" : [
                    {"comment":"Yorum4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam", "like": 19},
                    {"comment":"Yorum5 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam", "like": 20},
                    {"comment":"Yorum6 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam", "like": 52}
                ]
            },
            {
                "title" : "Post 3",
                "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "like": 300,
                "author": "Betul metin",
                "comments" : [
                    {"comment":"Yorum7 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam", "like": 30},
                    {"comment":"Yorum8 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam", "like": 14},
                    {"comment":"Yorum9 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam", "like": 25}
                ]
            }
        ]
    };

    return obj;
});

app.controller("myCtrl" , function ($scope , PostFactory) {

    $scope.alert = false;
    $scope.posts = PostFactory.posts;

    $scope.NewBlog = function () {
        $scope.posts.push({
            "title": $scope.title,
            "text": $scope.text,
            "like": 0,
            "author": $scope.author,
            "comments": []
        });

        $scope.alert = true;
    };
});

app.controller("PostController" , function ($scope , PostFactory , $stateParams) {


$scope.posts = PostFactory.posts[$stateParams.id];
console.log(PostFactory.posts[$stateParams.id]);

$scope.PostComment=function () {
    $scope.posts.comments.push({
        "comment": $scope.comment,
        "like": 0
    })
$scope.comment= "";
};

$scope.LikeComment=function (comment) {
 comment.like += 1;
};
});

