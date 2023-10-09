function updateTime() {

// Los Angeles
let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");

let losAngelesTime = moment().tz("America/Los_Angeles");

losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do, YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format("HH:mm:ss [<small>]A[</small>]");


// Cairo
let cairoElement = document.querySelector("#cairo");
let cairoDateElement = cairoElement.querySelector(".date");
let cairoTimeElement = cairoElement.querySelector(".time");

let cairoTime = moment().tz("Africa/Cairo");

cairoDateElement.innerHTML = cairoTime.format("MMMM Do, YYYY");
cairoTimeElement.innerHTML = cairoTime.format("HH:mm:ss [<small>]\A[</small>]");


// Sydney
let sydneyElement = document.querySelector("#sydney");
let sydneyDateElement = sydneyElement.querySelector(".date");
let sydneyTimeElement = sydneyElement.querySelector(".time");

let sydneyTime = moment().tz("Australia/Sydney");

sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do, YYYY");
sydneyTimeElement.innerHTML = sydneyTime.format("HH:mm:ss [<small>]\A[</small>]");

}

updateTime();
setInterval(updateTime, 1000);