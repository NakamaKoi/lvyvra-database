const axios = require("axios")
let url;

class Collection {
  constructor(collectionName, template = {}) {
    this.collname = collectionName
  }

  async findOne(funct) {
    axios.get(url + this.collname).then(x => {
      x.data.data = []
      x.data.data.push(x.data.data.find(funct))
      return x
    })
  }

  async findById(id) {
    axios.get(url + this.collname).then(x => {
      x.data.data = []
      x.data.data.push(x.data.data.find(fd => fd._id === id))
      return x
    })
  }

  async find(funct) {
    axios.get(url + this.collname).then(x => {
      x.data.data = x.data.data.filter(funct)
      return x
    })
  }

  async all() {
    return axios.get(url + this.collname).then(x => x)
  }

  async save(data) {
    axios.get(url + this.collname).then(x => {
      data.map(dt => {
        x.data.find(np => np._id === dt._id).then(vl => vl = dt)
      })
      if (!(x?.collection === this.collname)) throw "Pastikan Sudah Benar"
      if (!x?.data) throw "Data Tidak Ada!"
      axios.post(url + this.collname, x)
    })

  }
}

module.exports = {
  connect: (newUrl) => {
    url = newUrl
    console.log("setted")
  },
  Collection: Collection
}
