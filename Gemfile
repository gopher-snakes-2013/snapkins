source 'https://rubygems.org'
ruby "1.9.3"

gem 'sinatra'
gem 'sinatra-activerecord'
gem 'thin' #prevents unknown body length error, faster browser


group :production, :staging do
# Bundler lets you use groups to only install gems in particular environments
# http://bundler.io/v1.3/groups.html



end


group :development, :test do
# Heroku ignores development/test groups
# https://devcenter.heroku.com/articles/getting-started-with-ruby#runtime-dependencies-on-development-test-gems
  gem 'dotenv'
  gem 'shotgun'
  gem 'capybara'
  gem 'rspec'
  gem 'jasmine'
end

