const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hi')
		.setDescription('Replies with Hello to you comrade!'),
	async execute(interaction) {
		await interaction.reply('Hello to you comrade!');
	},
};