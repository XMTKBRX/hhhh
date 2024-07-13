module.exports = {
  config: {
    name: "خلفية",
    aliases: ["خلفيات", "خلفيه"],
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
      "https://i.imgur.com/NsJ72EB.jpg","https://i.imgur.com/qVBH0c5.jpg","https://i.imgur.com/SN51KJo.jpg","https://i.imgur.com/o1pVBTH.jpg","https://i.imgur.com/pdAdscc.jpg","https://i.imgur.com/ehK09uy.jpg","https://i.imgur.com/4pLCB9h.jpg","https://i.imgur.com/vz2pLrZ.jpg","https://i.imgur.com/0FR3RlJ.jpg","https://i.imgur.com/SwwtVEK.jpg","https://i.imgur.com/RTCmjGW.jpg","https://i.imgur.com/WLEbUHH.jpg","https://i.imgur.com/Iqb8NW4.jpg","https://i.imgur.com/Iqb8NW4.jpg","https://i.imgur.com/47sKby4.jpg","https://i.imgur.com/tEKZGYw.jpg","https://i.imgur.com/KEYNU10.jpg","https://i.imgur.com/C96uLWQ.jpg","https://i.imgur.com/c5Vdx2r.jpg","https://i.imgur.com/sQfjSMz.jpg","https://i.imgur.com/ceMPHDc.jpg","https://i.imgur.com/DQjfDwP.jpg","https://i.imgur.com/PQkBVlS.jpg","https://i.imgur.com/PB5xcGH.jpg","https://i.imgur.com/nYKpxVS.jpg","https://i.imgur.com/Q4Uxcfh.jpg","https://i.imgur.com/ldXVd2L.jpg","https://i.imgur.com/fmnQGhU.jpg","https://i.imgur.com/C7SlPn6.jpg","https://i.imgur.com/Qtl6YcG.jpg","https://i.imgur.com/yeP47S5.jpg","https://i.imgur.com/CDJwgg6.jpg","https://i.imgur.com/PrXiky8.jpg","https://i.imgur.com/Ur7Wiik.jpg","https://i.imgur.com/s9SlsdJ.jpg","https://i.imgur.com/sbED0Ad.jpg","https://i.imgur.com/3Np4MZT.jpg","https://i.imgur.com/hNlCWeW.jpg","https://i.imgur.com/oWwCdsh.jpg"
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