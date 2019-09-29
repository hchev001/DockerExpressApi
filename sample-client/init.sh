#!/usr/bin/env bash

# Set exit script on error.
set -o errexit

# Check required environment variables
# Disabling, according the documentation in Create Reach App
# NODE_ENV is set to development when "npm start" is invoked
# NODE_ENV is set to test when "npm test" is invoked
# NODE_ENV is set to production when "npm build" is invoked,
# and the envirionment variables are read a build time
# https://facebook.github.io/create-react-app/docs/adding-custom-environment-variables
# if [[ ! $NODE_ENV ]]; then
#   >&2 printf "\nEEROR NODE_ENV variable is not set to one of: development or prod\n\n"
#   exit 1
# fi

# Move to project directory
cd $PROJECT

# Install dependencies
npm config set cache ../.npm
npm install
# npm rebuild node-sass


# npm run start



# if [[ $NODE_ENV == "prod" ]]; then
#   # Build and run application
#   npm run-script build
#   npm start
# fi
