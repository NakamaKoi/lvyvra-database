const axios = require("axios")

class Collection {
  constructor(collectionName, template = {}) {
    this.collname = collectionName
  }

  bind(url) {
    this.url = url
  }

  async findOne(funct) {
    var axi = axios.get(this.url + this.collname).then(x => x.data)
    var axi = x.data
    var hasil = x.data
    hasil.data = []
    console.log(axi.data)
  }

  async findById(id) {
    return axios.get(this.url + this.collname).then(x => {
      var axi = x.data
      var hasil = x.data
      hasil.data = []
      var pencarian = axi.data.find(fd => fd._id === id)
      hasil.data.push(pencarian)
      return hasil
    })
  }

  async find(funct) {
    var axi = axios.get(this.url + this.collname).then(x => x.data)
    var axi = x.data
    var hasil = x.data
    hasil.data = []
    console.log(axi.data)
  }

  async all() {
    return axios.get(this.url + this.collname).then(x => x.data)
  }

  async save(data) {
    return axios.get(this.url + this.collname).then(x => {
      var col = x.data
      data.map(dt => {
        if(dt?._id) {
          col.data.find(np => np._id === dt._id).then(vl => vl = dt)
        } else {
          col.data.push(data)
        }
      })
      if (!(col?.collection === this.collname)) throw "Pastikan Sudah Benar"
      if (!col?.data) throw "Data Tidak Ada!"
      axios.post(url + this.collname, col)
    })

  }
}

module.exports = { Collection: Collection }
