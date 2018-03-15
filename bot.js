const Discord = require("discord.js");
const config = require("./auth.json");
var gaffla;
var tyst;


// Initialize Discord Bot
const bot = new Discord.Client();
bot.on("ready", () => {
	console.log("Skrothög startad");
	console.log(bot.username + ", sluta spela Realm Grinder, " + haddock());
	bot.user.setPresence({
		game: {
		name: "Hatar på Realm Grinder",
		type: 0
   }
	});
	gaffla =  bot.channels.get("238365174132768768");
	if(process.argv[2] == "tyst") {
		tyst = true;
		console.log("Tyst läge");
	} else {
		tyst = false;
		console.log("Högljutt läge");
	}
	
	
	if(!tyst) {
		gaffla.send("No Realm Grinder bot! Nu med 200% mer Haddock!");
	}
	
	
	
	
});

bot.on("presenceUpdate", async (oldMember, newMember) => { 
	if (newMember.presence.game !== null) {
		console.log(newMember.nickname + ": " + newMember.presence.game.name);
		if( newMember.presence.game.name == "Realm Grinder") {
			console.log(newMember.nickname + " kör Realm Grinder");
			spam(newMember.user);
			if(!tyst) {
				console.log("Jag sade det högt");
				gaffla.send(newMember.nickname + ", sluta spela Realm Grinder, " + haddock()+"!");
		}
			
		}

	}

	

});

function haddock() {
	//http://www.nissepedia.com/index.php/Kapten_Haddocks_samlade_svordomar
	var fraser = ["ditt murmeldjur","ditt enögda murmeldjur", "din sjögurka", "din apsvansade analfabet", "din amöba", "din blåkullatomte", "ditt blötdjur", "din bondlurk", "din deghög", "din drummel", "din dyngspridare", "ditt eländiga kryp", "din enögda kannibal", "din erbarmliga plattfot", "din fähund", "din fega ynkrygg", "din fåntratt", "ditt fördömda kräk", "din förpiskade luspudel", "din gamla knölsvan", "din gnom", "din grobian", "din grottmänniska", "din huggormsavföda", "din idiot", "din insjögangster", "ditt jäkla odjur", "ditt kloakdjur", "din kloakråtta", "din kramsfågelmördare", "din kryddkrämare", "din luspudel", "din lymmel", "din ockrare", "din odugling", "din parasit", "din pestråtta", "din pillerbagge", "din pottsork", "din pyromanapa", "din råttsvans", "ditt rötägg", "din sakramentskade sumprunkare", "din sladderfågel", "din sillmjölk", "din skabbhals", "din skabbråtta", "din skurk", "ditt skunkdjur", "ditt slyn-yngel", "din snorvalp", "din sopprot", "din soppråtta", "din sötvattenspirat", "din tjockskalle", "din tjurskalle", "ditt tryffelsvin", "din tångräka", "din usling", "din vagabond", "din vandal", "din vegetarian", "din vidriga apmänniska", "din vidriga varulv", "din vinlus", "din vrakplundrare", "din vrålapa", "ditt vårtsvin", "din åsneskalle", "din ärkebandit", "din ärkelögnare"];
	var rand = fraser[Math.floor(Math.random() * fraser.length)];
	return rand;

}

function spam(user) {
	console.log("Haddock pratar med " + user.username);		
	for(i = 0; i < 5; i++) {
		var hadoque = haddock();
		user.send("Sluta spela Realm Grinder, " + hadoque + "!");
		console.log("Sade: " + hadoque);
	}
}

bot.login(config.token);
