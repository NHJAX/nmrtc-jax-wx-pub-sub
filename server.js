var mosca = require('mosca');
var settings = {
		port:1883
  };

var mqtt = require('mqtt');
var client  = mqtt.connect('mqtt://localhost');//IP of the machine which the server is hosted

//Server Setup
var server = new mosca.Server(settings);

//Server Init
server.on('ready', function(){
  console.log("SKYNET O N L I N E")
});

//MQTT Message handler
client.on('connect', function () {
    client.subscribe('jax') //MTF Jacksonville
    client.subscribe('mayport') //MTF Mayport
    client.subscribe('keywest') //MTF Keywest
    client.subscribe('albany') //MTF Albany
    client.subscribe('kingsbay') //MTF Kingsbay
    console.log("All clients subscribed and O N L I N E");
});

//MQTT Processor
client.on('message', function (topic, message) {
  t = topic.toString(); //Topic string converted
  m = message.toString(); //Message string converted to string
  console.log(m);
});
