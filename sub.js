var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://feedhome-mqtt.herokuapp.com:1883')

client.on('connect', function () {
  client.subscribe('presence')
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
})