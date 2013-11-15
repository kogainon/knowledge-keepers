require 'sinatra'

get '/*' do
  @cloudfront_url = 'http://d1vnylnhovobpx.cloudfront.net'
  @request_url = request.host
  slim :index
end
