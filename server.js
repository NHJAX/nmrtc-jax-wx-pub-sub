var mosca = require('mosca');
var settings = {
		port:1883
  };
var mqtt = require('mqtt');
var client  = mqtt.connect('mqtt://10.0.0.205');//IP off the machine which the server is hosted

var server = new mosca.Server('Server setting up', settings);

server.on('Server ready', function(){
});

client.on('connect', function () {
    client.subscribe('WX')
    console.log("Client has been detected");
});

client.on('message', function (topic, message) {
context = message.toString();
console.log(context)
});
