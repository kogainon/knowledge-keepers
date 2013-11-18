require 'sinatra'

get '/*' do
  @cloudfront_url = 'http://d1vnylnhovobpx.cloudfront.net'
  @environment = settings.environment || 'development'
  @request_url = request.host
  slim :index
end
