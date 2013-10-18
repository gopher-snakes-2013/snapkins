$LOAD_PATH.unshift(File.expand_path('.'))

require 'sinatra'
require 'sinatra/activerecord'
require './models/snapkin'
require './models/version'

ActiveRecord::Base.establish_connection(ENV['DATABASE_URL'] || 'postgres://localhost/snapkins')

get '/' do
  redirect '/canvas'
end

get '/canvas' do
  erb :canvas
end

post '/canvas' do
  Version.create(image_url: params[:data])
  p "*"*60
  p Version.all
  # p params[:data]
  Snapkin.destroy_all
  p "!"*60
  p Snapkin.all
  200
end


