var lastClicked;

$(function() {

	// Appetizer Click Events
	$(".btn-devour-appetizer").on("click", (e) => {
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

		console.log('id: ' + id);
		console.log("Changing Devoured State -> " + newDevouredState);
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
	});

	$(".btn-delete-appetizer").on("click", (e) => {
		var id = $(this).context.activeElement.attributes[1].nodeValue;

		console.log('id: ' + id);

		// Send 'DELETE' request
		$.ajax({
			url: '/api/appetizers/' + id,
			type: 'DELETE',
		})
		.done(function() {
			console.log("Success! Deleted appetizer with id: " + id);
			location.reload();
		})
		.fail(function() {
			console.log("error");
		});
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


	// Entree Click Events
	$(".btn-devour-entree").on("click", (e) => {
		var id = $(this).context.activeElement.attributes[1].nodeValue;
		var devouredStatus = $(this).context.activeElement.attributes[2].value;

		// console.log(id);
		// console.log($(this));
		// console.log(devouredStatus);
		var newDevouredState = {
			devoured: devouredStatus
		};

		console.log('id: ' + id);
		console.log("Changing Devoured State -> " + newDevouredState);
		console.log('=============');

		// Send 'PUT' request
		$.ajax({
			url: '/api/entrees/' + id,
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
	});

	$(".btn-delete-entree").on("click", (e) => {
		var id = $(this).context.activeElement.attributes[1].nodeValue;

		console.log('id: ' + id);

		// Send 'DELETE' request
		$.ajax({
			url: '/api/entrees/' + id,
			type: 'DELETE',
		})
		.done(function() {
			console.log("Success! Deleted entree with id: " + id);
			location.reload();
		})
		.fail(function() {
			console.log("error");
		});
	});

	$(".form-new-entree").on("submit", (e) => {
		e.preventDefault();

		var newEntree = {
			entree_name: $("#entree-name").val().trim()
		};

		// Send POST request
		$.ajax({
			url: '/api/entrees',
			type: 'POST',
			data: newEntree,
		})
		.done(function() {
			console.log("New Entree Added!");
			location.reload();
		})
		.fail(function() {
			console.log("error");
		});
	});


	// Dessert Click Events
	$(".btn-devour-dessert").on("click", (e) => {
		var id = $(this).context.activeElement.attributes[1].nodeValue;
		var devouredStatus = $(this).context.activeElement.attributes[2].value;

		// console.log(id);
		// console.log($(this));
		// console.log(devouredStatus);
		var newDevouredState = {
			devoured: devouredStatus
		};

		console.log('id: ' + id);
		console.log("Changing Devoured State -> " + newDevouredState);
		console.log('=============');

		// Send 'PUT' request
		$.ajax({
			url: '/api/desserts/' + id,
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
	});

	$(".btn-delete-dessert").on("click", (e) => {
		var id = $(this).context.activeElement.attributes[1].nodeValue;

		console.log('id: ' + id);

		// Send 'DELETE' request
		$.ajax({
			url: '/api/desserts/' + id,
			type: 'DELETE',
		})
		.done(function() {
			console.log("Success! Deleted dessert with id: " + id);
			location.reload();
		})
		.fail(function() {
			console.log("error");
		});
	})

	$(".form-new-dessert").on("submit", (e) => {
		e.preventDefault();

		var newDessert = {
			dessert_name: $("#dessert-name").val().trim()
		};

		// Send POST request
		$.ajax({
			url: '/api/desserts',
			type: 'POST',
			data: newDessert,
		})
		.done(function() {
			console.log("New Dessert Added!");
			location.reload();
		})
		.fail(function() {
			console.log("error");
		});
	})

	// Save last clicked tab to localStorage
	$("#tab-appetizer").on("click", function() {
		lastClicked = $(this)["0"].id;
		localStorage.setItem('lastClicked', lastClicked);
	});
	$("#tab-entree").on("click", function() {
		lastClicked = $(this)["0"].id;
		localStorage.setItem('lastClicked', lastClicked);
	});
	$("#tab-dessert").on("click", function() {
		lastClicked = $(this)["0"].id;
		localStorage.setItem('lastClicked', lastClicked);
	});

	checkTabClicked();
});


// Helper function to set the tab to the last clicked tab the user was on
function checkTabClicked() {
	if (localStorage.getItem("lastClicked" === "tab-appetizer")) {
		$("#tab-entree").removeClass('active');
		$("#container-entrees").removeClass('in active');
		$("#tab-dessert").removeClass('active');
		$("#container-desserts").removeClass('in active');

		$("#tab-appetizer").addClass('active');
		$("#container-appetizers").addClass('in active');
	}
	else if (localStorage.getItem("lastClicked") === "tab-entree") {
		$("#tab-appetizer").removeClass('active');
		$("#container-appetizers").removeClass('in active');
		$("#tab-dessert").removeClass('active');
		$("#container-desserts").removeClass('in active');

		$("#tab-entree").addClass('active');
		$("#container-entrees").addClass('in active');
	}
	else if (localStorage.getItem("lastClicked") === "tab-dessert") {
		$("#tab-appetizer").removeClass('active');
		$("#container-appetizers").removeClass('in active');
		$("#tab-entree").removeClass('active');
		$("#container-entrees").removeClass('in active');

		$("#tab-dessert").addClass('active');
		$("#container-desserts").addClass('in active');
	}
}




