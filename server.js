const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the BCHTML5 directory
app.use(express.static(path.join(__dirname)));

// Route for serving the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
