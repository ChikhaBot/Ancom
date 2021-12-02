const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('interact')
		.setDescription('Replies with Hello to you comrade!')
        .addSubcommand(commands =>
            commands
                .setName('beef')
                .setDescription('Swears at ideologies of the other side of the isle'))
        .addSubcommand(commands =>
            commands
                .setName('rally')
                .setDescription('Calls for leftist unity')),
	async execute(interaction) {
		await interaction.reply('Hello to you comrade!');
	},
};