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
	    $("#image-upload-div").prepend("<div class='span8 offset2 alert'>Unable to upload image</div>");
	  }
	);
}