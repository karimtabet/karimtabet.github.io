app.controller("githubController", function($scope, $http, $timeout) {
    $timeout(function() {
        $scope.githubRepoList = [];
        $http.get('https://api.github.com/users/karimtabet/repos').success(function(data) {
            angular.forEach(data, function(value, index) {
                $scope.githubRepo = {};
                var forks_url = 'https://github.com/'
                + value.full_name + '/network';
                var stargazers_url = 'https://github.com/'
                + value.full_name + '/stargazers';
                $scope.githubRepo.full_name = value.full_name.replace('karimtabet/','');
                $scope.githubRepo.description = value.description;
                $scope.githubRepo.html_url = value.html_url;
                $scope.githubRepo.language = value.language;
                $scope.githubRepo.stargazers_count = value.stargazers_count;
                $scope.githubRepo.stargazers_url = stargazers_url;
                $scope.githubRepo.forks_count = value.forks_count;
                $scope.githubRepo.forks_url = forks_url;
                $scope.githubRepoList.push($scope.githubRepo);
            });
        }).error(function(error) {

        });
    });
});