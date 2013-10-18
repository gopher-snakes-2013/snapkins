$LOAD_PATH.unshift(File.expand_path('.'))

require 'sinatra'
require 'sinatra/activerecord'
require './models/snapkin'

ActiveRecord::Base.establish_connection(ENV['DATABASE_URL'] || 'postgres://localhost/snapkins')

get '/' do
  redirect '/canvas'
end

get '/canvas' do
  erb :canvas
end

