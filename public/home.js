"use strict";
{

  let shop = {
    controller: function(itemService) {
      let vm = this;
        itemService.getItems().then(function(response){
          vm.items = response;
        });
    },
    template: `<p>hello world!<p>
    <div ng-repeat="item in $ctrl.items">
        <p>ID:  {{item.id}}</p>
        <p>NAME:  {{item.product}}</p>
        <p>PRICE:  {{item.price}}</p>
        <input type=button value=delete ng-click="$ctrl.items.splice($index,1)"/>
          <p>________________________</p>
    </div>`
  }
  shop.$inject = ["itemService"];

  angular
    .module("shopingCart")
    .component("shop", shop);
}
