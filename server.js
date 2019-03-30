var mosca = require('mosca');
var settings = {
		port:1883
  };
var mqtt = require('mqtt');
var client  = mqtt.connect('mqtt://10.0.0.205');
var server = new mosca.Server(settings);

server.on('ready', function(){
console.log("ready");
});


client.on('connect', function () {
    client.subscribe('WX')
});
client.on('message', function (topic, message) {
context = message.toString();
console.log(context)
});
