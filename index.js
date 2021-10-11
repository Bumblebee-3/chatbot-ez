const aoi = require("aoi.js")


const bot = new aoi.Bot({
token: process.env.token, 
prefix: "c!" 
})

bot.onMessage()




bot.variables({
  channel:""
})

bot.command({
  name:"$alwaysExecute",
  code:`$djsEval[const smartestchatbot = require('smartestchatbot');

const client = new smartestchatbot.Client();
let msg = message.content

client.chat({message:msg, name:"Blurr bot", owner:"Bumblebee", user: 878478190849458206, language:"en"}).then(reply => {
message.channel.send(reply);
})
]
$onlyIf[$getChannelVar[channel]==true;]`,
  nonPrefixed:true
})

bot.command({
  name:"enable-chat",
  code:`
  Enabled Chatbot in this channel...
  $setChannelVar[channel;true]`
})

bot.command({
  name:"disable-chat",
  code:`
  Disabled Chatbot in this channel...
  $setChannelVar[channel;false]`
})