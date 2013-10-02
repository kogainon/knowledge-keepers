require 'slim'
require './app'

use Rack::Deflater

Slim::Engine.default_options[:pretty] = true

use Rack::Static,
  root: 'public',
  urls: ['/fonts', '/images', '/javascripts', '/stylesheets']

Rack::Mime::MIME_TYPES.merge!({
  '.flv' => 'video/flash',
  '.mp4' => 'video/mp4'
})

run Sinatra::Application
