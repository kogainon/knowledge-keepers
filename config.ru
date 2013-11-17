require 'slim'
require './app'

use Rack::Deflater

Slim::Engine.default_options[:pretty] = true

use Rack::Static,
  root: 'public',
  header_rules: [
    [:all, { 'Cache-Control' => 'public, max-age=1' }]
  ],
  urls: ['/fonts', '/images', '/javascripts', '/stylesheets']

Rack::Mime::MIME_TYPES.merge!({
  '.jpg' => 'image/jpeg'
})

use Rack::Deflater
run Sinatra::Application
