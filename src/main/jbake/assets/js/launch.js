var url = URI.parseQuery(new URI(location.href).query()).url;
function message(m) {
	$("#message").append($("<p>"+m+"</p>"))
}
window.onload = function() {
	if(url == undefined) {
		message("url undefined");
	} else {
		message("launch " +url);
		var server = "http://localhost:8712";
		$.getJSON( server+"/"+url 
				//,{ name: "John", time: "2pm" } 
		)
		.done(function( json ) {
			message( "JSON Data: " + JSON.stringify( json) );
		})
		.fail(function( jqxhr, textStatus, error ) {
			var err = textStatus + ", " + error;
			message( "Request Failed: " + err );
		});
	}


}

