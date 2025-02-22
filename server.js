const mongoose = require('mongoose');
const { MONGODB_URI, PORT } = require('./utils/config');
const app = require('./app');

console.log('connecting to database......');
mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('connected to database!');
        
        // Start the server
        app.listen(PORT, () => {
            console.log(`Server is running @ http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.log('Error connecting to database: ${error} ');
    })