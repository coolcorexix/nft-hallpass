import Discord, { Intents } from "discord.js";


const verifyMessageId = "939451347483394048";

const discordAppConfig = require("../config.json");

const client = new Discord.Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  ],
  partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
});

const CHANNELID = "939450881487810600";

client.channels.fetch(CHANNELID).then();

client.on("messageReactionAdd", function (messageReaction) {
    messageReaction
  console.log(
    "🚀 ~ file: index.ts ~ line 10 ~ client.on ~ messageReaction",
    JSON.stringify(messageReaction, null, 2)
  );
});

client.login(discordAppConfig.BOT_TOKEN);
