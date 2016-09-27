(function () {
'use strict';

var items=[
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "Chocolate",
    quantity: "5"
  },
  {
    name: "Bread",
    quantity: "2"
  },
  {
    name: "Cheese",
    quantity: "1"
  }
];

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var itemList = this;

  itemList.items = ShoppingListCheckOffService.getItems();
  itemList.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.removeItem(itemIndex);
  };  

  itemList.empty = function () {
    return itemList.items.length === 0;
  };
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtList = this;

  boughtList.items = ShoppingListCheckOffService.boughtItems();

  boughtList.empty = function () {
    return boughtList.items.length === 0;
  };
  
}


function ShoppingListCheckOffService() {
  var service = this;
  var tobuy_items = items
  var bought_items=[] ;
  
  // List of shopping items
  

  service.removeItem = function (itemsIndex) {
    bought_items.push(tobuy_items[itemsIndex]);
    tobuy_items.splice(itemsIndex, 1);
  };

 
  service.getItems = function () {
    return tobuy_items;
  };

   service.boughtItems = function () {
    return bought_items;
  };
}

})();
