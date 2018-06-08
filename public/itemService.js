"use strict";
{
  function itemService($http) {
    let itmes = [];
  const getItems = () => {
    let items = [];
    return $http({
      method: "GET",
      url: "/items"
    }).then(function(response){
      // console.log(response);
      items = response.data;
      return items
    });
  };
  return{
     getItems
   };
 }
   itemService.$inject = ["http"];

  angular
    .module("app")
    .factory("itemService", itemService);
}
