module.exports = {
	airdrop1: (ctx) => {
		ctx.deleteMessage();
		ctx.reply(
			"El Airdrop es una forma en la que estaremos obsequiando LOLLIPOP a nuestra comunidad"
		);
	},
	airdrop2: (ctx) => {
		ctx.deleteMessage();
		ctx.reply("El Airdrop estará disponible desde el mes de Noviembre");
	},
	contractAddress: (ctx) => {
		ctx.deleteMessage();
		ctx.replyWithMarkdown(
			"El contrato de LOLLIPOP es *0xA8FA34174bdcF5FE63ef3a66d1a527C5593FBC08*"
		);
	},
};
