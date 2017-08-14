var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://localhost:80')

client.on('connect', function () {
  client.subscribe('presence')
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
})