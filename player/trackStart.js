module.exports = (client, message, track) => {
    //message.channel.send(`${client.emotes.music} - Now playing ${track.title} [Channel : ${message.member.voice.channel.name}]`);
    message.channel.send({ embed: {
        color: 65280,
        author: {
          name: client.user.username,
          icon_url: client.user.displayAvatarURL()
        },
        title: "Now Playing : " + track.title,
        url: track.url,
        description: "We play, you listen....",
        fields: [{
            name: "Title : ",
            value: track.title
          },
          {
            name: "Duration : ",
            value: track.duration
          },
          {
            name: "Discord Channel : ",
            value: message.member.voice.channel.name
          }
        ],
        thumbnail: { url: track.thumbnail },
        timestamp: new Date(),
        footer: {
          icon_url: client.user.displayAvatarURL(),
          text: "SuZam Tech"
        }
      }
    });
};