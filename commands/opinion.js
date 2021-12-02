const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('opinion')
		.setDescription('States opinion of a certain political ideology!')
        .addStringOption(option =>
            option.setName('ideology')
                .setDescription('The ideology in question')
                .setRequired(true)
                .addChoice('Ancap', 'Those arent real anarchists')
                .addChoice('Tankie', 'Those red fascitst are just as dangerous')
                .addChoice('Nazi', 'The fascist mence is to be fought by all means')),
	async execute(interaction) {
        console.log(interaction)
		await interaction.reply(`${interaction.options.getString('ideology')}`);
	},
};