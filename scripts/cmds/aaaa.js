module.exports = {
  config: {
    name: "بانكاي1",
    aliases: ["بانكا", "بنكاي"],
    version: "1.0",
    author: "الين",
    countDown: 2,
    role: 0,
    shortDescription: "صور من صانع يوسف",
    longDescription: "",
    category: "صور",
    guide: "{pn}"
  },

  onStart: async function ({ message, args }) {
    let images = [
    "https://i.imgur.com/9lby4xq.jpg","https://i.imgur.com/3x2pWC8.jpg","https://i.imgur.com/Jh4lvmb.jpg","https://i.imgur.com/JTJvqTC.jpg","https://i.imgur.com/cQxapjW.jpg","https://i.imgur.com/yvNILq2.jpg"
    ];

    if (args[0] === "متعددة") {
      for (let i = 0; i < 4; i++) {
        let img = images[Math.floor(Math.random() * images.length)];
        message.send({
          attachment: await global.utils.getStreamFromURL(img)
        });
      }
    } else {
      let img = images[Math.floor(Math.random() * images.length)];
      message.send({
        attachment: await global.utils.getStreamFromURL(img)
      });
    }
  }
}