module.exports = {
  config: {
    name: "قطة",
    aliases: ["قط", "قطط"],
    version: "1.0",
    author: "الين",
    countDown: 2,
    role: 0,
    shortDescription: "صور قطط",
    longDescription: "",
    category: "صور",
    guide: "{pn}"
  },

  onStart: async function ({ message, args }) {
    let images = [
 "https://i.imgur.com/pqC8IUJ.jpg","https://i.imgur.com/O7nyqwm.jpg","https://i.imgur.com/aIFHEgn.jpg","https://i.imgur.com/mhBoBEt.jpg","https://i.imgur.com/2HeOND8.jpg","https://i.imgur.com/YwORHN9.jpg","https://i.imgur.com/E2kFHPv.jpg","https://i.imgur.com/iEBOm39.jpg","https://i.imgur.com/pLSrBUS.jpg","https://i.imgur.com/rTew4K9.jpg","https://i.imgur.com/0drVDb4.jpg","https://i.imgur.com/pJSNbTt.jpg","https://i.imgur.com/741TnLm.jpg","https://i.imgur.com/TaWMQMS.jpg","https://i.imgur.com/2K4w2wI.jpg","https://i.imgur.com/sWmZoIb.jpg","https://i.imgur.com/JYNpDP9.jpg","https://i.imgur.com/zpiOqPJ.jpg","https://i.imgur.com/vyqPUVx.jpg","https://i.imgur.com/WKg0TgF.jpg","https://i.imgur.com/wqGBDGq.jpg","https://i.imgur.com/Rvfpb7E.jpg","https://i.imgur.com/KpMjOSU.jpg","https://i.imgur.com/KmEttD7.jpg"
    ];

    if (args[0] === "متعددة") {
      for (let i = 0; i < 4; i++) {
        let img = images[Math.floor(Math.random() * images.length)];
        message.send({
          attachment: await global.utils.getStreamFromURL(img)
        });
      }
 const msg = "「 هذا هو تطقيمك🗿🚬 」";
 const allImages = [
 fs.createReadStream(__dirname + "/tmp/img1.png"),
 fs.createReadStream(__dirname + "/tmp/img2.png")
 ];
    } else {
      let img = images[Math.floor(Math.random() * images.length)];
      message.send({
        attachment: await global.utils.getStreamFromURL(img)
      });
    }
  }
}