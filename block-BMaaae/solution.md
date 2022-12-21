### create a database named sports.
```
use sports
```
### list all databases present in local mongod server.
```
show dbs
```
### create 3 collections named cricket, football, TT in sports databse.
```
db.createCollection("cricket")
db.createCollection("football")
db.createCollection("TT")
```
### add multiple players in those collections which should have fields like name, age and email and bid_price.
```
db.cricket.insertMany([{name: "Chaurasia", age: 23, email: "chaurasia@chaur.com", big_price: "balls"}, {name: "Kandal", age: 23, email: "Kandal@chaur.com", big_price: "bat"}])
db.football.insertMany([{name: "Chaurasia", age: 23, email: "chaurasia@chaur.com", big_price: "balls"}, {name: "Kandal", age: 23, email: "Kandal@chaur.com", big_price: "bat"}])
db.TT.insertMany([{name: "Chaurasia", age: 23, email: "chaurasia@chaur.com", big_price: "balls"}, {name: "Kandal", age: 23, email: "Kandal@chaur.com", big_price: "bat"}])
```
### list all collections in sports database.
```
show collections
```
### rename TT collection to tennis.
```
db.TT.renameCollection("tennis")
```
### create a capped collection called khokho which should have max 3 documents. Try inserting more than 3 and see what happens?
```
db.createCollection("khokho", {capped: true, size: 1024, max: 3})
```
### check whether a collection is capped or not?
```
db.khokho.isCapped()
```
### drop all documents from football collection.
```
db.football.remove({})
```
### delete cricket collection completely.
```
db.cricket.drop()
```
### delete sports database.
db.dropDatabase()
### check which database you are connected to ?
db
### connect to test database
use test