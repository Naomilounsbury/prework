//When button is clicked... 
$("#factButton").on("click", function() {
    //We generate a random number between 0 and 4(the number of facts in the booFacts)
	var number = Math.floor((Math.random() * booFacts.length));
    //We display the fact from the random position we just generated.
	$("#factText").text(booFacts[number])
})
//This array holds all the Boo facts.
var booFacts = ["Boo is a pomeranian", "Boo's best friend is another pomeranian named Buddy", "Boo the Pomeranian was born on March 16, making him a Pisces", "Boo's favourite food is grass", "Boo has released two books" ]

//When textPink is pressed...
$("#textPink").on("click", function() {
    //Change funText to pink
	$("#funText").css("color", "pink")
})
//When textOrange is pressed...
$("#textOrange").on("click", function() {
    //Change funText to orange
    $("#funText").css("color", "orange")
})
//When textGreen is pressed...
$("#textGreen").on("click", function() {
    //Change funText to green
	$("#funText").css("color", "green")
})

//When boxGrow button is clicked...
$("#boxGrow").on("click", function() {
    //Increase the size of the box.
	$("#box").animate({height:"+=35px", 
		width:"+=35px"}, "fast");
})

//When boxShrink button is clicked...
$("#boxShrink").on("click", function() {
    //decrease the size of the box.
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})