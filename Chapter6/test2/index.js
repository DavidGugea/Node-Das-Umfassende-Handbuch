const express = require('express');
const process = require('process');
const path = require('path');
const logger = require('./middleware/logger.js');

const app = express();
const PORT = process.env.PORT || 5000;

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Members API routes
app.use('/api/members', require('./routes/api/members.js'));

app.listen(
    PORT,
    () => {
        console.log(`Server started on port ${PORT}`);
    }
);