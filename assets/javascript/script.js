// JavaScript Document
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("snav").style.color ="rgba(0,0,0,0)";
	
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";

}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("snav").style.marginLeft= "0";
	document.getElementById("snav").style.color ="rgba(0,0,0,1.0)";
	
    document.body.style.backgroundColor = "white";
	
}

