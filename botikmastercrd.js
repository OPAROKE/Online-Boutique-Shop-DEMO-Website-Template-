
function mstrcardNum(crdnumbertxt){
 var mstrcrdnum = /^(?:5[1-5][0-9]{14})$/;
 if(crdnumbertxt.value.match(mstrcrdnum)) {
  return true;
 }
 else{
   alert("<h1><b>Invalid Master card number !</b></h1>");
   return false;
 }
}

function zoomImage1(){
 var zoom = document.getElementById("img1");
 var img1 = document.getElementById("img2");

 zoom.width = "500";
 zoom.height = "400";
 
 img1.width = "200";
 img1.height = "200";
}

function zoomImage2(){
 var img1 = document.getElementById("img1");
 var zoom = document.getElementById("img2");

 zoom.width = "500";
 zoom.height = "400";

 img1.width = "200";
 img1.height = "200";
}