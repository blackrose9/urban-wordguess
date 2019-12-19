// words in categories
var categoryOcean = [["Starfish"], ["Seahorse"], ["Water"], ["swordfish"], ["beach"]]
var categoryScience = [["newton"]]
var categoryFood = [["Kiwi"], ["Donut"], ["Fish"]]
var categoryCountries = [["Somalia"]]
var categoryMisc = [["Hosepipe"], ["Principle"]]

//hints for the categories
var hintsOcean = [["It should in the sky but it's in the sea"], ["It's land counterpart is great at races"], ["Mizuuuu"], ["Sharp, Sharp, pointy!"], ["Full of Sandiness"]]
var hintsScience = [["SI Unit of Force"]]
var hintsFood = [["It's a fruit, bird and shoe polish"], ["It's a law enforcement delicacy for some reason"], ["Should be in the ocean category..."]]
var hintsCountries = []
var hintsMisc = [["Used for watering your garden"], ["another word for head teacher"]]

// defines the keyboard alphabet
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

// game memory which defines variable starting point
var selectedCategory = 0;
var wordLeft = []

// this function picks a word depending on the category
function selectCategory(category) {
   if (category == "ocean") {
      selectedCategory = Math.floor(Math.random() * categoryOcean.length)
      return (categoryOcean[selectedCategory]);
   }
   if (category == "food") {
      selectedCategory = Math.floor(Math.random() * categoryFood.length)
      return (categoryFood[selectedCategory]);
   }
   if (category == "misc") {
      selectedCategory = Math.floor(Math.random() * categoryMisc.length)
      return (categoryMisc[selectedCategory]);
   }
   if (category == "countries") {
      selectedCategory = Math.floor(Math.random() * categoryCountries.length)
      return (categoryCountries[selectedCategory]);
   }
   if (category == "science") {
      selectedCategory = Math.floor(Math.random() * categoryScience.length)
      return (categoryScience[selectedCategory]);
   }
}

$(document).ready(function () {
   $("button").click(function () {
      var categoryButton = $(this).val();
      selectCategory(categoryButton);
      startGame(selectCategory(categoryButton));
   });
});

//on button click starts the game
function startGame(catword) {
   // getId("home").className = "h"
   // getId("result").className = "h"
   
   // clearKeyboard()
   // clearHangman()
   createPlay(catword)
}
//when game starts it draws the spaces depending on the word picked
function createPlay(catword) {
   var d = getId("letter")
   d.innerHTML = ""
   for (a = 0; a < catword.length; a++) {
      var x = catword[a].toUpperCase()
      var catword = document.createElement("span")
      catword.className = "line" + (x == " " ? " ls" : "")
      catword.innerHTML = "&nbsp"
      catword.id = "line" + a;
      d.appendChild(catword)

      if (x != " ") {
         if (wordLeft.indexOf(x) == -1) {
            wordLeft.push(x)
         }
      }
   }
   //   alert (x);
}

//get element by id from html
function getId(id) {
   return document.getElementById(id)
}