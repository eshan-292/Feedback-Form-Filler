/*
var a = document.getElementById('acad_pk_chosen')
a.click() ;
var b = document.getElementByName("2021-2022 / 1") ;
b.click() ;
var c = document.getElementByClassName("btn btn-primary btn-xs btn-flat") ;
c.click() ;
*/
var r = document.querySelectorAll('input[type=radio]');
for(var i = 0; i < r.length; i++){
  r[i].click();
}
var t = document.getElementsByTagName('textarea')
for(var i = 0; i < t.length; i++){
  t[i].value = "No Opinion";
  t[i].click();
}
var p = document.getElementById("submit") ;
p.click() ;
/*
setTimeout(function(){
    var q = document.getElementById("0886ec61-96b3-489e-b917-2f5c6c84a613") ;
    q.click() ; 
}, 1000);
*/