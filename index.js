import axios from "axios";

class Collection {
  constructor(collectionName, template) {
    this.collname = collectionName
    this.template = template ? template : {}
  }

  bind(url) {
    this.url = url
  }

  async findOne(funct) {
    return axios.get(this.url + this.collname).then(x => {
      return { collection: x.data.collection, data: x.data.data.find(funct) }
    })
  }

  async findById(id) {
    return axios.get(this.url + this.collname).then(x => {
      return { collection: x.data.collection, data: x.data.data.find(cv => cv._id === id) }
    })
  }

  async find(funct) {
    return axios.get(this.url + this.collname).then(x => {
      return { collection: x.data.collection, data: x.data.data.filter(funct) }
    })
  }

  async all() {
    return axios.get(this.url + this.collname).then(x => x.data)
  }

  async save(data) {
    if (!Array.isArray(data)) data = [data]
    data = data.map(x => Object.assign(this.template, x))
    return axios.post(this.url + this.collname, data)
  }
}

module.exports = { Collection: Collection }
