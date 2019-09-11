const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjIwNDMxMTQ4NzQ0NTcyOTU1.XXXCvw.tFzz10lkAkAfQFwolc7d5g021Bg';

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

    if (msg.includes("clown")) {

        num = Math.floor(Math.random() * replies.length);
        var text = replies[num];
            
        message.channel.send(text);
    }
    
    if (msg.includes("steph")) {
        
        message.channel.send(message.author + " that's my mom!");
        
    }

})

bot.login(process.env.token);
