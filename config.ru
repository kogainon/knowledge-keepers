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

use Rack::Deflater
run Sinatra::Application
