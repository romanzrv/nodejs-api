const express = require('express');
const dotenv = require('dotenv');
const App = express();

dotenv.config({path: `../.env`});
const PORT = process.env.APP_PORT;

App.use(express.json());

App.listen(PORT, () => {
    console.log(`Server successfully started on port: ${PORT}`);
});