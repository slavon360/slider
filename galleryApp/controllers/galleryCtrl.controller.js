(function(){
	angular.module('galleryApp')
	 .controller('galleryCtrl',galleryCtrl);
   function galleryCtrl($scope,imgGetter,$timeout){
      $scope.pageState={
         imageClicked:false
      }

      $scope.closePopUp=function(){
          $scope.pageState.imageClicked=false;        
      }

      $scope.chooseImage=function(index){
         $scope.images.map(function(item,ind,array){
            item.position=ind*100-(index*100);
            item.active=false;
            return item;
         })
         $scope.pageState.imageClicked=true;
         $scope.images[index].active=true;
        
      }

      $scope.pushLeft=function(){
        imgGetter.pushLeft($scope.images);
      }

      $scope.pushRight=function(){
        imgGetter.pushRight($scope.images);     
      }

      $timeout(function(){
         imgGetter.getImg('../public/js/data.json')
       .then(function(response){
         $scope.images=response.data.images;
         console.log(response);
       },function(error){
         console.log(error)
       })
      },2000)
   	
      $scope.defineCurrentImg=function(kind,images){
        return imgGetter[kind](images);
      }
   }
})();