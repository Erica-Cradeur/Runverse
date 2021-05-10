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

function cacheInput(e) {
    localStorage.setItem(e.attributes["name"].value, e.value)
}

window.onload = function () {
    let form = document.getElementById("myForm");
    let inputs = form.children;
    for (let i = 0; i < inputs.length; i++) {
        let el = inputs[i];
        if (el.tagName.toLowerCase() != "input" || el.attributes["type"].value != "text") {
            continue
        }
        let cachedVal = localStorage.getItem(el.attributes["name"].value)
        if (cachedVal != null) {
            el.value = cachedVal;
        }
    }
}
