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
    console.log("JAX client has been detected");
    client.subscribe('mayport')
    console.log("Mayport client has been detected");
    client.subscribe('keywest')
    console.log("Keywest client has been detected");
    client.subscribe('albany')
    console.log("Albany client has been detected");
    client.subscribe('kingsbay')
    console.log("Kingsbay client has been detected");
});

client.on('message', function (topic, message) {
m = message.toString();
t = topic.toString();
console.log(t, m);
});
