module.exports = {
  config: {
    name: "كوبل",
    aliases: ["كول", "كوبيل"],
    version: "1.0",
    author: "الين",
    countDown: 2,
    role: 0,
    shortDescription: "صور أشخاص",
    longDescription: "",
    category: "صور",
    guide: "{pn}"
  },

  onStart: async function ({ message, args }) {
    let images = [
    "https://i.imgur.com/aMpoNFN.jpg","https://i.imgur.com/IWxEvd7.jpg","https://i.imgur.com/6Okbjfi.jpg","https://i.imgur.com/P8uHI0y.jpg","https://i.imgur.com/afwalBq.jpg","https://i.imgur.com/NUvtP4r.jpg","https://i.imgur.com/g89IHrl.jpg","https://i.imgur.com/Eveq6Tk.jpg","https://i.imgur.com/DZ8m4Sq.jpg","https://i.imgur.com/iBFllgd.jpg","https://i.imgur.com/N0qcl8F.jpg","https://i.imgur.com/hFE8Me8.jpg","https://i.imgur.com/5sZodpq.jpg","https://i.imgur.com/1vM7d6K.jpg","https://i.imgur.com/cYuVefD.jpg"
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