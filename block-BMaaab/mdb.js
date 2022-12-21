// create a database of your country name.
// check list of databases to see newly created database.
// check which database you are currently connected to ?

let mongo = new Mongo("localhost:27017");
let db = mongo.getDB("admin");
