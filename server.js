var mosca = require('mosca')

var pubsubsettings = {
  type: 'mqtt',
  json: false,
  mqtt: require('mqtt'),
  host: '127.0.0.1',
  port: 1883
};

var moscaSettings = {
  port: 1883,			//mosca (mqtt) port
  backend: pubsubsettings	//pubsubsettings is the object we created above

};

var server = new mosca.Server(moscaSettings);	//here we start mosca
server.on('ready', setup);	//on init it fires up setup()

// fired when the mqtt server is ready
function setup() {
  console.log('Mosca server is up and running')
}

server.on('published', function(packet, client) {
  console.log('Published', packet.payload);
});
