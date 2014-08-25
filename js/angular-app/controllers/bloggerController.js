app.controller("bloggerController", function($scope, $http, $timeout) {
    $timeout(function() {
        $scope.blogList = [];
        // $http.get('http://www.blogger.com/feeds/657776245522119968/posts/default').success(function(data) {
        //     // angular.forEach(data, function(value, index) {
        //     //     $scope.blogItem = {};
        //     //     console.log(value);
        //     //     // $scope.githubRepo.full_name = value.full_name.replace('karimtabet/','');
        //     //     // $scope.githubRepo.description = value.description;
        //     //     // $scope.githubRepo.html_url = value.html_url;
        //     //     // $scope.githubRepo.language = value.language;
        //     //     // $scope.githubRepo.stargazers_count = value.stargazers_count;
        //     //     // $scope.githubRepo.stargazers_url = stargazers_url;
        //     //     // $scope.githubRepo.forks_count = value.forks_count;
        //     //     // $scope.githubRepo.forks_url = forks_url;
        //     //     // $scope.githubRepoList.push($scope.githubRepo);
        //     // });
        // }).error(function(error) {

        // });
    });
});