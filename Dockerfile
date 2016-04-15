###########################################################
#
# Dockerfile for tfk-search-index-politikere
#
###########################################################

# Setting the base to nodejs 4.4.2
FROM mhart/alpine-node:4.4.2

# Maintainer
MAINTAINER Geir Gåsodden

#### Begin setup ####

# Installs git
RUN apk add --update git && rm -rf /var/cache/apk/*

# Bundle app source
COPY . /src

# Change working directory
WORKDIR "/src"

# Install dependencies
RUN npm install --production

# Env variables
ENV JWT_KEY "Louie Louie, oh no, I got to go"
ENV SEARCH_SERVICE_URL https://search.service.com/api
ENV SEARCH_SERVICE_INDEX politicians
ENV SEARCH_SERVICE_INDEX_TYPE politician
ENV SOURCE_URL "http://www.yoursite.com/api/politicians.json"
ENV SITE_URL "http://www.yoursite.com/politicians"

# Startup
ENTRYPOINT node index