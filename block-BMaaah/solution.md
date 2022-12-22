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

