document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the input values
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
    const weight = parseFloat(document.getElementById('weight').value);

    // Calculate BMI
    const bmi = weight / (height * height);

    // Display the result
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `Your BMI is: ${bmi.toFixed(2)}`;
});
