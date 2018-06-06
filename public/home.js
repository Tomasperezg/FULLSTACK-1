"use strict";
{
  let home = {
  let getAllItems = () => {
    return $http({
      url: "/api/items",
      method: "GET"
    }).then((response) => {
      return response.itmes;
    })
  }
}
  angular
  .service("home", home);
}
