var mosca = require('mosca');
var settings = {
		port:1883
  };

var mqtt = require('mqtt');
var client  = mqtt.connect('mqtt://192.168.1.163');//IP off the machine which the server is hosted

//Server Setup
var server = new mosca.Server(settings);

//Server Init
server.on('ready', function(){
  console.log("SKYNET O N L I N E")
});

//MQTT Message handler
client.on('connect', function () {
    client.subscribe('jax')
    client.subscribe('mayport')
    client.subscribe('keywest')
    client.subscribe('albany')
    client.subscribe('kingsbay')
    console.log("All clients subscribed and O N L I N E");
});

//MQTT Processor
client.on('message', function (topic, message) {
  t = topic.toString(); //Topic string converted
  m = message.toString(); //Message string converted to string
  console.log(m);
});
