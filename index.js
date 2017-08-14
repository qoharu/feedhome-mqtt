var express = require('express');
var http = require('http');
var mosca = require('mosca');

var app = express();
var server = http.createServer(app);

var moscaSettings = {
  port: 80,
  persistence: {
    factory: mosca.persistence.Memory
  }
};

var server = new mosca.Server(moscaSettings,function(){
    server.attachHttpServer(app);
});
server.on('ready', setup);

server.on('clientConnected', function(client) {
	console.log('client connected', client.id);		
});

// fired when a message is received
server.on('published', function(packet, client) {
  console.log('Published', packet.payload);
});

// fired when the mqtt server is ready
function setup() {
  console.log('Mosca server is up and running')
}