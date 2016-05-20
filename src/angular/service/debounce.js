(function () {
  'use strict';

  angular.module('nx.widget')
    .factory('nxDebounce', [function () {
      var timer = null;
      return function (inCallback, inDebounce, inContext, inArgs) {
        var debounce = inDebounce || 100;
        clearTimeout(timer);
        timer = setTimeout(function () {   //Set timeout
          inCallback.apply(inContext, inArgs);
        }, debounce);
      }
    }]);


})();
