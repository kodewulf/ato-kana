(function(){

    angular
        .module("atoKana")
        .controller("kanaCtrl", KanaController);
  
    KanaController.$inject = ['DataService'];  

    function KanaController(DataService){
        var vm = this;
      
        vm.search = {
            products: "",
            locations: "",
            error: ""
        }
        
        vm.results = {
            products: DataService.productsData,
            locations: DataService.locationsData,
            errors: DataService.errorsData
        }

        console.table(vm.results.errors);
        
        vm.searchProducts = searchProducts;
        vm.searchLocations = searchLocations;
        vm.searchErrors = searchErrors;
      
        function searchProducts() {
          var product = vm.search.products;
          console.log("product: " + product);
        }
      
        function searchLocations() {
          var location = vm.search.locations;
          console.log("location: " + location);
        }
      
        function searchErrors() {
          var error = vm.search.errors;
          console.log("error: " + error);
        }
    }

})();