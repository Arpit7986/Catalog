Here’s the complete README file formatted properly, with clear headings and code blocks:

### README.md

```markdown
# Shamir's Secret Sharing - Node.js Application

This application implements a simplified version of Shamir's Secret Sharing algorithm using Node.js. It reads multiple JSON files containing roots of a polynomial, decodes the values, and computes the constant term of the polynomial.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 12 or higher) installed on your machine.
- Basic understanding of polynomial mathematics and Lagrange interpolation.

## Getting Started

1. **Clone the repository** (if applicable):

   ```bash
   git clone https://github.com/yourusername/yourrepository.git
   cd yourrepository
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Prepare the input JSON files**:

   Create JSON files named `input1.json`, `input2.json`, `input3.json`, etc. in the same directory as `app.js`. Each file should follow the specified format:

   ```json
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
   ```

4. **Run the application**:

   Open your terminal or command prompt and navigate to the directory where `app.js` is located. Use the following command to execute the application:

   ```bash
   node app.js
   ```

## Output

The application will print the number of roots, the required roots, the decoded points, and the secret constant term (c) for each JSON file processed.

### Example Output

```plaintext
Processing file: input1.json
Number of roots (n): 4, Required roots (k): 3
Key: 1, Base: 10, Encoded Value: 4, Decoded Value: 4
Key: 2, Base: 2, Encoded Value: 111, Decoded Value: 7
Key: 3, Base: 10, Encoded Value: 12, Decoded Value: 12
Key: 6, Base: 4, Encoded Value: 213, Decoded Value: 39

Decoded points: [ [ 1, 4 ], [ 2, 7 ], [ 3, 12 ], [ 6, 39 ] ]
The secret (constant term c) is: 13
```

## Contributing

If you'd like to contribute to this project, please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.
```

### Notes:
- Replace `https://github.com/yourusername/yourrepository.git` with the actual URL of your GitHub repository if applicable.
- Adjust any details based on the specific requirements or features of your project.
- Make sure to add any additional sections you think are relevant for your audience or project.
