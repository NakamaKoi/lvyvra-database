const axios = require("axios")

class Collection {
  constructor(collectionName, template = {}) {
    this.collname = collectionName
  }

  bind(url) {
    this.url = url
  }

  async findOne(funct) {
    return axios.get(this.url + this.collname).then(x => {
      var hasil = x.data
      hasil.data = []
      for (let i = 0; i < x.data.data.length; i++) {
        if(funt(x.data.data[i], i)) {
           hasil.data[0] = x.data.data[i]
           return hasil
        }
      }
    })
  }

  async findById(id) {
    return axios.get(this.url + this.collname).then(x => {
      var hasil = x.data
      hasil.data = []
      var pencarian = x.data.data.find(fd => fd._id === id)
      hasil.data.push(pencarian)
      return hasil
    })
  }

  async find(funct) {
    return axios.get(this.url + this.collname).then(x => {
      var hasil = x.data
      hasil.data = []
      var hasil = x.data
      hasil.data = []
      for (let i = 0; i < x.data.data.length; i++) {
        if (funt(x.data.data[i], i)) {
           hasil.data.push(x.data.data[i])
        }
      }
      return hasil
    })
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
