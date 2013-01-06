Parse.initialize("mZEfyqxulDuJpSem42xdTFlgVV1ZmiUqfll03Lgg", "PVDQsrcPDYazUc3FVShQFIjEhQYM3kCbkXdVp1m3");

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
