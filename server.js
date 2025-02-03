const express = require('express');
const app = express();
const port = 3000;

// Function to calculate the nth Fibonacci number
const fibonacci = (n) => {
  if (n <= 1) return n;
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return b;
};

// Endpoint to get the nth Fibonacci number
app.get('/fibonacci', (req, res) => {
  const n = parseInt(req.query.n);

  // Validate that 'n' is a valid non-negative integer
  if (isNaN(n) || n < 0) {
    return res.status(400).json({ error: 'Input must be a non-negative integer' });
  }

  // Calculate the nth Fibonacci number
  const result = fibonacci(n);
  
  // Return the result in JSON format
  res.json({ fib: result });
});

app.listen(port, () => {
  console.log(`Fibonacci API listening at http://localhost:${port}`);
});
