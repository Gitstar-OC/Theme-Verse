const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Route
app.post('/api/contact', (req, res) => {
    const { name, email, socialMedia, position, company, figmaLink, message } = req.body;
    console.log(`Received message from ${name} (${email}): ${message}`);
    res.json({ message: 'Form submitted successfully' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
