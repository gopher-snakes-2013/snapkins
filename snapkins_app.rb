$LOAD_PATH.unshift(File.expand_path('.'))

require 'sinatra'
require 'sinatra/activerecord'


# This loads environment variables from the .env file
require 'dotenv'
Dotenv.load

