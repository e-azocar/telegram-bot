const { Telegraf } = require("telegraf");
require("dotenv").config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply("Welcome!"));

bot.command("faq", (ctx) => {
	ctx.telegram.sendMessage(ctx.chat.id, "Menu", {
		reply_markup: {
			inline_keyboard: [
				[{ text: "¿Qué es un Airdrop?", callback_data: "airdrop1" }],
				[{ text: "¿Cuándo estará disponible el Airdrop?", callback_data: "airdrop2" }],
			],
		},
	});
});

bot.on("sticker", (ctx) => {
	ctx.replyWithSticker(
		"CAACAgUAAxkBAAOEYXh_84YYhfQ3S0GDNFDyN0iehfEAArACAALQhpBXknjMAS3dKpghBA"
	);
});

bot.action("airdrop1", (ctx) => {
	ctx.deleteMessage();
	ctx.reply(
		"El Airdrop es una forma en la que estaremos obsequiando LOLLIPOP a nuestra comunidad"
	);
});

bot.action("airdrop2", (ctx) => {
	ctx.deleteMessage();
	ctx.reply(
		"El Airdrop estará disponible desde el mes de Noviembre"
	);
});

bot.launch();
