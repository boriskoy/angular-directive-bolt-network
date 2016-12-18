app.directive('program-listing', function() {
  return {
    restrict: 'E',
    scope: {
      listing: '=',
    },
    templateUrl: 'js/directives/program-listing.html',
};
});
