const Discord = require('discord.js');
const client = new Discord.Client();
// const config = require('./config.json');
const prefix = process.env.prefix;
const token = process.env.TOKEN;
console.log('prefix', prefix);
console.log('token', token);

client.once('ready', () => {
	console.log('Ready!');
});

client.login(token);

client.on('message', message => {
  const vamp = message.guild.channels.find(ch => ch.id === '585663856404070430');
  if (message.content.startsWith(`${prefix}roast`)) {
    message.channel.send(`${message.author}, take that shit to ${vamp.toString()}. you know better`);
  }
});