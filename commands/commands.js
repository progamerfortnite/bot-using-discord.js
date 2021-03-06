const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const Discord = require("discord.js");

  const embed = new Discord.RichEmbed()
    .setTitle("Atomic's HelperBot")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/686160984955551752/686168801657487365/unnamed.png"
    )
    .addField("Command used:", "/commands")
    .addField("Command 1:", "**/commands**")
    .addField("Command 2:", "**/download**")
    .addField("Command 3:", "**/help**")
    .addField("Command 4:", "**/invite**")
    .setColor("#8B008B")
    .setFooter("Atomics HelperBot")
    .setTimestamp();
  message.author.send(embed);
  message.channel.send(":white_check_mark: **Check your DMs!**");
};

module.exports.help = {
  name: "commands",
  aliases: ["commands"]
};
