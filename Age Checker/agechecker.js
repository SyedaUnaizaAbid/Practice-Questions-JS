function checkAge() {
	let ageInput = document.getElementById("age").value.trim();
	let result = "";

	if (ageInput === "") {
		result = "You have not entered your age.";
	} else {
		let age = Number(ageInput);

		if (isNaN(age) || age < 0) {
			result = "You have entered an invalid age.";
		} else if (age >= 0 && age <= 12) {
			result = "You are a Child.";
		} else if (age >= 13 && age <= 19) {
			result = "You are a Teenager.";
		} else if (age >= 20 && age <= 59) {
			result = "You are an Adult.";
		} else if (age >= 60) {
			result = "You are a Senior Citizen.";
		} else {
			result = "You have entered an invalid age.";
		}
	}

	document.getElementById("result").textContent = result;
}
