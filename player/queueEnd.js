module.exports = (client, message, queue) => {
    message.channel.send({ embed: {
        color: 16711680,
        author: {
          name: client.user.username,
          icon_url: client.user.displayAvatarURL()
        },
        title: "Music stopped as there is no more music in the queue !",
        timestamp: new Date(),
        footer: {
          icon_url: client.user.displayAvatarURL(),
          text: "SuZam Tech"
        }
      }
    });
};