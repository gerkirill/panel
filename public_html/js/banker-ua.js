app.controller('bankerUa', function($scope, $http, $q, $filter, $timeout) {
    (function updateRates() {
        var bid = $http.get('/banker-ua/bid'),
            ask = $http.get('/banker-ua/ask')
        ;
        $q.all([bid, ask]).then(function(ajaxResults){
            $scope.bidLines = ajaxResults[0].data;
            $scope.askLines = ajaxResults[1].data;
        });
        $timeout(updateRates, 1000*60);
    })();
});
