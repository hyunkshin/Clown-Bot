const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = '!';

var replies = [];
var fs = require('fs');
var replies = fs.readFileSync('messages.txt').toString().split("\n");

//message.author

bot.on('ready', () => {
    console.log('This bot is online!');
})

bot.on('message', message=>{
    
    msg = message.content.toLowerCase();

    if(message.author.bot) return;

    else if (msg.includes("clown")) {

        num = Math.floor(Math.random() * replies.length);
        var text = replies[num];
            
        message.channel.send(text);
    }

})

bot.login(process.env.token);
