const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

//ping pong
client.on('message', message => {
  if (message.content === 'ping') {
    message.reply('pong');
  }
}

// new member
client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'member-log');
  if (!channel) return;
  channel.send(`Welcome to Robotics, ${member}! Remember to read the rules!`)
};

  // avatar
client.on('message', message => {
  if (message.content === 'avatar?') {
    message.reply(message.author.avatarURL);
  }
});

client.login('token');
