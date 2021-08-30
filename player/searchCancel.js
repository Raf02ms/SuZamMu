module.exports = (client, message, query, tracks) => {
    message.channel.send({ embed: {
        color: 16711680,
        author: {
          name: client.user.username,
          icon_url: client.user.displayAvatarURL()
        },
        title: "You did not provide a valid response ... Please send the command again !",
        timestamp: new Date(),
        footer: {
          icon_url: client.user.displayAvatarURL(),
          text: "SuZam Tech"
        }
      }
    });
};