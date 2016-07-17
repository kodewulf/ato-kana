(function(){

    angular
        .module("atoKana")
        .factory("DataService", DataService);

    function DataService(){

        var dataObj = {
            productsData: data.products,
            locationsData: data.locations,
            errorsData: data.errors
        };
      
        console.log(dataObj);
      
        return dataObj;      
      
    }

})();
