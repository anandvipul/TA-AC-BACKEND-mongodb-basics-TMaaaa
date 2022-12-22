### Create a database named blog.
```
use blog
```
### Create a collection called 'articles'.
```
db.createCollection("articles")
```
### Insert multiple documents(at least 3) into articles. It should have fields
```js
let article = {
    title: "",
    createdAt: Date(),
    details: "",
    author: {
        name: "",
        email: "",
        age: 12
    }
}

let a = {
    title: "This is the first blog post",
    createdAt: Date(),
    details: "This blog Post is empty as it has placeholder options only!",
    author: {
        name: "Karla",
        email: "karla@url.com",
        age: 12
    }
}
```
---
```
db.articles.insertMany([{
    title: "This is the first blog post",
    createdAt: Date(),
    details: "This blog Post is empty as it has placeholder options only!",
    author: {
        name: "Karla",
        email: "karla@url.com",
        age: 12
    }
}, {
    title: "This is the second blog post",
    createdAt: Date(),
    details: "This blog Post is empty as it has placeholder options only!",
    author: {
        name: "Karla",
        email: "karla@url.com",
        age: 12
    }
}, {
    title: "This is the third blog post",
    createdAt: Date(),
    details: "This blog Post is empty as it has placeholder options only!",
    author: {
        name: "Karla",
        email: "karla@url.com",
        age: 12
    }
}, {
    title: "This is the fourth blog post",
    createdAt: Date(),
    details: "This blog Post is empty as it has placeholder options only!",
    author: {
        name: "Karla",
        email: "karla@url.com",
        age: 12
    }
}, {
    title: "This is the fifth blog post",
    createdAt: Date(),
    details: "This blog Post is empty as it has placeholder options only!",
    author: {
        name: "Karla",
        email: "karla@url.com",
        age: 12
    }
}])
```

```
db.articles.updateMany({}, {$set: {tags: ["js", "mongo"]}})
```

### Find a document using _id field.

```
db.articles.findOne({_id: ObjectId("63a4671351dd0e5b5c63fb56")})
```

### Find documents using title

```
db.articles.findOne({title: "This is the fifth blog post"})
db.articles.find({"author.name": "Karla"})
```

### Find document using a specific tag

```
db.articles.find({"tags": "js"})
```

### Update a author's name using article's title.
```
db.articles.update({title: "This is the second blog post"}, {$set: {"author.name": "Samuel"}})
```

### Rename details field to description from all articles in articles collection.
```
db.articles.update({}, {$rename: {"details": "description"}})
```

### Add Additional tag in the specified document

```
db.articles.update({title: "This is the second blog post"}, {$push: {"tags": "Last"}})
```

### Update an article's title using $set and without $set.
```
db.articles.update({title: "This is the first blog post"}, {$set: {"title": "Modified Title"}})
```

### find an article using title and increment author's age by 5.
```
db.articles.update({title: "This is the second blog post"}, {$inc: {"author.age": 5}})
```
### Delete a document using _id field with db.COLLECTION_NAME.remove()

```
db.articles.remove({_id: ObjectId("63a4671351dd0e5b5c63fb53")})
```

```
db.users.insertMany([
  {
    age: 49,
    name: "Maurice Brock",
    email: "wuk@hibpiz.ch",
    gender: "Female",
    sports: ["cricket", "football"],
    scores: [24, 35, 18, 16],
    weight: 45,
  },
  {
    age: 37,
    birthday: "7/15/1986",
    name: "Virgie Cunningham",
    email: "ezogafa@de.gm",
    gender: "Male",
    sports: ["football"],
    scores: [17, 35, 43],
    weight: 52,
  },
  {
    age: 48,
    birthday: "5/14/1961",
    name: "Alexander Holt",
    email: "han@mu.pe",
    gender: "Male",
    sports: ["cricket", "football", "TT"],
    scores: [24, 30, 16],
    weight: 55,
  },
  {
    age: 53,
    birthday: "11/15/1963",
    name: "Derek Dawson",
    email: "polril@now.de",
    gender: "Male",
    sports: ["cricket", "hockey"],
    scores: [20, 15, 38, 23],
    weight: 49,
  },
  {
    age: 34,
    birthday: "7/24/1964",
    name: "Cynthia Cobb",
    email: "wujjarpob@jecimpar.gu",
    gender: "Female",
    sports: ["cricket"],
    scores: [41, 17, 28],
    weight: 51,
  },
  {
    age: 33,
    birthday: "10/26/1982",
    name: "Isabella Atkins",
    email: "ononuzas@givhoz.ca",
    gender: "Female",
    sports: ["cricket", "football", "hockey", "TT"],
    scores: [14, 38, 29, 45, 20],
    weight: 49,
  },
  {
    age: 47,
    birthday: "10/12/1978",
    name: "Katharine Bryan",
    email: "zo@pebi.sa",
    gender: "Male",
    sports: ["TT", "hockey", "khokho"],
    scores: [27, 20, 34],
    weight: 58,
  },
  {
    age: 41,
    birthday: "1/28/1991",
    name: "Beatrice Fleming",
    email: "ufufsa@pujizren.tk",
    gender: "Female",
    sports: ["football", "khokho"],
    scores: [30, 20, 15, 29, 43],
    weight: 47,
  },
  {
    age: 26,
    birthday: "3/23/1998",
    name: "Tom Fields",
    email: "wasodjow@ofaba.gf",
    gender: "Female",
    sports: ["khokho"],
    scores: [37, 29, 18, 43, 49],
    weight: 50,
  },
  {
    age: 33,
    birthday: "11/14/1960",
    name: "Steve Ortega",
    email: "dupus@ca.ls",
    gender: "Female",
    sports: ["cricket", "football", "hockey"],
    scores: [12, 15, 20],
    weight: 51,
  },
  {
    age: 24,
    birthday: "1/5/1994",
    name: "Suraj Kumar",
    weight: 50,
    gender: "Male",
    sports: ["football", "cricket", "TT"],
  },
]);
```

### Find all males who play cricket.
```
db.users.find({$and: [{gender: "Male" }, {sports: "cricket"}]})

```
### Update user with extra golf field in sports array whose name is "Steve Ortega".
```
db.users.update({name: "Steve Ortega"}, {$push: {"sports": "golf"}})
```
### Find all users who play either 'football' or 'cricket'.
db.users.find({$or: [{sports: "football"}, {sports: "cricket"}]})
### Find all users whose name includes 'ri' in their name.
```
db.users.find({name: /ri/i})