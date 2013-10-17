$LOAD_PATH.unshift(File.expand_path('.'))

require 'sinatra'
require 'sinatra/activerecord'

ActiveRecord::Base.establish_connection(ENV['DATABASE_URL'] || 'postgres://localhost/snapkins')

get '/' do
  erb :index
end
