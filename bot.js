const Discord = require("discord.js");
const config = require("./auth.json");
var gaffla;
var tyst;


// Initialize Discord Bot
const bot = new Discord.Client();
bot.on("ready", () => {
	console.log("Skrothög startad");
	bot.user.setPresence({
		game: {
		name: `Hatar på Realm Grinder`,
		type: 0
   }
	});
	gaffla =  bot.channels.get("238365174132768768");
	if(process.argv[2] == "tyst") {
		tyst = true;
		console.log("Tyst läge");
	} else {
		tyst = false;
		console.log("Inte tyst läge");
	}
	
	if(!tyst) {
		gaffla.send("Nu hatar vi lite på Realm Grinder!");
	}
	
	
	
	
});

bot.on("presenceUpdate", async (oldMember, newMember) => { 
	if (newMember.presence.game !== null) {
		console.log(newMember.nickname + ": " + newMember.presence.game.name);
		if( newMember.presence.game.name == "Realm Grinder") {
			spam(newMember.user);
			
		}
		if(!tyst) {
			gaffla.send(newMember.nickName + " Spelar lite Realm Grinder, sprid lite hat till den personen!");
		}
	}

	

});

function spam(user) {
			for(i = 0; i < 5; i++) {
				user.send("Sluta spela Realm Grinder!");
			}
}

bot.login(config.token);
