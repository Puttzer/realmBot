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
const nuzzle = "https://www.youtube.com/watch?v=h6DNdop6pD8";
const cummies = "https://www.youtube.com/watch?v=CxVDnpsGTZY";
const huggies = "https://www.youtube.com/watch?v=I17QjIC6QJw&feature=youtu.be";
const portal = "https://www.youtube.com/watch?v=mD3v1B_aXw0";
const longPortal = "https://www.youtube.com/watch?v=s-UFPhz2nZ0&t";
const boiborton = "https://www.youtube.com/watch?v=zTvbHUeaphw";
const seinfeld = "https://www.youtube.com/watch?v=_V2sBURgUBI";
const seindfeldRape = "https://www.youtube.com/watch?v=bea9aFBGuwQ&feature=youtu.be";
const enthusiasm = "https://www.youtube.com/watch?v=Ag1o3koTLWM&feature=youtu.be";
const fuck = "https://www.youtube.com/watch?v=Vqbk9cDX0l0&feature=youtu.be";
const cummotion = "https://www.youtube.com/watch?v=j0lN0w5HVT8&feature=youtu.be";



const list = ["!nutted", "!cum", "!spook", "!blyat", "!huggies", "!owo", "!cummies", "!boi", "!radio", "!kittn", "!seinfeld", "!curb", "!fuck", "!retarded", "!cummotion"];

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
				playing = true;
				cum(msg, price);
			}

		}
		else if(msg.content === "!huggies") {
			if(playing) {
				msg.reply("Not done pouncing somebody else, UWU <3");
			} else {
				playing = true;
				cum(msg, huggies);
			}
		}
		else if(msg.content === "!nutted") {
			if(playing) {
				msg.channel.send({files: ['nutted.png']})
				playingChannel.leave();
				playing = false;
			} else {
				playing = true;
				msg.reply("Can't nut if I haven't started");
			}
		}
		else if(msg.content === "!spook") {
			if(playing) {
				msg.reply("I don't want to spook you too much!");
			} else {
				playing = true;
				cum(msg, spook);
			}
		}
		else if(msg.content === "!blyat") {
			if(playing) {
				msg.reply("Я могу сделать только одну вещь одновременно, сука");
			} else {
				playing = true;
				cum(msg, cheeki);
			}
		}
		else if(msg.content === "!owo") {
			msg.channel.send("*Notices bulge* OwO What's this?", {tts:true})
		}
		else if(msg.content === "!nuzzle") {
			if(playing) {
				msg.reply("Pwease don't pweassuwe me  （งΦ Д Φ）ง");
			} else {
				playing = true;
				cum(msg, nuzzle);
			}
		}
		else if (msg.content === "!cummies") {
			if(playing) {
				msg.reply("The cummies are not done yet, daddy XD");
			} else {
				playing = true;
				cum(msg, cummies);
			}
		}
		else if (msg.content === "!boi") {
				if(playing) {
								msg.reply("I'm a-a-am already cummy cummied, do I need boiborton to play more?! OwO");
				} else {
								playing = true;
								cum(msg, boiborton);
				}
		}
		else if (msg.content === "!radio") {
			if(playing) {
          msg.reply("Testing has to finish before you can come. Science has now validated your birth mother's decision to abandon you on a doorstep.");
      } else {
          playing = true;
          if(wildride()) {
                  wild = true;
                  msg.reply("Welcome to Mrs. GLaDOS wild ride. There is no stopping it...");
                  cum(msg, longPortal);
          } else {
                  cum(msg, portal);
          }
      }

		}
		else if (msg.content === "!kittn") {
			msg.channel.send("Benjicanine: @Razorkittn I don't think you know the definition of yiff");
		}
		else if (msg.content === "!seinfeld") {
			if(playing) {
				msg.reply("Please slow down on the bad jokes");
			} else {
				playing = true;
				if(wildride()) {
					cum(msg, seindfeldRape);
				} else {
					cum(msg, seinfeld);
				}
			}
		}
		else if (msg.content === "!curb") {
			if(playing) {
				msg.reply("Please curb you enthusiasm");
			} else {
				playing = true;
				cum(msg, enthusiasm);
			}
		}
		else if (msg.content === "!fuck") {
			if(playing) {
				msg.reply("I can't be fucked since my fucks ran off");
			} else {
				playing = true;
				cum(msg, fuck);
			}
		}
		else if (msg.content === "!retarded") {
			message = "Since you are too retarded to remember what I can do, here is the list: \n";
			for(i = 0; i < list.length; i++) {
				message = message + list[i] + "\n";
			}
			msg.channel.send(message)
		}
		else if (msg.content === "!cummotion") {
			if (playing) {
				msg.reply("Bees make Honey, I can't currently make Cummy")
			} else {
				cum(msg, cummotion);
			}
		}
		});
	});
function wildride() {
    var rand = Math.floor(Math.random() * 10);
    if(rand === 1) {
      	return true;
    }
    else {
      	return false;
    }
}
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
