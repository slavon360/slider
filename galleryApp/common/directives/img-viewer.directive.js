(function(){
	angular.module('galleryApp')
	 .directive('imgViewer',imgViewer);
	 function imgViewer($compile,$timeout){
	 	let template='<ng-include src="\'/common/directives/img-viewer.html\'"></ng-include>',
	 	    empty='<div></div';
	 	return{
	 		restrict:'EA',
	 		link:function(scope,element,attrs){
	 			if(scope.pageState.imageClicked){
	 				let content=$compile(template)(scope);
	 				element.html(content);
	 			}	
	 		}
	 	}
	 }
})();