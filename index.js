const axios = require("axios")

class Collection {
  constructor(collectionName) {
    this.collname = collectionName
  }

  bind(url) {
    this.url = url
  }

  async findOne(funct) {
    return axios.get(this.url + this.collname).then(x => {
      return {collection: x.data.collection, data: x.data.data.find(funct)}
    })
  }

  async findById(id) {
    return axios.get(this.url + this.collname).then(x => {
      return {collection: x.data.collection, data: x.data.data.find(cv => cv._id === id)}
    })
  }

  async find(funct) {
    return axios.get(this.url + this.collname).then(x => {
      return {collection: x.data.collection, data: x.data.data.filter(funct)}
    })
  }

  async all() {
    return axios.get(this.url + this.collname).then(x => x.data)
  }

  async save(data) {
    if(!Array.isArray(data)) data = [data]
    return axios.post(this.url + this.collname, data)
  }
}

module.exports = { Collection: Collection }
