require 'webrick'

module WEBrick
  module HTTPServlet
    FileHandler.add_handler('rb', CGIHandler)
  end
end

server = WEBrick::HTTPServer.new({
  :DocumentRoot => '.',
  :CGIInterpreter => WEBrick::HTTPServlet::CGIHandler::Ruby,
  :Port => '3000',
})
['INT', 'TERM'].each {|signal|
  Signal.trap(signal){ server.shutdown }
}

# WEBrick::HTTPServlet::FileHandlerをWEBrick::HTTPServlet::ERBHandlerに変更する
# 'test.html'を'test.html.erb'に変更する
# server.mount('/test', WEBrick::HTTPServlet::ERBHandler, 'test.html.erb')
server.mount('/', WEBrick::HTTPServlet::ERBHandler, 'kadai.html.erb')
server.mount('/indicate.cgi', WEBrick::HTTPServlet::CGIHandler, 'indicate.rb')
server.mount('/goya.cgi', WEBrick::HTTPServlet::CGIHandler, 'goya.rb')
server.mount('/goya-1.cgi', WEBrick::HTTPServlet::CGIHandler, 'goya-1.rb')
server.mount('/goya-2.cgi', WEBrick::HTTPServlet::CGIHandler, 'goya-2.rb')
server.start
