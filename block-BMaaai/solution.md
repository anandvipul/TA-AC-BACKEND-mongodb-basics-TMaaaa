mongoimport --host <host_name> --username <user_name> --password <password> --db
DB_NAME --collection COLLECTION_NAME --file cities.json(file location) --jsonArray
(an array of json data)

```
mongoimport --host localhost:27017 --username <user_name> --password <password> --db
test --collection users --file cities.json(file location) --jsonArray
```

```
mongoexport --db state --collection cities --out ~/Desktop/states/city.json --jsonArray
```

```
mongoimport -d DB_NAME -c COLLECTION_NAME --type csv --file elections.csv(file location) --headerline(including header)
```