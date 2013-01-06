Parse.initialize("3LGPtH2cO67gy64Nbffk5P3fS5JAhifJiK265tcN", "1l8ZrqD3N0yUYVxJIz0vGhbiRQ5QbWfndEpIrrDe");

function parseCreate() {
		var Person = Parse.Object.extend("Person");
		var person = new Person();
 
		person.set("Name", $('#firstName').val() + $('#lastName').val());
		person.set("Company", $('#company').val());
		person.set("Location", $('#location').val());
		person.set("Megafield", $('#megafield').val());
		person.set("PhotoUrl", $('#photoUrl').val());
		person.set("Title", $('#title').val());
		person.add("Tags", "StartUpWeekendLV");

		if ($('#funFact1').val() != null) {
			person.add("Bullets", $('#funFact1').val());
		}
		if ($('#funFact2').val() != null) {
			person.add("Bullets", $('#funFact2').val());
		}
		if ($('#funFact3').val() != null) {
			person.add("Bullets", $('#funFact3').val());
		}
		 
		person.save(null, {
		  success: function(person) {
		    alert('saved');
		    $('#personName').val("");
			$('#personComment').val("");
			$('#personImage').val("");
		  },
		  error: function(gameScore, error) {
		    alert('error');
  		  }
		});
	}
