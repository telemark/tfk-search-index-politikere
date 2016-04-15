'use strict'

var Wreck = require('wreck')
var config = require('./config')
var addIndex = require('./lib/add-index')
var deleteIndex = require('./lib/delete-index')
var repackPolitician = require('./lib/repack-politician')
var wreckOptions = {
  json: true
}

function indexPoliticians (results) {
  var list = JSON.parse(JSON.stringify(results))

  function next () {
    if (list.length > 0) {
      var politician = list.pop()
      var content = repackPolitician(politician)

      addIndex(content, function (err, payload) {
        if (err) {
          console.error(err)
        } else {
          console.log(payload)
          next()
        }
      })
    } else {
      console.log('Finished indexing')
    }
  }

  next()
}

function handlePoliticians (error, repsonse, payload) {
  if (error) {
    console.error(error)
  } else {
    indexPoliticians(payload)
  }
}

deleteIndex(function (error, payload) {
  if (error) {
    console.error(error)
  } else {
    console.log(payload)
    Wreck.get(config.SOURCE_URL, wreckOptions, handlePoliticians)
  }
})
