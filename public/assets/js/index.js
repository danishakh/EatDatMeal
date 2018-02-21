$(function() {
	$(document).on("click", ".btn-devour", (e) => {
		//var id = $(this).data("id");
		//var devouredStatus = $(this).data("newdevoured");

		var id = $(this).context.activeElement.attributes[1].nodeValue;
		var devouredStatus = $(this).context.activeElement.attributes[2].value;

		// console.log(id);
		// console.log($(this));
		// console.log(devouredStatus);
		var newDevouredState = {
			devoured: devouredStatus
		};

		console.log(newDevouredState);
		console.log('id: ' + id);
		console.log('=============');
		// Send 'PUT' request
		$.ajax({
			url: '/api/appetizers/' + id,
			type: 'PUT',
			data: newDevouredState,
		})
		.done(function() {
			console.log("Success! Changed devoured status to", devouredStatus);
			location.reload();
		})
		.fail(function() {
			console.log("error");
			console.log(id, devouredStatus);
		});
		//alert("done");
	});

	$(".form-new-appetizer").on("submit", (e) => {
		e.preventDefault();

		var newAppetizer = {
			appetizer_name: $("#appetizer-name").val().trim()
		};

		// Send POST request
		$.ajax({
			url: '/api/appetizers',
			type: 'POST',
			data: newAppetizer,
		})
		.done(function() {
			console.log("New Appetizer Added!");
			location.reload();
		})
		.fail(function() {
			console.log("error");
		});
	});

});