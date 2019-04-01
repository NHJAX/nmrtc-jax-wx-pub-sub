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

client.on('message', function (topic, message) {
m = message.toString();
t = topic.toString();
console.log(t, m);
s = (t + m);
console.log(s);
});
