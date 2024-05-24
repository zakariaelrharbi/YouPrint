const express = require('express');
const dotenv = require("dotenv");
const connect = require('./config/database');
dotenv.config();

const app = express();
const PORT = process.env.SERVER_PORT || 5000;

async function main() {
    await connect();
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

main();
