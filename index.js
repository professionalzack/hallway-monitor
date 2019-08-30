const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.once('ready', () => {
	console.log('Ready!');
});

client.login(config.token);

client.on('message', message => {
  const vamp = message.guild.channels.find(ch => ch.id === '585663856404070430');
  if (message.content.startsWith(`${config.prefix}roast`)) {
    message.channel.send(`${message.author}, take that shit to ${vamp.toString()}. you know better`);
  }
});