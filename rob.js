const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === 'ping') {
    message.reply('pong');
  }
});

client.login('MzYwNDc0ODEzNDg5MzQ4NjA5.DKwG9g.2SRjLRTHKLTYkLueXSug_Bmk21c');
