const axios = require('axios')
const path = require('path')
const addIndex = require('./lib/add-index')
const deleteIndex = require('./lib/delete-index')
const repackPolitician = require('./lib/repack-politician')
const prepareIndex = require('./lib/prepare-index')
const logger = require('./lib/logger')
const env = process.argv[2]

if (env) {
  const envFilePath = path.resolve(process.cwd(), env)
  logger('info', ['index', 'loading environment', env])
  require('dotenv').config({ path: envFilePath })
} else if (process.env.NODE_ENV !== 'production') {
  logger('info', ['index', 'loading environment', '.env'])
  require('dotenv').config()
} else {
  logger('warn', ['index', 'no environment loaded'])
}

async function indexPoliticians () {
  const { data } = await axios.get(process.env.SOURCE_URL)
  if (!process.env.NO_DELETE_INDEX) {
    const msg = await deleteIndex()
    logger('info', ['index', 'indexAnsatte', 'index deleted', JSON.stringify(msg)])
  } else {
    logger('info', ['index', 'indexAnsatte', 'no delete index'])
  }
  let list = data.map(repackPolitician).map(prepareIndex)
  logger('info', ['index', 'indexPoliticians', 'politicians to index', list.length])
  let success = 0
  let fail = 0

  const next = async () => {
    if (list.length > 0) {
      const politician = list.pop()
      try {
        await addIndex(politician)
        success++
      } catch (error) {
        fail++
      }
      await next()
    } else {
      logger('info', ['index', 'indexPoliticians', 'finished', 'success', success, 'fail', fail])
      process.exit(0)
    }
  }
  await next()
}

indexPoliticians()
