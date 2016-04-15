'use strict'

var config = require('../config')
var buildDescription = require('./build-description')

function repackPolitician (data) {
  if (!data) {
    throw new Error('Missing required input')
  }

  var json = {
    title: data.name,
    description: buildDescription(data),
    url: config.SITE_URL + '/' + data.recno,
    data: {
      mobile: data.mobilePhone,
      mail: data.publicMail,
      committees: data.committees
    }
  }

  return json
}

module.exports = repackPolitician
