const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
const Discord = require("discord.js");

const embed = new Discord.RichEmbed()
    .setTitle("Atomic's HelperBot")
    .setThumbnail('https://cdn.discordapp.com/attachments/686160984955551752/686168801657487365/unnamed.png')
    .addField("Command used:", "/invite")
    .addField("If you invite this Bot to other Servers, here you go!: ", "**https://discordapp.com/api/oauth2/authorize?client_id=686163872654426123&scope=bot&permissions=8**")
    .setColor("#8B008B")
    .setFooter('Atomics HelperBot')
    .setTimestamp();
   message.author.send(embed);
   message.channel.send(':white_check_mark: **Check your DMs!**')

}

module.exports.help = {
  name:"invite",
  aliases: ["invite"]
}