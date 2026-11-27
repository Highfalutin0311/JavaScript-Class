// We will use a for loop to count from 0 to 10
for (let i = 0; i <= 10; i++) {
	
    // Check if the number is even or odd
    if (i % 2 == 0) {
        document.getElementById("numbers").innerHTML +=
            "Count " + i + " is even<br>";
    } else {
        document.getElementById("numbers").innerHTML +=
            "Count " + i + " is odd<br>";
    }
}
// Ask the user for a number between 5 and 20
let myNum = Number(prompt("Enter a number between 5 and 20:"));

// Check that the number is within the range
while (myNum < 5 || myNum > 20 || isNaN(myNum)) {
    myNum = Number(prompt("Please enter a number between 5 and 20:"));
}

// Start the counter at 1
let count = 1;

//Now use a do while loop to count up to myNum
do {
    document.getElementById("counter").innerHTML +=
        "Count: " + count + "<br>";
    count++;
} while (count <= myNum);

// Store the five subjects in an array
let subjects = [
    "Accounting",
    "Algebra",
    "Programming",
    "Art",
    "Data Analytics"
];
// Display each subject using forEach
subjects.forEach(function(subject) {
    document.getElementById("subjects").innerHTML +=
        subject + "<br>";
});
// Display the subjects separated by commas
document.getElementById("subjectList").innerHTML =
    subjects.join(", ");
