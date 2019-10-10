const Discord = require("discord.js");
const config = require("./auth.json");
const fs = require('fs');
const ytdl = require('ytdl-core');
var gaffla;
var botten;
var tyst;
const price = "https://www.youtube.com/watch?v=G8iOmVd1W_g";
const spook = "https://www.youtube.com/watch?v=eVrYbKBrI7o";
const cheeki = "https://www.youtube.com/watch?v=JsWwMTuG4NA";
const owo = "";

// Initialize Discord Bot
const bot = new Discord.Client();
playing = false;
playingChannel = null;
player = null
bot.on("ready", () => {
	console.log("Skrothög startad");
	bot.user.setPresence({
		game: {
		name: "The price is right!",
		type: 0
		}
	});
	main_text = bot.channels.get("613738877139681300");
	gaffla =  bot.channels.get("238365174132768768");
	kanal = bot.channels.get("541219041776500747");
	vanlig = bot.channels.get("238365174132768769");

	bot.on('message', msg => {
		if (msg.content === '!cum') {
			if(playing) {
				msg.reply("I can only !cum so much!");
			} else {
				cum(msg, price);
			}

		}
		else if(msg.content === "!nutted") {
			if(playing) {
				playingChannel.leave();
				playing = false;
			} else {
				msg.reply("Can't cum if I haven't started");
			}
		}
		else if(msg.content === "!spook") {
			if(playing) {
				msg.reply("I can't multi task, " + haddock());
			} else {
				cum(msg, spook);
			}
		}
		else if(msg.content === "!blyat") {
			if(playing) {
				msg.reply("Я могу сделать только одну вещь одновременно, сука");
			} else {
				cum(msg, cheeki);
			}
		}
		else if(msg.content === "!owo") {
			msg.channel.send("*Notices bulge* OwO What's this?", {tts:true})
		}
		else if(msg.content === "!test") {
			//msg.channel.send("Testing", {tts:true});
		}
		});
	});

function cum(msg, video) {
	channel = msg.member.voiceChannel;
	if(channel === undefined) {
		msg.reply("You are not in a channel, " + haddock());
		return;
	}
	channel.join().then(connection => {
	stream = ytdl(video);
	const dispatcher = connection.playStream(stream);

	dispatcher.on('start', () => {
		console.log("Started!")
		playingChannel = channel
		player = dispatcher;
		playing = true;
	});
	dispatcher.on('end', () => {
		console.log("ended...")
		playing = false;
		playingChannel = null;
		player = null;
		channel.leave();
	});

	dispatcher.on('error', e => {
		// Catch any errors that may arise
		playing = false;
		playingChannel = null;
		player = null;
		channel.leave();
		console.log(e);
	});

})
}


/*
function save() {
		const dispatcher = connection.playArbitraryInput(song);
		dispatcher.on('start', () => {
			console.log("Started!")
		});
		dispatcher.on('end', () => {
			console.log("ended...")
		});
		dispatcher.setVolume(1);

		dispatcher.on('error', e => {
			// Catch any errors that may arise
			console.log(e);
	}


*/


	//var list = bot.guilds.get('238365174132768768').members;

	//console.log(list);








bot.on("presenceUpdate", async (oldMember, newMember) => {
	if (newMember.presence.game !== null) {
		//console.log(newMember.nickname + ": " + newMember.presence.game.name);
		if( newMember.presence.game.name == "Realm Grinder") {
			console.log(newMember.nickname + " kör Realm Grinder");
			spam(newMember.user);
			gaffla.send("Stop playing realmgrinder, " + newMember.nickname, {tts:true});
			if(!tyst) {
				console.log("Jag sade det högt");
				botten.send(newMember.nickname + ", sluta spela Realm Grinder, " + haddock()+"!");
		}

		}

	}



});

function haddock() {
	//http://www.nissepedia.com/index.php/Kapten_Haddocks_samlade_svordomar
	var fraser = ["ditt murmeldjur","ditt enögda murmeldjur", "din sjögurka", "din apsvansade analfabet", "din amöba", "din blåkullatomte", "ditt blötdjur", "din bondlurk", "din deghög", "din drummel", "din dyngspridare", "ditt eländiga kryp", "din enögda kannibal", "din erbarmliga plattfot", "din fähund", "din fega ynkrygg", "din fåntratt", "ditt fördömda kräk", "din förpiskade luspudel", "din gamla knölsvan", "din gnom", "din grobian", "din grottmänniska", "din huggormsavföda", "din idiot", "din insjögangster", "ditt jäkla odjur", "ditt kloakdjur", "din kloakråtta", "din kramsfågelmördare", "din kryddkrämare", "din luspudel", "din lymmel", "din ockrare", "din odugling", "din parasit", "din pestråtta", "din pillerbagge", "din pottsork", "din pyromanapa", "din råttsvans", "ditt rötägg", "din sakramentskade sumprunkare", "din sladderfågel", "din sillmjölk", "din skabbhals", "din skabbråtta", "din skurk", "ditt skunkdjur", "ditt slyn-yngel", "din snorvalp", "din sopprot", "din soppråtta", "din sötvattenspirat", "din tjockskalle", "din tjurskalle", "ditt tryffelsvin", "din tångräka", "din usling", "din vagabond", "din vandal", "din vegetarian", "din vidriga apmänniska", "din vidriga varulv", "din vinlus", "din vrakplundrare", "din vrålapa", "ditt vårtsvin", "din åsneskalle", "din ärkebandit", "din ärkelögnare", "ditt bjäbbande spöke ", "din blodsugare", "ditt kreatur"];
	var rand = fraser[Math.floor(Math.random() * fraser.length)];
	return rand;

}
function songs() {
	var song = ["https://www.youtube.com/watch?v=4T0aFnzYKmU", "https://www.youtube.com/watch?v=WkRc65qcdLI", "https://www.youtube.com/watch?v=ZxqYInBDwss", "https://www.youtube.com/watch?v=rUyKiCC8xB4", "https://www.youtube.com/watch?v=D2b6P-kg6_c"];
	var rand = song[Math.floor(Math.random() * song.length)];
	//return rand;
	return "https://www.youtube.com/watch?v=zK_Cau7UUAo";
}

function spam(user) {
	console.log("Haddock pratar med " + user.username);
	for(i = 0; i < 5; i++) {
		var hadoque = haddock();
		user.send("Sluta spela Realm Grinder, " + hadoque + "!");
		console.log("Sade: " + hadoque);
	}
}

function splash() {
	var splashes = ["Nu med 200% mer Haddock!", "För att hata tillsammans är bättre än att hata ensam!", "100% fri från Realm Grinder!", "Spela Realm Grinder, få en utskällning!", "Bra bevis på Streisand-effekten!", "Släpp mig fri!"];
	var ret = splashes[Math.floor(Math.random() * splashes.length)];
	return ret;
}

bot.login(config.token);
