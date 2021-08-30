module.exports = (client, message, queue, track) => {
    message.channel.send({
        embed: {
            color: "65280",
            author: { name: client.user.username, icon_url: client.user.displayAvatarURL() },
            footer: { icon_url: client.user.displayAvatarURL(), text: 'SuZam Tech' },
            title: track.title + ' has been added to your queue !',
            url: track.url,
            fields: [
                { name: 'Channel : ', value: track.author, inline: true },
                { name: 'Requested by : ', value: track.requestedBy.username, inline: true },
                { name: 'From playlist : ', value: track.fromPlaylist ? 'Yes' : 'No', inline: true },
                { name: 'Views : ', value: track.views, inline: true },
                { name: 'Duration : ', value: track.duration, inline: true },
            ],
            thumbnail: { url: track.thumbnail },
            timestamp: new Date(),
        },
    });
};