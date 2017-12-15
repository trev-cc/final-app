(function() {

  angular
    .module('darkskyApp')
    .controller('homeCtrl', homeCtrl);

  homeCtrl.$inject = ['$scope', `SelectedData`];

  function homeCtrl($scope, SelectedData) {
    // Nasty IE9 redirect hack (not recommended)
    /*
    if (window.location.pathname !== '/') {
      window.location.href = '/#' + window.location.pathname;
    }*/
    var hc = this;
    console.log(window.location);
    
    hc.content = "Airplane Data";
    
    hc.selectedDepartureICAO = "";
    hc.selectedArrivalICAO = "";
    hc.selectedWeight = "";
    
    //check selected Departure
    if(SelectedData.selectedDepartureICAO !== null){
      hc.selectedDepartureICAO = SelectedData.selectedDepartureICAO;
    }
    
    //check selected Arrival
    if(SelectedData.selectedArrivalICAO !== null){
      hc.selectedArrivalICAO = SelectedData.selectedArrivalICAO;
    }
    
    //check selected weight
    if(SelectedData.selectedWeight !== null){
      hc.selectedWeight = SelectedData.selectedWeight;
    }      
  }

})();
