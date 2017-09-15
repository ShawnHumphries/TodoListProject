// Check off specific todos by clicking on them
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Click on X to delete Todo
$("ul").on("click", "span", function(event){
	event.stopPropagation();
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
});

$("input[type='text']").keypress(function(event){
	if (event.which === 13) {
		// grad todo text from input
		var todoText = $(this).val();
		// set the input field to empty
		$(this).val("");
		// create new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

$(".fa-plus").on("click", function(){
	$("input[type='text']").fadeToggle();
});