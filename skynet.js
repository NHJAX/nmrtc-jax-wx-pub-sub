var mosca = require('mosca'); //MOSCA Imported
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; // trust self signed certificate
var mqtt = require('mqtt'); //MQTT Imported
var client  = mqtt.connect('mqtt://localhost');//IP of the machine which the server is hosted
var SECURE_KEY = __dirname + '/tls-key.pem'; //Location of secure key
var SECURE_CERT = __dirname + '/tls-cert.pem'; //Location of Secure Cert

var settings = { //Server settings
  secure : {
    port: 8883, //Secure MQTT port
    keyPath: SECURE_KEY,
    certPath: SECURE_CERT,
    allowNonSecure: false, //Denies Nonsecure Connections
  }
};

//Server Setup
var server = new mosca.Server(settings);

//Server Init
server.on('ready', function(){ //Server is ready for messages
   console.log(" ▄▄▄▄▄▄▄▄▄▄▄  ▄    ▄  ▄         ▄  ▄▄        ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄       ▄▄▄▄▄▄▄▄▄▄▄  ▄▄        ▄  ▄            ▄▄▄▄▄▄▄▄▄▄▄  ▄▄        ▄  ▄▄▄▄▄▄▄▄▄▄▄ ")
   console.log("▐░█▀▀▀▀▀▀▀▀▀ ▐░▌ ▐░▌ ▐░▌       ▐░▌▐░▌░▌     ▐░▌▐░█▀▀▀▀▀▀▀▀▀  ▀▀▀▀█░█▀▀▀▀      ▐░█▀▀▀▀▀▀▀█░▌▐░▌░▌     ▐░▌▐░▌           ▀▀▀▀█░█▀▀▀▀ ▐░▌░▌     ▐░▌▐░█▀▀▀▀▀▀▀▀▀ ")
   console.log("▐░▌          ▐░▌▐░▌  ▐░▌       ▐░▌▐░▌▐░▌    ▐░▌▐░▌               ▐░▌          ▐░▌       ▐░▌▐░▌▐░▌    ▐░▌▐░▌               ▐░▌     ▐░▌▐░▌    ▐░▌▐░▌          ")
   console.log("▐░█▄▄▄▄▄▄▄▄▄ ▐░▌░▌   ▐░█▄▄▄▄▄▄▄█░▌▐░▌ ▐░▌   ▐░▌▐░█▄▄▄▄▄▄▄▄▄      ▐░▌          ▐░▌       ▐░▌▐░▌ ▐░▌   ▐░▌▐░▌               ▐░▌     ▐░▌ ▐░▌   ▐░▌▐░█▄▄▄▄▄▄▄▄▄ ")
   console.log("▐░░░░░░░░░░░▌▐░░▌    ▐░░░░░░░░░░░▌▐░▌  ▐░▌  ▐░▌▐░░░░░░░░░░░▌     ▐░▌          ▐░▌       ▐░▌▐░▌  ▐░▌  ▐░▌▐░▌               ▐░▌     ▐░▌  ▐░▌  ▐░▌▐░░░░░░░░░░░▌")
   console.log(" ▀▀▀▀▀▀▀▀▀█░▌▐░▌░▌    ▀▀▀▀█░█▀▀▀▀ ▐░▌   ▐░▌ ▐░▌▐░█▀▀▀▀▀▀▀▀▀      ▐░▌          ▐░▌       ▐░▌▐░▌   ▐░▌ ▐░▌▐░▌               ▐░▌     ▐░▌   ▐░▌ ▐░▌▐░█▀▀▀▀▀▀▀▀▀ ")
   console.log("          ▐░▌▐░▌▐░▌       ▐░▌     ▐░▌    ▐░▌▐░▌▐░▌               ▐░▌          ▐░▌       ▐░▌▐░▌    ▐░▌▐░▌▐░▌               ▐░▌     ▐░▌    ▐░▌▐░▌▐░▌          ")
   console.log(" ▄▄▄▄▄▄▄▄▄█░▌▐░▌ ▐░▌      ▐░▌     ▐░▌     ▐░▐░▌▐░█▄▄▄▄▄▄▄▄▄      ▐░▌          ▐░█▄▄▄▄▄▄▄█░▌▐░▌     ▐░▐░▌▐░█▄▄▄▄▄▄▄▄▄  ▄▄▄▄█░█▄▄▄▄ ▐░▌     ▐░▐░▌▐░█▄▄▄▄▄▄▄▄▄")
   console.log("▐░░░░░░░░░░░▌▐░▌  ▐░▌     ▐░▌     ▐░▌      ▐░░▌▐░░░░░░░░░░░▌     ▐░▌          ▐░░░░░░░░░░░▌▐░▌      ▐░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌      ▐░░▌▐░░░░░░░░░░░▌")
   console.log(" ▀▀▀▀▀▀▀▀▀▀▀  ▀    ▀       ▀       ▀        ▀▀  ▀▀▀▀▀▀▀▀▀▀▀       ▀            ▀▀▀▀▀▀▀▀▀▀▀  ▀        ▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀        ▀▀  ▀▀▀▀▀▀▀▀▀▀▀ ")
});

server.on('clientConnected', function(client) { //A worker has been detected and is ready to receive message
     console.log('██╗    ███████╗███████╗███████╗    ████████╗███████╗██████╗ ███╗   ███╗██╗███╗   ██╗ █████╗ ████████╗ ██████╗ ██████╗ ')
     console.log('██║    ██╔════╝██╔════╝██╔════╝    ╚══██╔══╝██╔════╝██╔══██╗████╗ ████║██║████╗  ██║██╔══██╗╚══██╔══╝██╔═══██╗██╔══██╗')
     console.log('██║    ███████╗█████╗  █████╗         ██║   █████╗  ██████╔╝██╔████╔██║██║██╔██╗ ██║███████║   ██║   ██║   ██║██████╔╝')
     console.log('██║    ╚════██║██╔══╝  ██╔══╝         ██║   ██╔══╝  ██╔══██╗██║╚██╔╝██║██║██║╚██╗██║██╔══██║   ██║   ██║   ██║██╔══██╗')
     console.log('██║    ███████║███████╗███████╗       ██║   ███████╗██║  ██║██║ ╚═╝ ██║██║██║ ╚████║██║  ██║   ██║   ╚██████╔╝██║  ██║')
     console.log('╚═╝    ╚══════╝╚══════╝╚══════╝       ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝')

     server.on('published', function(packet, client) {

         if (client) {
           var buf = (Buffer.from(packet.payload)); //Buffer is dumped from packet
           var msg = (buf.toString()); //Buffer is converted to string
           console.log("Message from worker ", msg); //Message is printed in plain text
         }

      });
});
