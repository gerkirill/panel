app.controller('seasonvar', function($scope, $http, $timeout) {
    (function updateSerials() {
        $http({
            method: 'GET',
            url: '/seasonvar'
        }).success(function(data, status) {
            $scope.serials = data.slice(0, 10);
        });
        $timeout(updateSerials, 1000*60);
    })();
});