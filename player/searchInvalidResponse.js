module.exports = (client, message, query, tracks, content, collector) => {
    if (content === 'cancel') {
        collector.stop();
        return message.channel.send({ embed: {
            color: 16711680,
            author: {
              name: client.user.username,
              icon_url: client.user.displayAvatarURL()
            },
            title: "The selection has been **cancelled** !",
            timestamp: new Date(),
            footer: {
              icon_url: client.user.displayAvatarURL(),
              text: "SuZam Tech"
            }
          }
        });
    } else message.channel.send({ embed: {
        color: 16711680,
        author: {
          name: client.user.username,
          icon_url: client.user.displayAvatarURL()
        },
        title: `You must send a valid number between **1** and **${tracks.length}** !`,
        timestamp: new Date(),
        footer: {
          icon_url: client.user.displayAvatarURL(),
          text: "SuZam Tech"
        }
      }
    });
};