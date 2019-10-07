const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = '!';

var replies = [];
var fs = require('fs');
var replies = fs.readFileSync('messages.txt').toString().split("\n");
var answers = fs.readFileSync('answers.txt').toString().split("\n");

//message.author

bot.on('ready', () => {
    console.log('This bot is online!');
})

bot.on('message', message=>{
    
    msg = message.content.toLowerCase();

    if(message.author.bot) return;
    
    else if (msg.includes(PREFIX + "answer")) {
        
        num = Math.floor(Math.random() * answers.length);
        var text = answers[num];
        
        message.channel.send(message.author + ", " + text);
        
    } else {
        if (msg.includes("clown")) {
            num = Math.floor(Math.random() * replies.length);
            var text = replies[num];

            message.channel.send(text);
        }
        
        if (msg.includes("steph")) {
            
            message.channel.react('💗');
        }    
    }
})

bot.login(process.env.token);
