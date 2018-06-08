"use strict";
{

  let shop = {
    controller: function(itemService) {
      let vm = this;
        itemService.getItems().then(function(response){
          vm.items = response.data;
        });
    },
    template: `<p>hello world!<p>
    <div ng-repeat="item in $ctrl.items">
        <p>{{item.id}}</p>
        <p>{{item.product}}</p>
    </div>`
  }
  shop.$inject = ["itemService"];

  angular
    .module("shopingCart")
    .component("shop", shop);
}
