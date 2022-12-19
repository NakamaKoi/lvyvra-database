let url;

class Collection {
  constructor(collectionName, template = {}) {
    this.collname = collectionName
  }

  findOne(funct) {
    axios.get(url + collname).then(x => {
      x.data.data = []
      x.data.data.push(x.data.data.find(funct))
      return x
    })
  }

  findById(id) {
    axios.get(url + collname).then(x => {
      x.data.data = []
      x.data.data.push(x.data.data.find(fd => fd._id === id))
      return x
    })
  }

  find(funct) {
    axios.get(url + collname).then(x => {
      x.data.data = x.data.data.filter(funct)
      return x
    })
  }

  save(data) {
    axios.get(url + collname).then(x => {
      data.map(dt => {
        x.data.find(np => np._id === dt._id).then(vl => vl = dt)
      })
      if (!(x?.collection === this.collname)) throw "Pastikan Sudah Benar"
      if (!x?.data) throw "Data Tidak Ada!"
      axios.post(url + collname, x)
    })

  }
}

module.exports = {
  connect: (newUrl) => {
    url = newUrl
    console.log("setted")
  },
  collection: Collection
}
