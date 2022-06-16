var body = document.getElementById("parent");
 
 var form = document.getElementById("form");

var title = document.createElement("p");
title.innerHTML = "Code Protected Page";
title.setAttribute("id", "p");

var div1 = document.createElement("input");
div1.type = "text";
div1.placeholder = "Division Name";
div1.setAttribute("id", "div");

var br = document.createElement("br");

var div2 = document.createElement("input");
div2.type = "number";
div2.placeholder = "Code";
div2.setAttribute("id", "divNum");

var div3 = document.createElement("input");
div3.type = "button";
div3.value = "Enter";
div3.onclick = enterCode;
div3.setAttribute("id","bt");

var det = document.getElementById("det");
var del = document.getElementById("show");

var newdel = document.createElement("input");
newdel.id = "newdel";
newdel.type = "button";
newdel.value = "Hide Division Important Information";
newdel.onclick = acchide;

var newshow = document.createElement("input");
newshow.id = "newS";
newshow.type = "button";
newshow.value = "Division Important Information";
newshow.onclick = acc2;

function acchide() {
  det.removeChild(newdel);
  det.appendChild(newshow);
  body.removeChild(div12);
  
}

var div12 = document.createElement("div");
  div12.id = "form";
  
function acc() {
  body.appendChild(div12);
  var form = document.getElementById("form");
  det.appendChild(newdel);
  det.removeChild(del);
form.appendChild(title);
form.appendChild(div1);
form.appendChild(br);
form.appendChild(div2);
form.appendChild(br);
form.appendChild(div3);
}


function acc2() {
  det.appendChild(newdel);
  det.removeChild(newshow);
  body.appendChild(div12);
}

var req = document.createElement('div');
  req.id = 'req';

function enterCode() {
  var div = document.getElementById("div").value;
  var divN = document.getElementById("divNum").value;
  
  var divD = ["CMP", "AIR FORCE"];
  var num = ["090", "909"];
  
  var bt1 = document.getElementById("bt");
  
  var divAnddivN = "Please Fill Up the Division Name and the Code input.";
  
  var nulldiv = "Please Fill Up the Division Name input.";
  
  var nulldivN = "Please Fill Up the Code input.";
  
  var error = "Please make sure that the Division Name is correct and is All Big Letters and there's no space at the end of it and also make sure that the Code is correct.";
   
  var divForm = document.getElementById("form");
  
  var successCMP = document.createElement("div");
    successCMP.setAttribute('id', 'cmp');
    
  var successAIRF = document.createElement("div");
    successAIRF.setAttribute('id', 'air');
  
  var reqOk = document.createElement('input');
  reqOk.id = 'ok';
  reqOk.value = 'Ok';
  reqOk.type = 'button';
  reqOk.onclick = destroy;
  
  if (div === divD[0] && divN === num[0]) {
  successCMP.innerHTML = '<strong>' + 'Welcome To The Private Information Page Of The Division From Indian Army "CMP"';
  
  det.removeChild(newdel);
  body.removeChild(divForm);
  body.appendChild(successCMP);
  } else if (div === divD[1] && divN === num[1]) {
    successAIRF.innerHTML = "Air Force";
    
     det.removeChild(newdel);
    body.appendChild(successAIRF);
      body.removeChild(divForm);
  } else if (div === "" && divN === "") {
    body.appendChild(req);
    req.id = 'reqdivAnddivN';
    req.innerHTML = divAnddivN;
    req.appendChild(br);
    req.appendChild(reqOk);
  } else if (div === "") {
    body.appendChild(req);
    req.id = 'reqnulldiv';
    req.innerHTML = nulldiv;
    req.appendChild(br);
    req.appendChild(reqOk);
  } else if (divN === "") {
    body.appendChild(req);
    req.id = 'reqnulldivN';
    req.innerHTML = nulldivN;
    req.appendChild(br);
    req.appendChild(reqOk);
  } else if (div !== num && divN !== num || div === "" && divN === "") {
    body.appendChild(req);
    req.id = 'reqerror';
    req.innerHTML = error;
    req.appendChild(br);
    req.appendChild(reqOk);
  }
}

function destroy() {
  body.removeChild(req);
}
