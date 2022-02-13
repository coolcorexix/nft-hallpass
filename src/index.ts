import Discord, { Intents, MessageReaction, ReactionEmoji } from "discord.js";

const discordAppConfig = require("../config.json");

const client = new Discord.Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  ],
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
});

const verifyMessageId = "939451347483394048";

client.on("messageReactionAdd", async function (messageReaction, user) {
  if (
    messageReaction.emoji.toString() === "✅" &&
    messageReaction.message.id === verifyMessageId
  ) {
    try {
      await user.send("Send a direct message...");
    } catch {
      const selfDeleteMessage = await messageReaction.message.reply(
        "We can not send you a DM, please enable DMs from this server."
      );
      setTimeout(() => {
        messageReaction.remove();
        selfDeleteMessage.delete();
      }, 5000);
    }
  }
});

client.login(discordAppConfig.BOT_TOKEN);
