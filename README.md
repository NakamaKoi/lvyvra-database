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
  console.log(data) //Return One Object On Array
})
```

### find

```js
const Books = new Collection("Books")
Books.bind(urlDatabase) //Save Well

Books.find(x => x.years === 2000).then(({collectionName, data}) => {
  console.log(data) //Return All Object Have years 2000
})
```

