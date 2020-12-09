## API REST with NodeJS + ExpressJS + MongoDb

A brief introduction to main **NodeJS** and **ExpressJS** principles with practical examples. Integration with **MongoDB** database.

### Running the API:

Open the project folder in the console and execute `make run-app` command.

### API Routes:

#### Create parrot

* Method: `POST`
* URL: `http://localhost:3000/api/parrots/create/`
* Request body data: 

1. `uniqueId: {type: Number, required: true}`

2. `type: {type: String, required: true}`

3. `name: {type: String, required: true}`

4. `age: {type: Number, required: true}`

5. `canSpeak: {type: Boolean, required: true}`

#### Get parrot

* Method: `GET`
* URL: `http://localhost:3000/api/parrots/get/:uniqueId`
* Request param:

1. `uniqueId: {type: Number, required: true}`



