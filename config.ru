require 'rack/coffee'
require 'sass/plugin/rack'
require 'slim'
require './app'

use Rack::Deflater

use Sass::Plugin::Rack

Slim::Engine.default_options[:pretty] = true

use Rack::Coffee,
  root: 'public',
  urls: '/javascripts/'

use Rack::Static,
  root: 'public',
  urls: ['/fonts', '/images', '/javascripts', '/stylesheets']

Rack::Mime::MIME_TYPES.merge!({
  '.flv' => 'video/flash',
  '.mp4' => 'video/mp4'
})

run Sinatra::Application
