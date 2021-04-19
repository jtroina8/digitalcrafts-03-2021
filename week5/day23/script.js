$(document).ready() => {
    console.log("We are in jquery");
};

const divContainer = document.querySelector("div");
const $jdivContainer = $("<div></div>");

const $header3 = $("h3", {
    text: "Joe is Here",
});

$header3.css("color", "red");

$jdivContainer.append($header3);
console.log($jdivContainer);
$(document.body).append($jdivContainer);