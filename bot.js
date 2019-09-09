const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjIwNDMxMTQ4NzQ0NTcyOTU1.XXW0IA.L6hP7W37zwPn-VRSf6NO_JoKr9w';

const PREFIX = '!';

bot.on('ready', () => {
    console.log('This bot is online!');
})

bot.on('message', message=>{

    if (message.content.includes("clown")) {

        message.channel.send(message.author + ".... you'll float too");

    }

    else if (message.content.includes("Clown")) {

        message.channel.send(message.author + ".... you'll float too");

    }

    else if (message.content.includes("CLOWN")) {

        message.channel.send(message.author + ".... you'll float too");

    }

})

bot.login(process.env.BOT_TOKEN);
