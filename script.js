function printLyrics(){
	for(i=99;i>=3;i--){
		//document.getElementById("main").innerHTML+="<br />"+i;
		document.getElementById("main").innerHTML+="<br />"+i+" bottles of beer on the wall, "+i+" bottles of beer";
		document.getElementById("main").innerHTML+="<br />"+"Take one down and pass it around, "+(i-1)+" bottles of beer on the wall";
	}
	document.getElementById("main").innerHTML+="<br />"+"2 bottles of beer on the wall, 2 bottles of beer";
	document.getElementById("main").innerHTML+="<br />"+"Take one down and pass it around, 1 bottle of beer on the wall";
	document.getElementById("main").innerHTML+="<br />"+"1 bottle of beer on the wall, 1 bottle of beer";
	document.getElementById("main").innerHTML+="<br />"+"Take one down and pass it around, no more bottles of beer on the wall";

}

function subjects(){
	var numSubjects=parseInt(document.getElementById("formNumSubjects").value);
	var result=0;
	for(i=0;i<numSubjects;i++){
		let result = prompt("Please enter your result in subject "+(i+1));
		document.getElementById("main").innerHTML+="<br /> Your result in subject "+(i+1)+" is "+result;

	}	
	
}