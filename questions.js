// Practice Q1:
function greet() {
	let name = prompt("Enter your name:");
	return `Hello, ${name}!`;
}

// Practice Q2:
function addNumbers() {
	let a = parseInt(prompt("Enter first number to find sum:"));
	let b = parseInt(prompt("Enter second number to find sum:"));
	return a + b;
}

// Practice Q3:
function square() {
	let num = parseInt(prompt("Enter a number to find square:"));
	return num * num;
}

// Practice Q4:
function checkEvenOdd() {
	let num = parseInt(
		prompt("Enter a number to check if your number is even or odd:")
	);
	return num % 2 === 0 ? "Even" : "Odd";
}

// Practice Q5:
function factorial() {
	let n = parseInt(prompt("Enter a number to find factorial of your number:"));
	if (n < 0) return "Factorial not defined for negative numbers";
	let result = 1;
	for (let i = 1; i <= n; i++) {
		result *= i;
	}
	return result;
}

// Display results on HTML page
const outputDiv = document.getElementById("output");
outputDiv.innerHTML = `
    <p>${greet()}</p>
    <p>Sum: ${addNumbers()}</p>
    <p>Square: ${square()}</p>
    <p>Even/Odd: ${checkEvenOdd()}</p>
    <p>Factorial: ${factorial()}</p>
`;
