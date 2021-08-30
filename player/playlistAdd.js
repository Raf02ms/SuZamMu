module.exports = (client, message, queue, playlist) => {
    message.channel.send({
        embed: {
            color: "BLUE",
            author: { name: client.user.username, icon_url: client.user.displayAvatarURL() },
            footer: { icon_url: client.user.displayAvatarURL(), text: 'SuZam Tech' },
            title: "Added Playlist : " + playlist.title,
            fields: [
                { name: 'Songs: ', value: playlist.tracks.length, inline: true }

            ],
            timestamp: new Date(),
        },
    });
    
    
};