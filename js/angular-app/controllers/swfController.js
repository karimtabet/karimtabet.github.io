app.controller("swfController", function($scope, $http, $timeout) {
    $timeout(function() {
        $scope.swfList = [];
        $http.get('json/swf-data.json').success(function(data) {
            angular.forEach(data, function(value, index) {
                $scope.swfItem = {};
                $scope.swfItem.modal_id = value.modal_id;
                $scope.swfItem.full_name = value.name;
                $scope.swfItem.description = value.description;
                $scope.swfItem.path = value.path;
                $scope.swfItem.img = value.img;
                $scope.swfItem.award = value.award;
                $scope.swfItem.date = value.date;
                $scope.swfItem.blurb = value.blurb;
                $scope.swfItem.width = value.width;
                $scope.swfItem.height = value.height;
                $scope.swfList.push($scope.swfItem);
            });
        }).error(function(error) {

        });
    });
});