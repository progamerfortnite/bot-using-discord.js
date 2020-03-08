const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const Discord = require("discord.js");

  const embed = new Discord.RichEmbed()
    .setTitle("Atomic's HelperBot")
    .addField(
      "Command used: /help",
      "If you need help, just DM @AtomicFN or use the command: **&commands**"
    )
    .addField(
      "If you want to visit my Website, here you go!: ",
      "https://atomics-hack3r-club.herokuapp.com/"
    )
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/686160984955551752/686168801657487365/unnamed.png"
    )
    .setColor("#8B008B")
    .setFooter("Atomics HelperBot")
    .setTimestamp();
  message.author.send(embed);
  message.channel.send(":white_check_mark: **Check your DMs!**");
};

module.exports.help = {
  name: "help",
  aliases: ["help"]
};
