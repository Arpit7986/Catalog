const fs = require('fs');

// Function to read and process each JSON file
function processJsonFile(fileName) {
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading the JSON file ${fileName}`, err);
            return;
        }

        // Parse the JSON data
        const input = JSON.parse(data);
        const n = input.keys.n; // Number of roots provided
        const k = input.keys.k; // Minimum number of roots needed

        console.log(`Processing file: ${fileName}`);
        console.log(`Number of roots (n): ${n}, Required roots (k): ${k}`);

        // Initialize arrays to store (x, y) pairs
        let points = [];

        // Loop over each key in the input, ignoring non-root keys like "keys"
        for (let i in input) {
            if (input.hasOwnProperty(i) && i !== "keys") {
                // Extract the base and value for this root
                const base = parseInt(input[i].base);
                const value = input[i].value;

                // Decode the value from the given base
                const decodedValue = parseInt(value, base);

                // Push the (x, y) pair (i, decodedValue) to the points array
                points.push([parseInt(i), decodedValue]);

                // Print debugging info
                console.log(`Key: ${i}, Base: ${base}, Encoded Value: ${value}, Decoded Value: ${decodedValue}`);
            }
        }

        console.log("\nDecoded points:", points);

        // Check if we have enough points (k points are needed)
        if (points.length < k) {
            console.error("Not enough points to solve the polynomial!");
            return;
        }

        // Apply Lagrange interpolation to find the constant term (c) of the polynomial
        const constantTerm = lagrangeInterpolation(0, points);

        // Print the constant term
        console.log("\nThe secret (constant term c) is:", constantTerm);
    });
}

// Function to compute Lagrange interpolation at a given x
function lagrangeInterpolation(x, points) {
    const n = points.length;
    let result = 0;

    // Iterate through all points
    for (let i = 0; i < n; i++) {
        let xi = points[i][0];
        let yi = points[i][1];

        // Compute the Lagrange basis polynomial
        let term = yi;
        for (let j = 0; j < n; j++) {
            if (i !== j) {
                let xj = points[j][0];
                term *= (x - xj) / (xi - xj);
            }
        }

        // Add the current term to the result
        result += term;
    }

    return Math.round(result); // Round the result to handle potential floating-point errors
}

// Main function to read multiple JSON files
function main() {
    // List of JSON files to process
    const jsonFiles = ['input1.json', 'input2.json']; // Add more file names as needed

    // Process each JSON file
    jsonFiles.forEach(fileName => {
        processJsonFile(fileName);
    });
}

// Start the processing
main();
