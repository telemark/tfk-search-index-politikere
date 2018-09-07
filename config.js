module.exports = {
  JWT_KEY: process.env.JWT_KEY || 'Louie Louie, oh no, I got to go',
  SEARCH_SERVICE_URL: process.env.SEARCH_SERVICE_URL || 'https://search.service.com/api',
  SEARCH_SERVICE_INDEX: process.env.SEARCH_SERVICE_INDEX || 'politicians',
  SEARCH_SERVICE_INDEX_TYPE: process.env.SEARCH_SERVICE_INDEX_TYPE || 'politician',
  SOURCE_URL: process.env.SOURCE_URL || 'http://www.yoursite.com/api/politicians.json',
  SITE_URL: process.env.SITE_URL || 'http://www.yoursite.com/politicians'
}
