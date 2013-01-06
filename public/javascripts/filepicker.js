function uploadImage() {
	filepicker.pick({
	    mimetypes: ['image/*'],
	    container: 'window'
	  },
	  function(FPFile){
	  	$("#photo").attr("src", FPFile.url);
	  	$("#photoUrl").val(FPFile.url);
	  	console.log(FPFile);
	  },
	  function(FPError){
	    $("#photo").hide();
			$("#addPhoto").show();
	  }
	);
}