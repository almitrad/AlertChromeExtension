/*All code original and creaed by Almitra Dabholkar*/
$(function(){
	/*DISPLAY EMAILS ALREADY STORED*/
	/*email one*/
	chrome.storage.sync.get("email_one", function(addresses){
		var new_email_one = "";
			if (addresses.email_one){
				new_email_one = addresses.email_one;
			}
		chrome.storage.sync.set({"email_one": new_email_one})
		$("#display-email-one").text(new_email_one);
		$("#email-one").val('');
	});

	/*email two*/
	chrome.storage.sync.get("email_two", function(addresses){
		var new_email_two = "";
			if (addresses.email_two){
				new_email_two = addresses.email_two;
			}
		chrome.storage.sync.set({"email_two": new_email_two})
		$("#display-email-two").text(new_email_two);
		$("#email-two").val('');
	});

	/*email three*/
	chrome.storage.sync.get("email_three", function(addresses){
		var new_email_three = "";
		if (addresses.email_three){
			new_email_three = addresses.email_three;
		}
		chrome.storage.sync.set({"email_three": new_email_three})
		$("#display-email-three").text(new_email_three);
		$("#email-three").val('');
	});

	/*email four*/
	chrome.storage.sync.get("email_four", function(addresses){
		var new_email_four = "";
		if (addresses.email_four){
			new_email_four = addresses.email_four;
		}
		chrome.storage.sync.set({"email_four": new_email_four})
		$("#display-email-four").text(new_email_four);
		$("#email-four").val('');
	});

	/*email five*/
	chrome.storage.sync.get("email_five", function(addresses){
		var new_email_five = "";
		if (addresses.email_five){
			new_email_five = addresses.email_five;
		}
		chrome.storage.sync.set({"email_five": new_email_five})
		$("#display-email-five").text(new_email_five);
		$("#email-five").val('');
	});

	/*SAVE NEW EMAILS*/
	$("#save").click(function(){
		/*email one*/
		chrome.storage.sync.get("email_one", function(addresses){
			var input_email_one = $("#email-one").val();
			if (input_email_one){
				new_email_one = input_email_one;
			}
			chrome.storage.sync.set({"email_one": new_email_one})
			$("#display-email-one").text(new_email_one);
			$("#email-one").val('');
		});

		/*email two*/
		chrome.storage.sync.get("email_two", function(addresses){
			var input_email_two = $("#email-two").val();
			if (input_email_two){
				new_email_two = input_email_two;
			}
			chrome.storage.sync.set({"email_two": new_email_two})
			$("#display-email-two").text(new_email_two);
			$("#email-two").val('');
		});

		/*email three*/
		chrome.storage.sync.get("email_three", function(addresses){
			var input_email_three = $("#email-three").val();
			if (input_email_three){
				new_email_three = input_email_three;
			}
			chrome.storage.sync.set({"email_three": new_email_three})
			$("#display-email-three").text(new_email_three);
			$("#email-three").val('');
		});

		/*email four*/
		chrome.storage.sync.get("email_four", function(addresses){
			var input_email_four = $("#email-four").val();
			if (input_email_four){
				new_email_four = input_email_four;
			}
			chrome.storage.sync.set({"email_four": new_email_four})
			$("#display-email-four").text(new_email_four);
			$("#email-four").val('');
		});

		/*email five*/
		chrome.storage.sync.get("email_five", function(addresses){
			var input_email_five = $("#email-five").val();
			if (input_email_five){
				new_email_five = input_email_five;
			}
			chrome.storage.sync.set({"email_five": new_email_five})
			$("#display-email-five").text(new_email_five);
			$("#email-five").val('');
		});
	});

	/*DELETE STORED EMAIL ADDRESSES*/
	/*email one*/
	$("#delete-one").click(function(){
		chrome.storage.sync.get("email_one", function(addresses){
			var new_email_one = "";
			if (addresses.email_one){
				new_email_one = "";
			}
			chrome.storage.sync.set({"email_one": new_email_one})
			$("#display-email-one").text(new_email_one);
			$("#email-one").val('');
		});
	});

	/*email two*/
	$("#delete-two").click(function(){
		chrome.storage.sync.get("email_two", function(addresses){
			var new_email_two = "";
			if (addresses.email_two){
				new_email_two = "";
			}
			chrome.storage.sync.set({"email_two": new_email_two})
			$("#display-email-two").text(new_email_two);
			$("#email-two").val('');
		});
	});

	/*email three*/
	$("#delete-three").click(function(){
		chrome.storage.sync.get("email_three", function(addresses){
			var new_email_three = "";
			if (addresses.email_three){
				new_email_three = "";
			}
			chrome.storage.sync.set({"email_three": new_email_three})
			$("#display-email-three").text(new_email_three);
			$("#email-three").val('');
		});
	});

	/*email four*/
	$("#delete-four").click(function(){
		chrome.storage.sync.get("email_four", function(addresses){
			var new_email_four = "";
			if (addresses.email_four){
				new_email_four = "";
			}
			chrome.storage.sync.set({"email_four": new_email_four})
			$("#display-email-four").text(new_email_four);
			$("#email-four").val('');
		});
	});

	/*email five*/
	$("#delete-five").click(function(){
		chrome.storage.sync.get("email_five", function(addresses){
			var new_email_five = "";
			if (addresses.email_five){
				new_email_five = "";
			}
			chrome.storage.sync.set({"email_five": new_email_five})
			$("#display-email-five").text(new_email_five);
			$("#email-five").val('');
		});
	});

});