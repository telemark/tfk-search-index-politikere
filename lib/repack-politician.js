const buildDescription = require('./build-description')

module.exports = data => {
  if (!data) {
    throw new Error('Missing required input')
  }

  return {
    title: data.name,
    description: buildDescription(data),
    url: `${process.env.SITE_URL}/politicians/${data.recno}`,
    data: {
      mobile: data.mobilePhone,
      mail: data.publicMail,
      committees: data.committees,
      committeeIds: data.committeeIds
    }
  }
}
