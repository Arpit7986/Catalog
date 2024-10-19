

# Shamir's Secret Sharing - Node.js Application

This application implements a simplified version of Shamir's Secret Sharing algorithm using Node.js. It reads multiple JSON files containing roots of a polynomial, decodes the values, and computes the constant term of the polynomial.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 12 or higher) installed on your machine.
- Basic understanding of polynomial mathematics and Lagrange interpolation.

## Getting Started

1. **Clone the repository** (if applicable):

npm i
node app.js
Prepare the input JSON files:

Create JSON files named input1.json, input2.json, input3.json, etc. in the same directory as app.js. Each file should follow the specified format:

json
Copy code
{
    "keys": {
        "n": 4,
        "k": 3
    },
    "1": {
        "base": "10",
        "value": "4"
    },
    "2": {
        "base": "2",
        "value": "111"
    },
    "3": {
        "base": "10",
        "value": "12"
    },
    "6": {
        "base": "4",
        "value": "213"
    }
}
Run the application:

Open your terminal or command prompt and navigate to the directory where app.js is located. Use the following command to execute the application:

node app.js
Output
The application will print the number of roots, the required roots, the decoded points, and the secret constant term (c) for each JSON file processed.

Example Output
plaintext
Copy code
Processing file: input1.json
Number of roots (n): 4, Required roots (k): 3
Key: 1, Base: 10, Encoded Value: 4, Decoded Value: 4
Key: 2, Base: 2, Encoded Value: 111, Decoded Value: 7
Key: 3, Base: 10, Encoded Value: 12, Decoded Value: 12
Key: 6, Base: 4, Encoded Value: 213, Decoded Value: 39

Decoded points: [ [ 1, 4 ], [ 2, 7 ], [ 3, 12 ], [ 6, 39 ] ]
The secret (constant term c) is: 13
