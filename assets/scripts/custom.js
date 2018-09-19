

//console.log(allHeaderA.length);
//
//function markSelection() {
// allHeaderA[i].classList.add ("current");
//}
//
//for (i = 0; i < allHeaderA.length;i++){
//    allHeaderA[i].addEventListener('click', markSelection); 
//}


var allHeaderA= [];
var allHeaderA = document.getElementsByClassName("menu-item-anchor");


//for  (i = 0; i < allHeaderA.length; i++) {
//   allHeaderA[i].addEventListener("click", function() {
//   
//    allHeaderA[0].classList.add("current");
//  })
//  
//}



function highlite(){
	allHeaderA[0].classList.add("current");
}

for (i = 0; i < allHeaderA.length; i++){
    allHeaderA[i].onclick = highlite;
}; 

//console.log(allHeaderA[5]);



