module.exports = (client, message, query) => {
    message.channel.send({ embed: {
        color: 16711680,
        author: {
          name: client.user.username,
          icon_url: client.user.displayAvatarURL()
        },
        title: "No results found on YouTube for " + query,
        timestamp: new Date(),
        footer: {
          icon_url: client.user.displayAvatarURL(),
          text: "SuZam Tech"
        }
      }
    });
};