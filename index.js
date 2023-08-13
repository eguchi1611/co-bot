import { Client, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";

dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages,
  ],
});

const triggers = ["ko", "ｋｏ", "ｺ", "コ", "こ", "co", "ｃｏ"];

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  if (triggers.some((word) => word === message.content.toLowerCase())) {
    const random = Math.random();
    if (random < 0.9) {
      message.channel.send("ジェネレーションシステム");
    } else {
      message.channel.send("ワーキングシステム 😎");
    }
  } else if (message.content.includes("ウンポーコ")) {
    message.channel.send("それ音楽記号な");
  }
});

client.on("ready", () => {
  console.log("Ready");
});

client.login(process.env.DISCORD_TOKEN);
