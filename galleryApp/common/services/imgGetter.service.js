(function(){
	angular.module('galleryApp')
	 .service('imgGetter',imgGetter);
	 function imgGetter($http){
	 	let getImg=function(link){
	 		return $http.get(link)
	 	}
	 	let centralImg=function(images){
	 		let img=images.filter(function(item,index){
	 			item.index=index;
	 			return item.active;
	 		})
	 		return img[0]
	 	}
	 	let firstLeftImg=function(images){
	 		let img;
	 		images.forEach(function(item,index,arr){
	 			item.index=index;
	 			if(item.active && index>=2){
	 				img=arr[index-2];
	 			}
	 			if(item.active && index===1){
	 				img=arr[arr.length-1];
	 			}
	 			if(item.active && index===0){
	 				img=arr[arr.length-2]
	 			}
	 		})
	 	   return img
	 	}
	 	let secondLeftImg=function(images){
	 		let img;
	 		images.forEach(function(item,index,arr){
	 			item.index=index;
	 			if(item.active && index>=1){
	 				img=arr[index-1];
	 			}
	 			if(item.active && index===0){
	 				img=arr[arr.length-1]
	 			}
	 	});
	 		return img;
	 }
	    let firstRightImg=function(images){
	    	let img;
	    	images.forEach(function(item,index,arr){
	 			item.index=index;
	 			if(item.active && index<arr.length-2){
	 				img=arr[index+2];
	 			}
	 			if(item.active && index===arr.length-2){
	 				img=arr[0];
	 			}
	 			if(item.active && index===arr.length-1){
	 				img=arr[1]
	 			}
	 		})
	 	   return img
	    }
	    let secondRightImg=function(images){
	 		let img;
	 		images.forEach(function(item,index,arr){
	 			item.index=index;
	 			if(item.active && index<arr.length-1){
	 				img=arr[index+1];
	 			}
	 			if(item.active && index===arr.length-1){
	 				img=arr[0]
	 			}
	 	});
	 		return img;
	 }
	    let pushLeft=function(images){
	    	  let n;
        images.forEach(function(item,index){
          item.animNext='';
          item.animPrev='';
          if(item.active){
            n=index;
          }
        })
        images.map(function(item,index,arr){
          //arr[n+1] ? arr[n+1].active=true : '';
          if(arr[n-1]){
            item.active=false;
            arr[n-1].active=true;
            arr[n-1].animNext='next-left-image-effect';
            arr[n].animPrev='prev-left-image-effect';
            item.position+=100;
          }
          if(!arr[n-1]){
            arr[arr.length-1].active=true;
            arr[0].active=false;
            
            item.position=item.position-arr[arr.length-1].position;
          }
        })
	    }
	    let pushRight=function(images){
	    let n;
        images.forEach(function(item,index){
          item.animRightNext='';
            item.animRightPrev='';
          if(item.active){
            n=index;
          }
        })
        images.map(function(item,index,arr){      
          //arr[n+1] ? arr[n+1].active=true : '';
          if(arr[n+1]){
            item.active=false;
            arr[n+1].active=true;
            arr[n+1].animRightNext='next-right-image-effect';
            arr[n].animRightPrev='prev-right-image-effect';
            item.position-=100;
          }
          if(!arr[n+1]){
            arr[arr.length-1].active=false;
            arr[0].active=true;
           
            item.position=index*100;
          }
        })
	    }
	 	return{
	 		getImg:getImg,
	 		centralImg:centralImg,
	 		firstLeftImg:firstLeftImg,
	 		secondLeftImg:secondLeftImg,
	 		firstRightImg:firstRightImg,
	 		secondRightImg:secondRightImg,
	 		pushLeft:pushLeft,
	 		pushRight:pushRight
	 	}
	 }
})();