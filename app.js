(function(){
'use strict'

angular.module('NarrowItDownApp',[])
.controller('NarrowItDownController',NarrowItDownController )
.service('MenuSearchService',MenuSearchService)
.directive('foundItems',FoundItems);

function FoundItems(){
  var ddo={
    scope:{
      menu:'=fndItems',
      onRemove:'&',
      items:'<'
    },
    templateUrl:'items.html'
  };
  return ddo;
}

//controller
NarrowItDownController.$inject=['MenuSearchService'];
function NarrowItDownController (MenuSearchService){
  var menu=this;
  menu.order="";
  var array=[];

  menu.search=function(order){
    var promise=MenuSearchService.getMatchedMenuItems();
    promise.then(function(result){
    for(var i=0;i<result.data.menu_items.length;i++){
        if (result.data.menu_items[i].description.toLowerCase().indexOf(order) !== -1){
          var item={
            short_name:result.data.menu_items[i].short_name,
            name:result.data.menu_items[i].name,
            description:result.data.menu_items[i].description
          };
          array.push(item);
        }
    }
    if(order===undefined||array.length==0){
      menu.warning="Nothing found";
    }
  menu.items=array;
  console.log(order);
  }).catch(function(error){
    console.log("something gone terribly wrong!!");
  });


};

menu.removeItem=function(index){
  array.splice(index,1);
};
}

//service
MenuSearchService.$inject=['$http']
function MenuSearchService($http){
  var service=this;
 service.getMatchedMenuItems=function(){
   var response=$http({
     method:"GET",
     url:"https://davids-restaurant.herokuapp.com/menu_items.json"
   });
   return response;
 };

}


})();
