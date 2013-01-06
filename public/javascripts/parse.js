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

		if ($('#funfact1').val() != "") {
			person.add("Bullets", $('#funfact1').val());
		}
		if ($('#funfact2').val() != null) {
			person.add("Bullets", $('#funfact2').val());
		}
		if ($('#funfact3').val() != null) {
			person.add("Bullets", $('#funfact3').val());
		}
		 
		person.save(null, {
		  success: function(person) {
		    alert('success');
		    window.location = "/landing.html";
		  },
		  error: function(gameScore, error) {
		    alert('error');
  		  }
		});
	}
