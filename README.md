# lvyvra-database
## How to use

```js
const { Collection } = require("lvyvra-database")
const Books = new Collection("Books")
Books.bind(urlDatabase) //Save Well
```

## Collection Method

### findOne

```js
const Books = new Collection("Books")
Books.bind(urlDatabase) //Save Well

Books.findOne(x => x.title === "My Life").then(({collectionName, data}) => {
  console.log(data)
})
```
