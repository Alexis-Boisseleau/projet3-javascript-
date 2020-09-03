var imageliste=new Array();
imageliste[0]="css/img1-ConvertImage.jpg";
imageliste[1]="css/img2-ConvertImage.jpg";
imageliste[2]="css/img3-ConvertImage.jpg";
imageliste[3]="css/img4-ConvertImage.jpg";
imageliste[4]="css/img6-ConvertImage.jpg";


var iPos = 0;
var oTimer;

function preced() {
 
  iPos--;
  if(iPos < 0) {
    iPos = imageliste.length-1;
  }
  document.getElementById("imgx").src=imageliste[iPos];
};

function suiv() {
  
  afficheNext()
};

function afficheNext(){
  iPos++;
  if(iPos >= imageliste.length-1) {
    iPos = 0;
  } 
  document.getElementById("imgx").src=imageliste[iPos];
}
function diapo() {
  window.clearInterval(oTimer);
  oTimer = window.setInterval(afficheNext, 5000);
};

function stoper() {
  window.clearInterval(oTimer);
}


// fleches directionnelles 
document.addEventListener("keydown", function(e){
    if(e.keyCode === 37){
        suiv()
    }else if(e.keyCode === 39){
        preced()
    }
 
})



window.addEventListener("load",diapo());

