/* show day and date*/
function showdayanddate(){
var date=new Date();
var days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var month=["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]
var d=date.getDay();
var dayname=days[d];
var dayval=date.getDate();
var m=date.getMonth();
var monthname=month[m];
var year=date.getFullYear();

document.getElementById("dateshow").innerHTML=dayname +",  "+ dayval +"  "+ monthname+"  "+year;
}