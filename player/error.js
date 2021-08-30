module.exports = (client, error, message, ...args) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send({ embed: {
                color: 16711680,
                author: {
                  name: client.user.username,
                  icon_url: client.user.displayAvatarURL()
                },
                title: "There is no music being played on this server !",
                timestamp: new Date(),
                footer: {
                  icon_url: client.user.displayAvatarURL(),
                  text: "SuZam Tech"
                }
              }
            });
            break;
        case 'NotConnected':
            message.channel.send({ embed: {
                color: 16711680,
                author: {
                  name: client.user.username,
                  icon_url: client.user.displayAvatarURL()
                },
                title: "You are not connected in any voice channel !",
                timestamp: new Date(),
                footer: {
                  icon_url: client.user.displayAvatarURL(),
                  text: "SuZam Tech"
                }
              }
            });
            break;
        case 'UnableToJoin':
            message.channel.send({ embed: {
                color: 16711680,
                author: {
                  name: client.user.username,
                  icon_url: client.user.displayAvatarURL()
                },
                title: "I am not able to join your voice channel, please check my permissions !",
                timestamp: new Date(),
                footer: {
                  icon_url: client.user.displayAvatarURL(),
                  text: "SuZam Tech"
                }
              }
            });
            break;
        case 'VideoUnavailable':
            message.channel.send({ embed: {
                color: 16711680,
                author: {
                  name: client.user.username,
                  icon_url: client.user.displayAvatarURL()
                },
                title: args[0].title + "is not available in your country! Skipping...",
                timestamp: new Date(),
                footer: {
                  icon_url: client.user.displayAvatarURL(),
                  text: "SuZam Tech"
                }
              }
            });
            break;
        case 'MusicStarting':
            message.channel.send({ embed: {
                color: 13948763,
                title: "The music is starting... please wait and retry!",
                timestamp: new Date()
              }
            });
            break;
        default:
            message.channel.send({ embed: {
                color: 16711680,
                author: {
                  name: client.user.username,
                  icon_url: client.user.displayAvatarURL()
                },
                title: "Something went wrong ... Error : " + error,
                timestamp: new Date(),
                footer: {
                  icon_url: client.user.displayAvatarURL(),
                  text: "SuZam Tech"
                }
              }
            });
    };
};
