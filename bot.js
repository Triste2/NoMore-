const Discord = require('discord.js');
const client = new Discord.Client();



console.log(`

------------------------------------------------------------------
---                  The Server Bot Is Online                  ---
---                  You Can Use It In Server                  ---
---                  Have Fun , For the bot                    ---
------------------------------------------------------------------


`);
client.on('Join', () => {
  console.log(`Sign in`);
});



client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Speedy BOT STARTED`);
        console.log(`---------------`);
      console.log(`ON ${client.guilds.size} Servers `);
    console.log(`---------------`);
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame(`#Speedy_Alone): | .help`,"http://twitch.tv/y04zgamer")
   client.user.setStatus("dnd")
});






		

client.on("message", message => {
  if (message.content === ".help") {
   const embed = new Discord.RichEmbed()
       .setColor('RANDOM')
       .setFooter('By Speedy')
       .setThumbnail(message.author.avatarURL)
       .setDescription(`

	Please Chose ;
	
    .crooms ⇏ لإنشاء الرومات
	.croles ⇏ لإنشاء الرتب
	.drooms ⇏ لحذف الرومات
	.droles ⇏ لحذف الرتب
	.colors ⇏ لإنشاء الوان بالعدد الي تبيه
	.id     ⇏ لرؤية معلومات حسابك
	.server ⇏ لرؤية معلومات السيرفر
	.ping   ⇏ لمعرفة سرعة اتصال البوت
	
 `)
 message.author.send(embed);
 
}  
});











client.on('message', message => {
    if (message.content === ".crooms") {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_CHANNELS`` **Premission**`);

        
     message.guild.createChannel('info', 'text')
     message.guild.createChannel('news', 'text')
	 message.guild.createChannel('welcome','text')
	 message.guild.createChannel('-------------', 'text')
     message.guild.createChannel('chat', 'text')
     message.guild.createChannel('bot', 'text')
     message.guild.createChannel('games', 'text')
	 message.guild.createChannel('-------------', 'text')
     message.guild.createChannel('bo7', 'text')
     message.guild.createChannel('pic', 'text')
	 message.guild.createChannel('cut', 'text')
	 message.guild.createChannel('-------------', 'voice')
	 message.guild.createChannel('.Funny', 'voice')
	 message.guild.createChannel('.Friends', 'voice')
	 message.guild.createChannel('Coffee', 'voice')
	 message.guild.createChannel('.Session', 'voice')
	 message.guild.createChannel('.Stars', 'voice')
	 message.guild.createChannel('.Elegant', 'voice')
	 message.guild.createChannel('.Clouds', 'voice')
	 message.guild.createChannel('.Cheerful', 'voice')
	 message.guild.createChannel('.Sunset', 'voice')
	 message.guild.createChannel('.Marvel', 'voice')
	 message.guild.createChannel('-------------', 'voice')
	 message.guild.createChannel('.Music 1 ♪', 'voice')
	 message.guild.createChannel('.Music 2 ♪', 'voice')
	 message.guild.createChannel('.Music 3 ♪', 'voice')
	 message.guild.createChannel('-------------', 'voice')
	 message.guild.createChannel('.AloNe', 'voice')
	 message.guild.createChannel('.Twins', 'voice')
	 message.guild.createChannel('.Three', 'voice')
	 message.guild.createChannel('-------------', 'voice')
	 message.guild.createChannel('Sleep ☕😴', 'voice')



message.channel.sendMessage('**الرجاء الانتظار ريثما يتم صناعة السيرفر**')
}
});






client.on('message', message => {
    if (message.content === ".croles") {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_ROLES`` **Premission**`);

                     message.guild.createRole({ name: "| OwnerShip", color: "#000000", permissions: [] })
                     message.guild.createRole({ name: "| President", color: "#000000", permissions: [] })
				     message.guild.createRole({ name: "| The Best", color: "#000000", permissions: [] })
                     message.guild.createRole({ name: "| Founder", color: "#000000", permissions: [] })
                     message.guild.createRole({ name: "| Owner", color: "#000000", permissions: [] })
                     message.guild.createRole({ name: "| Co Owner", color: "#000000", permissions: [] })
                     message.guild.createRole({ name: "| Admin", color: "#000000", permissions: [] })
                     message.guild.createRole({ name: "| Ministry", color: "#000000", permissions: [] })
                     message.guild.createRole({ name: "| King", color: "#000000", permissions: [] })
                     message.guild.createRole({ name: "| Queen", color: "#000000", permissions: [] })
                     message.guild.createRole({ name: "| Staff", color: "#000000", permissions: [] })
                     message.guild.createRole({ name: "| Prince", color: "#000000", permissions: [] })
                     message.guild.createRole({ name: "| Princess", color: "#000000", permissions: [] })
					 message.guild.createRole({ name: "| Friends", color: "#000000", permissions: [] })
					 message.guild.createRole({ name: "| Vip +", color: "#000000", permissions: [] })
					 message.guild.createRole({ name: "| Vip", color: "#000000", permissions: [] })
					 message.guild.createRole({ name: "| Visitors", color: "#000000", permissions: [] })
					 message.guild.createRole({ name: "| Music", color: "#000000", permissions: [] })
					 message.guild.createRole({ name: "| Bots", color: "#000000", permissions: [] })
					 message.guild.createRole({ name: "Muted", color: "#000000", permissions: [] })
        

message.channel.sendMessage('** الرجاء الانتظار ريثما يتم صناعه الرتب **')
}
});








client.on('message', omar => {
var prefix = ".";
if(omar.content.split(' ')[0] == prefix + 'drooms') {  // delete all channels
if (!omar.channel.guild) return;
if(!omar.guild.member(omar.author).hasPermission("MANAGE_CHANNELS")) return omar.reply("**You Don't Have ` MANAGE_CHANNELS ` Permission**");
if(!omar.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return omar.reply("**I Don't Have ` MANAGE_CHANNELS ` Permission**");
omar.guild.channels.forEach(m => {
m.delete();
});
}
if(omar.content.split(' ')[0] == prefix + 'droles') { // delete all roles
if (!omar.channel.guild) return;
if(!omar.guild.member(omar.author).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return omar.reply("**You Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**");
if(!omar.guild.member(client.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return omar.reply("**I Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**");
omar.guild.roles.forEach(m => {
m.delete();
});
omar.reply("`**تم حذف كل الرتب بنجاح**`")
}
});





client.on('message', ra3d => {
var prefix = ".";
                        let args = ra3d.content.split(" ").slice(1).join(" ")
if(ra3d.content.startsWith(prefix + 'colors')) {
    if(!args) return ra3d.channel.send('`يرجي اختيار كم لون `');
             if (!ra3d.member.hasPermission('MANAGE_ROLES')) return ra3d.channel.sendMessage('`**? | `[MANAGE_ROLES]` لا يوجد لديك صلاحية**'); 
              ra3d.channel.send(`**? |Created __${args}__ Colors**`);
                  setInterval(function(){})
                    let count = 0;
                    let ecount = 0;
          for(let x = 1; x < `${parseInt(args)+1}`; x++){
            ra3d.guild.createRole({name:x,
              color: 'RANDOM'})
              }
            }
       });

	   
	   
	   
	   
	   
	   
client.on('message', message => {
   if (message.content.startsWith(".id")) {
                if(!message.channel.guild) return message.reply('**هذا الامر فقط في السيرفرات وشكرا**');

               var mentionned = message.mentions.users.first();
    var mentionavatar;
      if(mentionned){
          var mentionavatar = mentionned;
      } else {
          var mentionavatar = message.author;
          
      }
   let embed = new Discord.RichEmbed()
   .setColor("RANDOM")
   .setThumbnail(`${mentionavatar.avatarURL}`)
   .addField("الاسم:",`<@` + `${mentionavatar.id}` + `>`, true)
   .addField('التاق:',"#" +  `${mentionavatar.discriminator}`, true)
   .addField("الايدي:", "**[" + `${mentionavatar.id}` + "]**", true)
   .addField("تم الانشاء في:", "**[" + `${mentionavatar.createdAt}` + "]**", true)
   
     
     
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});
	   
	   
	   
	   
	   
	   client.on('message', message => {
if (message.content === ".server") {
if(!message.channel.guild) return;
const millis = new Date().getTime() - message.guild.createdAt.getTime();
const now = new Date();

const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
const days = millis / 1000 / 60 / 60 / 24;
let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
var embed  = new Discord.RichEmbed()
.setAuthor(message.guild.name, message.guild.iconURL)
.addField("**🆔 سيـرفر ايــدي**", "**"+message.guild.id+"**",true)
.addField("**👑 سيــرفر اونـر**", "**"+message.guild.owner+"**" ,true)
.addField("**✅ الشــات الاســاســي**" , "**"+message.guild.DefaultChannel+"**" ,true)
.addField("**🌍 المـوقع**" , "**"+message.guild.region+"**",true)
.addField('**💬 عدد الرومــات الكتابيــة**',`**[ ${message.guild.channels.filter(m => m.type === 'text').size} ] Channel **`,true)
.addField("**📣 عدد الرومــات الصوتــية**", ` ** [ ${message.guild.channels.filter(m => m.type === 'voice').size} ] Channel ** `,true)
.addField("**🤔 عدد ايــام انشــاء السيــرفر**", ` ** [ ${days.toFixed(0)} ] ** Day ` ,true)
.addField("**👔 الــرتــب**",`**[${message.guild.roles.size}]** Role `,true)
.addField("**💠 مســتوى حمــاية الســيرفر**", ` ** [ ${verificationLevels[message.guild.verificationLevel]} ] ** `,true)

.addField("👥عدد الاعضــاء",`
**${message.guild.memberCount}**`)
.setThumbnail(message.guild.iconURL)
.setColor('RANDOM')
message.channel.sendEmbed(embed)

}
});
	   


	   
	   

client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('.ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms 📶 ")
                        .addField('**WebSocket:**',api + " ms 📶 ")
         message.channel.send({embed:embed});
                        }
                    });

	   
	   
	   
	   
	   
	   
	   
	   
	   client.on('message', message => {
    var prefix = ".";

      if (!message.content.startsWith(prefix)) return;
      var args = message.content.split(' ').slice(1);
      var argresult = args.join(' ');
      if (message.author.id == id bot) return;


    if (message.content.startsWith(prefix + 'playing')) {
    if (message.author.id !== '413685264565927967') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
    client.user.setGame(argresult);
        message.channel.sendMessage(`**${argresult}** : تم تغيير الحالة`)
    } else


    if (message.content.startsWith(prefix + 'streem')) {
    if (message.author.id !== '413685264565927967') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
    client.user.setGame(argresult, "http://twitch.tv/HP");
        message.channel.sendMessage(`**${argresult}** :تم تغيير الحالة الى ستريمنج`)
    } else

    if (message.content.startsWith(prefix + 'sname')) {
    if (message.author.id !== '413685264565927967') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
      client.user.setUsername(argresult).then
          message.channel.sendMessage(`**${argresult}** : تم تغير الأسم`)
      return message.reply("**لا تستطيع تغير الأسم الا بعد ساعتين**");
    } else

    if (message.content.startsWith(prefix + 'savatar')) {
    if (message.author.id !== '413685264565927967') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
    client.user.setAvatar(argresult);
        message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
    }



     });
	 
	   












client.login('NDYyMjkzOTIyNjM1NDQ4MzMw.DikqWg.N8DWYLYdzTI373fdhkqeZVwF1mQ'); 


   
