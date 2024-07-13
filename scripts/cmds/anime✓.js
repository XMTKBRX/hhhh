module.exports = {
  config: {
    name: "انمي",
    aliases: ["أنمي", "إنمي"],
    version: "1.0",
    author: "الين",
    countDown: 2,
    role: 0,
    shortDescription: "صور أنمي",
    longDescription: "",
    category: "صور",
    guide: "{pn}"
  },

  onStart: async function ({ message, args }) {
    let images = [
  "https://i.imgur.com/28IRkSy.jpg","https://i.imgur.com/08hHe6A.jpg","https://i.imgur.com/0pUf5cb.jpg","https://i.imgur.com/xWRnVVb.jpg","https://i.imgur.com/yJpVO4A.jpg","https://i.imgur.com/gS3lTb7.jpg","https://i.imgur.com/sLQq7RS.jpg","https://i.imgur.com/yzXEfZ2.jpg","https://i.imgur.com/e9qmhvr.jpg","https://i.imgur.com/Iq5KPXb.jpg","https://i.imgur.com/oVOTF1m.jpg","https://i.imgur.com/O36bCf7.jpg","https://i.imgur.com/JgjwHIE.jpg","https://i.imgur.com/JgjwHIE.jpg","https://i.imgur.com/QhLGwGx.jpg","https://i.imgur.com/Fnndf4I.jpg","https://i.imgur.com/LU2cf2G.jpg","https://i.imgur.com/GEsRra0.jpg","https://i.imgur.com/Ec404TD.jpg","https://i.imgur.com/gk20dGL.jpg","https://i.imgur.com/yiZ8x5f.jpg","https://i.imgur.com/wGaqCD4.jpg","https://i.imgur.com/ASwhBq2.jpg"
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