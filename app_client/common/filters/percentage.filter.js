(function() {

    angular
        .module('darkskyApp')
        .filter('percentage', percentageFilter);

    function percentageFilter() {
        return function(input){
            
            var output = input * 100;
            output += "%";
            
            return output;
            
        };
    };
})();