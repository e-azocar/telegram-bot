module.exports = {
	faq: (ctx) => {
		ctx.telegram.sendMessage(ctx.chat.id, "Menu", {
			reply_markup: {
				inline_keyboard: [
					[{ text: "¿Qué es un Airdrop?", callback_data: "airdrop1" }],
					[
						{
							text: "¿Cuándo estará disponible el Airdrop?",
							callback_data: "airdrop2",
						},
					],
					[
						{
							text: "¿Cuál es la dirección del Contrato?",
							callback_data: "contractAddress",
						},
					],
				],
			},
		});
	},
};
