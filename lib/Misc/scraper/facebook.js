const fetch = require('node-fetch')
const config = require('../../../config')

class Facebook {
 constructor(url) {
  this.url = url
  this.apiUrl = config.BASE_API + '/download/facebook?url='
 }

 async fetchData() {
  try {
   const response = await fetch(`${this.apiUrl}${this.url}`)
   const data = await response.json()
   return data
  } catch (error) {
   console.error('Error fetching data:', error)
   return null
  }
 }

 async getImage() {
  const data = await this.fetchData()
  return data.data.image
 }

 async getHdVideo() {
  const data = await this.fetchData()
  return data.data.hd
 }

 async getSdVideo() {
  const data = await this.fetchData()
  return data.data.sd
 }
}
module.exports = Facebook
