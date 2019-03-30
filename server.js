var mqtt = require('mqtt')
var MQTT_TOPIC = "WX";
var MQTT_ADDR = "127.0.0.1:1883";
var MQTT_PORT = 1883;
var client  = mqtt.connect(MQTT_ADDR,{clientId: "webClient", keeplive: 1, clean: false, debug:true});

var express = require('express');
var socket = require('socket.io');

//store the express functions to var app
var app = express();

//Create a server on localhost:5000
//var server = app.listen(process.env.PORT || 5000);

//host content as static on public
app.use(express.static('public'));

console.log("Node is running on port 5000...");

//MQTT
client.on('connect', function () {
    client.subscribe(MQTT_TOPIC, { qos: 2 });
});

client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString());
});

client.on('error', function(){
    console.log("ERROR")
})

client.on('offline', function() {
    console.log("offline");
});

client.on('reconnect', function() {
    console.log("reconnect");
});
