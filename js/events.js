// When changing the width of the parent
// If we don't have any .partie, we want to create a new input and his li on .apercu
// And we want to show #informations
jQuery("#total").change(function () {
	var pxTotal = $(this).val();
	$(".apercu").css('width',pxTotal);
	if ($(".partie").length == 0) {
		$(".liste_parties").append("<li><input class='partie' name='partie_0' value='60' placeholder='Largeur d\'un des child' /></li>");
		$("[name=partie_0]").focus();
		$(".apercu").append("<li style='background-color:"+randomBgc()+";width:60px' id='partie_0'>Pouet</li>");
		lewrite("partie_0")
		$("#total").after('<br /><br /><input type="button" id="add" value="Ajouter un input" />');
		$("#informations").show("slow");
	}
	// updating the width left
	widthLeft("write");
});

// When we change something on one of the inputs, we need to update the width of their li and recalculate those width
jQuery(".partie").live('change', function () {
	var elem = $(this),
	partieID = elem.attr("name");
	partieVAL = elem.val();
	lewrite(partieID);
	$(".apercu #" + partieID).css("width",partieVAL);
	widthLeft("write");
});

// When we want to create a new col by clicking on the #add, we want it to create a new input, a new li and update widthLeft
jQuery("#add").live('click', function() {
	var totalPartie = $(".partie").length;
	$(".liste_parties").append("<li><input class='partie' name='partie_"+totalPartie+"' value='60' /></li>");
	$(".apercu").append("<li style='background-color:"+randomBgc()+";width:60px' id='partie_"+totalPartie+"'></li>");
	lewrite("partie_"+totalPartie)
	widthLeft();
});

// Event to generate the CSS if we want that
jQuery("#generate_it").click(function () {
	// Optimisation! (http://jsperf.com/jquery-sharp-vs-getelementbyid)
	var letextarea = $(document.getElementById("generated_css"));
	// Empty the textarea
	letextarea.empty();
	// talk for itself from here
	var generate_array = new Array();
	$(".apercu li").each(function (i,elem) {
		generate_array[i] = ".col-"+i+" { width:"+ px2prct($(elem).width()) +"% }\r";
	});
	$.each(generate_array, function (i, value) {
		$(letextarea).append(value);
	});

	// adding a col that let know us there is some space left
	var colLastWidth = widthLeft();
	if (colLastWidth > 0) {
		letextarea.append(".col-last { "+px2prct(colLastWidth)+"%; }");		
	}
});




