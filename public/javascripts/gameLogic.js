var chosenOne, funFact;
var wrongGuesses = 0;
var gameOver = false;

$(document).ready(function() {

	var Person = Parse.Object.extend("Person");
	var query = new Parse.Query(Person);
	var contestPeople = new Array();
	var contestPeopleHash = {};

	query.find({
	  success: function(results) {
	  	var id = 1;
	  	while (contestPeople.length < 9) {
	  		var randomnumber=Math.floor(Math.random()*(results.length - 1));
			var person = results[randomnumber].attributes;
			if (!contestPeopleHash[person.Name]) {
				person.id = id;
		  		contestPeople.push(person);
		  		contestPeopleHash[person.Name] = true;

		  		var html = '<button class="person" id="' + id + '"><div class="viewport"><img src="' + person.PhotoUrl + '"/></button></div>';
		  		$('#people').append(html);

		  		// add event handlers
		  		$('#' + id).click(clickHandler);
		  		$('#' + id).find("img").load(imageLoadHandler);
		  		id++;
		  	}
	  	}
	  	var randomnumber=Math.floor(Math.random()*contestPeople.length);
	  	chosenOne = contestPeople[randomnumber];
	  	randomnumber=Math.floor(Math.random()*chosenOne.Bullets.length);
	  	funFact = chosenOne.Bullets[randomnumber];
	  	$('#funFact').html(funFact);
	  	
	  },
	  error: function(error) {
	    alert("Error: " + error.code + " " + error.message);
  	  }
	});
});

function clickHandler(event) {
	if (gameOver)
		return;

	var el = $(event.currentTarget);
	if (el.attr("id") == chosenOne.id) {
		showFunFact("NICE WORK!");
		showPersonFact();
		tryAgain("Play again?");
		animateBackground("#39C632");
	}
	else
	{
		if (wrongGuesses++ < 2)
		{
			animateBackground("#FFBF29");
			if (wrongGuesses == 1)
				showFunFact("NAH...");
			else
				showFunFact("ONE MORE TRY...");
		}
		else
		{
			showFunFact("NO DICE");
			showPersonFact();
			animateBackground("#FF4D29");
			highlightChosenPerson();
        }
	}
}

function imageLoadHandler(event) {
	var el = $(event.currentTarget);
	var viewport = el.parent();

	var width, height, viewportHeight, viewportWidth;
	width = el.width();
	height = el.height();
	viewportWidth = viewport.width();
	viewportHeight = viewport.height();

	// scale image
	if (width != viewportWidth || height != viewportHeight)
	{
		if (width < height)
		{
			console.log("scaleX", width, height, el);
			height = Math.floor((viewportWidth / width) * height);
			width = viewportWidth;
			el.height(height);
			el.width(width);
		} else {
			console.log("scaleY", width, height, el);
			width = Math.floor((viewportHeight / height) * width);
			height = viewportHeight;
			el.width(width);
			el.height(height);
		}

		// horizontal center
		if (width > viewportWidth)
			el.css("left", viewportWidth - width >> 1);
	}

	// fade in
	viewport.fadeTo("slow", 1);
}

function showFunFact(message) {
	$('#funFact').html(message);
}

function showPersonFact() {
	$('#personFact').html("<strong>" + chosenOne.Name + "</strong> " + funFact);
	$("#personFact").show("fade", "slow");
}

function tryAgain(message) {
	$('#tryAgain').find("a").html(message);
	$("#tryAgain").show("fade", "slow");
	gameOver = true;
}

function highlightChosenPerson() {
	for (var i = 1; i < 10; i++) {
		if (i == chosenOne.id) {
    		$( "#" + i ).effect("pulsate", "slow", function () {
				tryAgain("Try Again...");
			});
    	}
    	else
    		$( "#" + i ).fadeTo("slow", 0);
	}
}

function animateBackground(color) {
	$( ".mobile" ).animate({
		backgroundColor: color,
	}, 1000 );
}
