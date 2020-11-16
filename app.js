
function calculate(){
 var x=document.getElementById('cathetus1').value;
 var y=document.getElementById('cathetus2').value;
	

	if(x>0 && y>0  ) {
	
var b=Math.sqrt(x*x + y*y);	
	
alert("гіпотенуза="+b);
}
	else alert("---")
}



