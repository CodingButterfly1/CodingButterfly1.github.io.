/* .js files add interaction to your website */


/* start of MESSAGE generator */
var displayName = document.getElementById("secret");
var button = document.getElementById("myButton");

button.addEventListener("click", displaySecret);

function displaySecret() {
  var text = document.getElementById("myText").value;
  displayName.innerHTML = text + ", I hope going through this website has helped you discover what STEM is about and gives you another career path to take a dive into! Feel free to share this website with friends and family! You can do whatever your heart sets out to be!" 
}
/* end of MESSAGE generator */

/* FACT GENERATOR */
var factList = [
  "Canada, New Zealand, India, France, and China are the top 5 best abroad countries for an engineering job.",/*0*/
  "The word “engineer” is derived from the Latin word “ingenium”, which means “native talent” or “cleverness”.",/*1*/
  "Mary Jackson was a mathematician and aerospace engineer who, in 1958, became the first black female engineer at NASA.",/*2*/
  "Bertha Lemme became the first women in the USA to recieve a degree in Engineering, which was Mechanical Engineering.",/*3*/
  "Edith Clarke was the first woman who earned a degree in Electrical Engineering from the Massachusetts Institute of Technology (MIT). ",/*4*/
  "Engineers do work in the music and fashion industries!",/*5*/
  "International Women in Engineering Day is June 23!"];/*6*/


var fact = document.getElementById("factTextglow");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
  factTextglow.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
} 
