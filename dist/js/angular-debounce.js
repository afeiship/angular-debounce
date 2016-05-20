(function () {
  'use strict';

  angular.module('nx.widget', []);

})();

(function () {
  'use strict';

  angular.module('nx.widget')
    .factory('nxDebounce', ['$timeout',function ($timeout) {
      var timer = null;
      return function (inCallback, inDebounce, inContext, inArgs) {
        var debounce = inDebounce || 100;
        $timeout.cancel(timer);
        timer = $timeout(function () {   //Set timeout
          inCallback.apply(inContext, inArgs);
        }, debounce);
      }
    }]);


})();
