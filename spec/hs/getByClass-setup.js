var element = document.createElement("div"); element.classList.add("foo");
var input   = document.createElement("input"); input.classList.add("foo");

var html = document.getElementsByTagName("html")[0];
html.appendChild(element);
html.appendChild(input);