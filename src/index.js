//Preps
require("dotenv").config();
// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { MessageEmbed } = require('discord.js');
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();
// Create a new client instance
const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS", "GUILD_BANS", "GUILD_EMOJIS_AND_STICKERS", "GUILD_INTEGRATIONS", "GUILD_WEBHOOKS", "GUILD_INVITES", "GUILD_VOICE_STATES", "GUILD_PRESENCES", "GUILD_MESSAGE_REACTIONS", "GUILD_MESSAGE_TYPING", "DIRECT_MESSAGES", "DIRECT_MESSAGE_REACTIONS", "DIRECT_MESSAGE_TYPING"] });

//Variable setup
var counter = 0;
// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});





//Event Handling

client.on('messageCreate', (message) => {
	if(!message.author.bot && !message.content.includes("!MessageCount")){
		counter++;
	}

	if(message.content.includes("!MessageCount")){

		message.reply(counter +"Message(s) were sent during this runtime")
	}
});

//NSFW Section

client.on('messageCreate', async (message)  => {
	if(!message.channel.nsfw && !message.author.bot &&  message.content.includes("!porn")){
		message.channel.send("This Command only works in NSFW Channel(Sexdungeon)")
	} else {
		var image = "";
		switch(message.content) {
			case "!porn gif":
				image = await nsfw.pgif();
				message.channel.send(image);
			break;
			case "!porn pussy":
				image = await nsfw.pussy();
				message.channel.send(image);
			break;
			case "!porn anal":
				image = await nsfw.anal();
				message.channel.send(image);
			break;
			case "!porn wild":
				image = await nsfw.gonewild();
				message.channel.send(image);
			break;
			case "!porn boobs":
				image = await nsfw.boobs();
				message.channel.send(image);
			break;
			case "!porn thigh":
				image = await nsfw.thigh();
				message.channel.send(image);
			break;
			case "!porn hentai":
				image = await nsfw.hentai();
				message.channel.send(image);
			break;
			case "!porn lewd":
				image = await nsfw.lewd();
				message.channel.send(image);
			break;
			case "!porn help":
				message.channel.send("Available commands are: gif, pussy, anal, wild, boobs, thigh, hentai and lewd. Example: !porn pussy or !porn anal");
			break;
		}
	}
});





// Login to Discord with your client's token
client.login(process.env.DISCORD_BOT_TOKEN);