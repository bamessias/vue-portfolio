import axios from 'axios'
import * as _ from 'lodash'

const apiHost = process.env.API_HOST

export const sendEmail = (formData) => {
  let emailParams = {
    to: ['charlesbb999@gmail.com'],
    cc: [formData.emailaddress],
    subject: 'From ' + formData.firstname + formData.lastname + ' Title/Role: ' + formData.title,
    body: 'Phone No: ' + formData.phoneno + '\nCompany Name:' + formData.companyname + '\nMessage: ' + formData.message
  }

  return axios.post(`${apiHost}/email`, emailParams)
    .then(function (response) {
      console.log(response)
      return true
    })
    .catch(function (error) {
      console.log(error)
      return Promise.reject(error)
    })
}
