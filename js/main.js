// words and hints
var categoryOcean = [["Starfish","It should in the sky but it's in the sea"], ["Seahorse","It's land counterpart is great at races"], ["Water"],["Mizuuuu"], ["swordfish","Sharp, Sharp, pointy!"],["beach","Full of Sandiness"]];
var city = [];
var categoryFood = [];
var programminglanguages = [];
var categoryMisc = [["Hosepipe", "Used for watering your garden"]];
var colors = [];
var countries = [];

var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
function selectCategory(category){
   if (category == "ocean" ){
      selectedCategory = Math.floor(Math.random() * categoryOcean.length)
      alert(selectedCategory);
   }
   if (category == "food"){
      selectedCategory = Math.floor(Math.random() * categoryFood.length)
      alert(selectedCategory);
   }
   if (category == "misc"){
      selectedCategory = Math.floor(Math.random() * categoryMisc.length)
      alert(selectedCategory);
   }
}
$(document).ready(function(){
   $("button").click(function() {
      var fired_button = $(this).val();
      selectCategory(fired_button);
   });
});