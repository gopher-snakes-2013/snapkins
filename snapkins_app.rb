$LOAD_PATH.unshift(File.expand_path('.'))

require 'sinatra'
require 'sinatra/activerecord'
require './models/snapkin'
require './models/version'

ActiveRecord::Base.establish_connection(
  ENV['DATABASE_URL'] || 'postgres://localhost/snapkins'
  )

get '/' do
  redirect '/canvas'
  # erb :index
end

get '/canvas' do
  erb :canvas
end

post '/canvas' do
  # p params[:canvas_key]
  Version.create(image_url: params[:canvas_key])
  200
end


