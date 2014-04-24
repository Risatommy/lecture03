var helloWorld = function(){
	var message = document.getElementById("helloWorld");
	message.setAttribute("class", "");
};

var showHelloWorldButton = document.getElementById("showHelloWorld");
showHelloWorldButton.addEventListener("click", helloWorld);

var hellohappy = function(){
	var message = document.getElementById("hellohappy");
	message.setAttribute("class", "");
};

var showHellohappyButton = document.getElementById("showHellohappy");
showHellohappyButton.addEventListener("click", hellohappy);
