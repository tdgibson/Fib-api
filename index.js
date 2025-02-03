const express = require('express');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 3000;  // Default to 3000 if PORT isn't set
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


app.use(cors());
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
    res.json({ message: "Hello, world!" });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
