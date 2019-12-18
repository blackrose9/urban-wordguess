// words and hints
var categoryOcean = [["Starfish","It should in the sky but it's in the sea"], ["Seahorse","It's land counterpart is great at races"], ["Water"],["Mizuuuu"], ["swordfish","Sharp, Sharp, pointy!"], ["beach","Full of Sandiness"]];
var categoryScience = [["newton", "SI Unit of Force"]];
var categoryFood = [["Kiwi", "It's a fruit, bird and shoe polish"], ["Donut","It's a law enforcement delicacy for some reason"], ["Fish", "Should be in the ocean category..."]];
// var programminglanguages = [];
var categoryCountries = [["Somalia","something random"]];
var categoryMisc = [["Hosepipe", "Used for watering your garden"], ["Principle","another word for head teacher"]];

var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
function selectCategory(category){
   if (category == "ocean" ){
      selectedCategory = Math.floor(Math.random() * categoryOcean.length)
      alert(selectedCategory + categoryOcean[selectedCategory]);
   }
   if (category == "food"){
      selectedCategory = Math.floor(Math.random() * categoryFood.length)
      alert(selectedCategory);
   }
   if (category == "misc"){
      selectedCategory = Math.floor(Math.random() * categoryMisc.length)
      alert(selectedCategory);
   }
   if (category == "countries"){
      selectedCategory = Math.floor(Math.random() * categoryCountries.length)
      alert(selectedCategory);
   }
   if (category == "science"){
      selectedCategory = Math.floor(Math.random() * categoryScience.length)
      alert(selectedCategory);
   }
}
$(document).ready(function(){
   $("button").click(function() {
      var fired_button = $(this).val();
      selectCategory(fired_button);
   });
});