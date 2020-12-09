require('dotenv').config({path: `../../.env`});
const mongoose = require('mongoose');

export default class Connection {
    private readonly connectionString: string;

    constructor() {
        this.connectionString = process.env.MONGODB_CONNECTION_URL;
    }

    public setupDatabaseConnection = () => {
        mongoose.connect(this.connectionString, {useNewUrlParser: true, useUnifiedTopology: true})
            .then(db => console.log('Successfully connected to the database.'))
            .catch(err => console.log(err));
    }
}