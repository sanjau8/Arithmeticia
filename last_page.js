

var tot=localStorage.getItem("tot");
var crct=localStorage.getItem("crct");
var wrng=localStorage.getItem("wrng");

document.querySelector('.tot').textContent=tot;
document.querySelector('.crct').textContent=crct;
document.querySelector('.wrng').textContent=wrng;
document.querySelector('.crctper').textContent=(crct/tot)*100;
document.querySelector('.qpersec').textContent=(tot/12);