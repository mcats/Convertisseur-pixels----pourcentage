// Write into "ul.apercu li" differents informations we need (width in pixels & %) 
// Data must contain the name of the input we're modifiying (String "partie_0")
function lewrite (data) {
	// Witch input is that ?
	dataInput = $("input[name="+data+"]").val(),

	// dataInput associed with with "ul.apercu li" ?
	dataPartie = $("#"+data);
	
	// Now we can write what we want
	$(dataPartie).html(dataInput+"px<br />"+px2prct(dataInput)+"%");
}

// Function that show us how many space we have left on .apercu
// if there is no arg, that fonction just return the width disponible.
// If there is, we want it to write into #widthleft how many px we have left.
function widthLeft (data) {
	var partieWidth = 0;
	jQuery(".apercu li").each(function (i, elem) {
		// Adding elem.width()'s value into var
		partieWidth += $(elem).width();
	});
	colLeft = $(".apercu").width() - partieWidth;
	// If we want that to be written on the span, then we do a widthLeft(args)
	if (data == "write") {
		$("#widthleft span").html(colLeft);		
	}
	// returning. Not into the future.
	return colLeft;
}

// Function that allow me to put a random background-color on my li.partie
function randomBgc () {
	// IV my people
	colorz = new Array ("#3B3B3B","#A8877E","#FFA49D","#FF7474","#FF476C","#04BFBF","#CAFCD8","#F7E967","#A9CF54","#588F27","#8C594E","#D18952","#FDB157","#213F52","#417081","#FCF7CD","#D6CCCB","#EA2C46","#33C7B8","#174040","#888C65","#D98162","#D98162","#A65858");
	// Random number seen on http://www.javascriptkit.com/javatutors/randomnum.shtml
	return colorz[Math.floor(Math.random()*colorz.length)];
}

// Most important function : dat convertor
function px2prct (data) {
	var prct = 0,
		prct = data / $("#total").val() * 100;
	return Math.round(prct*100)/100;
}
