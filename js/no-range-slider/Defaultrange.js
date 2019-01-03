(function($angular) {

    // Off we go!
    $angular.module('rangeApp', ['ngRangeSlider']).controller('IndexController', function IndexController($scope) {

        /**
         * @property range
         * @type {{from: number, to: number}}
         */
        $scope.range = { from: 100, to: 600 };

        /**
         * @property max
         * @type {Number}
         */
        $scope.max = 600;

    });

})(window.angular);