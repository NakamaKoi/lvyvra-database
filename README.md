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

### findById

```js
const Books = new Collection("Books")
Books.bind(urlDatabase) //Save Well

Books.findById("Ixxxxxxxxxxx").then(({collectionName, data}) => {
  console.log(data) //Return Object Have that id
})
```

### all

```js
const Books = new Collection("Books")
Books.bind(urlDatabase) //Save Well

Books.all().then(({collectionName, data}) => {
  console.log(data) //Return All Object in this Collection
})
```

### save

```js
Books.save(jsonObject || array)
```

You can store with two data types, that is arrays and objects. You can store multiple data at once in an array 
