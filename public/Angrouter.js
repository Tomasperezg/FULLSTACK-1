"use strict";
{
  angular
    .module("shopingCart")
    .config(($routeProvider) => {
      $routeProvider
      .when("/home", {
        template: "<home></home>"
      })
    });
}
