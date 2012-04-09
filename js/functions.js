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
function widthLeft () {
	var partieWidth = 0;
	// for each li into .apercu
	jQuery(".apercu li").each(function (i, elem) {
		// Adding elem.width()'s value into var
		partieWidth += $(elem).width();
	});
	// returning. Not into the future.
	$("#widthleft span").html($(".apercu").width() - partieWidth);
}

// Function that allow me to put a random background-color on my li.partie
function randomBgc () {
	// IV my people
	colorz = new Array ("#3B3B3B","#A8877E","#FFA49D","#FF7474","#FF476C","#04BFBF","#CAFCD8","#F7E967","#A9CF54","#588F27", "#191724","#4C4547","#8C594E","#D18952","#FDB157");
	// Random number seen on http://www.javascriptkit.com/javatutors/randomnum.shtml
	return colorz[Math.floor(Math.random()*colorz.length+1)];
}

// Most important function : dat convertor
function px2prct (data) {
	var prct = 0,
		prct = data / $("#total").val() * 100;
	return Math.round(prct*100)/100;
}
