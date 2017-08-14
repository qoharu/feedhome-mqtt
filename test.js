var mqtt = require('mqtt')

var client = mqtt.connect('mqtt://feedhome-mqtt.herokuapp.com:1883');
client.on('connect', function(){
    console.log('client connected');
});


var m = {type:"Fiat", model:"500", payload:"white"};
client.publish('presence', JSON.stringify(m));