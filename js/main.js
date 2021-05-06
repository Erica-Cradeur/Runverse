function regSW(){
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js');
  }
}

function displayText(){
  if(document.getElementById('other').checked){
     document.getElementById('otherTextbox').style.display = "block";
     }
  else {document.getElementById('otherTextbox').style.display ="none";}
}

function testJS()
{
	var b = document.getElementById('name').value

	document.getElementById('here').innerHTML = b;

}
