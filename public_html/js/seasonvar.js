app.controller('seasonvar', function($scope, $http, $q, $filter, $timeout) {
    (function updateSerials() {
        var rss = $http.get('/seasonvar'),
            config = $http.get('/seasonvar.json')
        ;
        $q.all([rss, config]).then(function(ajaxResults){
            var allSeriesInRss = ajaxResults[0].data;
            var seriesOfInterest = ajaxResults[1].data['series-of-interest'];
            var filtered = $filter('filter')(allSeriesInRss, function(value) {
                for (var i = 0; i < seriesOfInterest.length; i++) {
                    if (value.title[0].indexOf(seriesOfInterest[i]) === 0) return true;
                }
                return false;
            });
            $scope.serials = filtered.slice(0, 10);
        });
        $timeout(updateSerials, 1000*60);
    })();
});