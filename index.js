const { Telegraf } = require("telegraf");
const { airdrop1, airdrop2, contractAddress } = require("./controllers");
const { faq } = require("./menu");
require("dotenv").config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
	ctx.reply("Welcome!");
});

bot.command("faq", faq);

bot.on("sticker", (ctx) => {
	ctx.replyWithSticker(
		"CAACAgUAAxkBAAOEYXh_84YYhfQ3S0GDNFDyN0iehfEAArACAALQhpBXknjMAS3dKpghBA"
	);
});

bot.action("airdrop1", airdrop1);
bot.action("airdrop2", airdrop2);
bot.action("contractAddress", contractAddress);

bot.launch();
