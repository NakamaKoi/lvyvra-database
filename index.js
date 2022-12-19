const axios = require("axios")

let conn = null;

class Collection {
  constructor(collectionName, template = {}) {
    this.collname = collectionName
  }

  async findOne(funct) {
    axios.get(conn.url + this.collname).then(x => {
      var hasil = x
      hasil.data = []
      var pencarian = x.data.data.find(vl => funct(vl))
      hasil.data.push(pencarian)
      return hasil
    })
  }

  async findById(id) {
    axios.get(conn.url + this.collname).then(x => {
      var hasil = x
      hasil.data = []
      var pencarian = x.data.data.find(fd => fd._id === id)
      hasil.data.push(pencarian)
      return hasil
    })
  }

  async find(funct) {
    axios.get(conn.url + this.collname).then(x => {
      var hasil = x
      hasil.data = []
      var pencarian = x.data.data.filter(vl => funct(vl))
      hasil.data = pencarian
      return hasil
    })
  }

  async all() {
    return axios.get(conn.url + this.collname).then(x => x)
  }

  async save(data) {
    axios.get(conn.url + this.collname).then(x => {
      data.map(dt => {
        if(dt?._id) {
          x.data.find(np => np._id === dt._id).then(vl => vl = dt)
        } else {
          x.data.push(data)
        }
      })
      if (!(x?.collection === this.collname)) throw "Pastikan Sudah Benar"
      if (!x?.data) throw "Data Tidak Ada!"
      axios.post(url + this.collname, x)
    })

  }
}

class Lvyvra {
  constructor() {
    this.url = null
    this.Collection = Collection
  }
  
  connect(url, client) {
    conn = client
    this.url = url
  }
}

module.exports = Lvyvra
