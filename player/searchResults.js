module.exports = (client, message, query, tracks) => {
    message.channel.send({
        embed: {
            color: 'BLUE',
            author: {
                name: client.user.username,
                icon_url: client.user.displayAvatarURL()
              },
            title: `Here's the result you're looking for from ` + query + `...`,
            footer: { icon_url: client.user.displayAvatarURL(), text: 'SuZam Tech' },
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
        },
    });
};