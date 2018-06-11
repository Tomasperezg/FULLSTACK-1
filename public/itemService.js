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
      return items;
    });
  };
  const addItems = (newItems) => {
    return $http({
      url: "/api/items",
      method: "POST",
      data: newItems
    }).then((response) => {
      return response.data;
    });
  };
  return {
     getItems
     // addItems
   };
 }
   itemService.addItems({id:8,product:"tapioca",price: 3.22, quantity:2});
   itemService.$inject = ["$http"];

  angular
    .module("shopingCart")
    .factory("itemService", itemService);
}
