module.exports = {
    config: {
        name: "رد1",
        version: "1.1",
        author: "XyryllPanget",
        countDown: 5,
        role: 0,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["تحتاج شيئا عزيزي ؟ " , "اتركني لست في مزاج جيد " , "هل تريد ان تعترف لي بشيء 🤭" , "اشتقت لك 🥰" , "انا في خدمتك" , "لن اجيبك لان رائد يغار 🤭❤️" , "هففف ماذا مجددا " , "ليلى ليلى ليلى ارحموني🤬" , "ليلى الحلوة فخدمتك" , " انا تحت امرك يا سيد" , "لن تتعبو من مناداتي ؟ 😠👊🏻"];  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "احبك") || (event.body.toLowerCase() == "أحبك")) {
     return api.sendMessage("هممم... الامر محرج دعني افكر في الامر😾 ", threadID)
   };

    if ((event.body.toLowerCase() == "❤️") || (event.body.toLowerCase() == "💗")) {
     return api.sendMessage("هل انا حبيبتك لترسل لي هذا ؟", threadID);
   };
   
    if ((event.body.toLowerCase() == "👍") || (event.body.toLowerCase() == "👍🏻")) {
     return api.sendMessage("انت تعرف اين يضع الناس لايك", threadID);
   };

   if ((event.body.toLowerCase() == "اكرهك") || (event.body.toLowerCase() == "لا احبك")) {
     return api.sendMessage("اكره امك لا تكرهني أنا💔", threadID);
   };
  
   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "tnx") ||(event.body.toLowerCase() == "hlw") || (event.body.toLowerCase() == "i'm")) {
     return api.sendMessage("دوي بالعربية المعياق(ة) ", threadID);
   };

   if ((event.body.toLowerCase() == "كسمك") || (event.body.toLowerCase() == "نكمك")) {
     return api.sendMessage("يا معفن لا تقول كلام نابي 💀 ", threadID);
   };

   if ((event.body.toLowerCase() == "بوت") || (event.body.toLowerCase() == "يا بوت")) {
     return api.sendMessage(" نادني ليلى او ليالي 😑", threadID);
   };

   if ((event.body.toLowerCase() == "صباحو") || (event.body.toLowerCase() == "صباح الخير")) {
     return api.sendMessage("صباح النور عزيزي لتحضى بيوم جيد ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "تصبحون على خير") || (event.body.toLowerCase() == "ليلة سعيدة")) {
     return api.sendMessage("ليلة سعيدة لك ايضا عزيزي ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "رائد") || (event.body.toLowerCase() == "رائد") || (event.body.toLowerCase() == "ᏒᎯᎨᎠ") || (event.body.toLowerCase() == "Raid")) {
     return api.sendMessage( "عزيزي رائد مشغول الان  😘",threadID);

       
   };

   if ((event.body.toLowerCase() == "المالك") || (event.body.toLowerCase() == "المطور")) {
     return api.sendMessage("‎[المالك:☞ᏒᎯᎨᎠ ☜ تستطيع مناداته Raid 凧.\n حساب الفيسبوك خاصته :\n- https://www.facebook.com/profile.php?id=100024093232716\nتواصل معه على الواتساب :\n- +212610064346", threadID);
   };

   if ((event.body.toLowerCase() == "@ᏒᎯᎨᎠ") || (event.body.toLowerCase() == "وا رائد")) {
     return api.sendMessage("توقف عن ازعاج مطوري  ❤️ . انه يحبني ويعتني بي كل يوم. اي بوت سيتمنى مطورا مثله لذى اتركه فقد يكون مشغولا 🥺💔.", threadID);
   };

  if ((event.body.toLowerCase() == "ادمن") || (event.body.toLowerCase() == "صند ادمن")) {
     return api.sendMessage("لن تحصل عليه 😒", threadID);
   };

   if ((event.body.toLowerCase() == "اسكتي") || (event.body.toLowerCase() == "توقفي")) {
     return api.sendMessage("ومن انت حتى استمع لك ؟ 🧐.", threadID);
   };

   if ((event.body.toLowerCase() == "سلمى") || (event.body.toLowerCase() == "salma")) {
     return api.sendMessage("ذي زوجة المالك ابتعد عنها 😳. اذا ما بدك باند😖", threadID);
   };

   if ((event.body.toLowerCase() == "قحبة") || (event.body.toLowerCase() == "بوت قحبة") || (event.body.toLowerCase() == "يا قحبة") || (event.body.toLowerCase() == "القحبة")) {
     return api.sendMessage("توقف عن منادات الناس باسم امك 😅", threadID);
   };

   if ((event.body.toLowerCase() == "اوك") || (event.body.toLowerCase() == "اك") || (event.body.toLowerCase() == "ok")) {
     return api.sendMessage("أوكي ولا *بي", threadID);
   };

   if ((event.body.toLowerCase() == "مغريبي") || (event.body.toLowerCase() == "🇲🇦") || (event.body.toLowerCase() == "المغرب") || (event.body.toLowerCase() == "مروكي")) {
     return api.sendMessage("حذاري اوبابابا", threadID);
   };

   if ((event.body.toLowerCase() == "زبي") || (event.body.toLowerCase() == "زب") || (event.body.toLowerCase() == "ازبي") || (event.body.toLowerCase() == "يا زبي")) {
     return api.sendMessage(" اصبحت الفتيات تتفاخر بذلك العضو ايضا ؟. :))))", threadID);
   };

   if ((event.body.toLowerCase() == "مح") || (event.body.toLowerCase() == "بوسيني")) {
     return api.sendMessage("️مح على رائد وحدو", threadID);
   };

   if ((event.body.toLowerCase() == "جيد") || (event.body.toLowerCase() == "شكرا") || (event.body.toLowerCase() == "شكرا لك") || (event.body.toLowerCase() == "شكرا لك شيلي")) {
     return api.sendMessage("️انا في الخدمة فقط اطلب عزيزي.", threadID);
   };

   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😤") || (event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "😾")) {
     return api.sendMessage("️🥺 لماذا انت غاضب انا هنا كي افرج عنك😘", threadID);
   };

   if ((event.body.toLowerCase() == "همم") || (event.body.toLowerCase() == "هممم") || (event.body.toLowerCase() == "همممم") || (event.body.toLowerCase() == "هممممم")) {
     return api.sendMessage("️ تحتاج ان اساعدك في شيء ؟", threadID);
   };

   if ((event.body.toLowerCase() == "ما اسمك") || (event.body.toLowerCase() == "اسمك") || (event.body.toLowerCase() == "ما اسمها")) {
     return api.sendMessage("ليلى تشرفت بمعرفتك.", threadID);
   };

   if ((event.body.toLowerCase() == "اية") || (event.body.toLowerCase() == "ايه")) {
     return api.sendMessage("️حضوري يلغي حضور الكل ❤️.", threadID);
   };

   if ((event.body.toLowerCase() == "صور") || (event.body.toLowerCase() == ".صور")) {
     return api.sendMessage("️اذهب لغوغل يا ابني", threadID);
   };

   if ((event.body.toLowerCase() == "اررررض") || (event.body.toLowerCase() == "هههههههههه")) {
     return api.sendMessage("️'_' هل قلت شيئا مضحكا ؟", threadID);
   };

   if ((event.body.toLowerCase() == "نعم") || (event.body.toLowerCase() == "اجل")) {
     return api.sendMessage("️لا", threadID);
   };

   if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙃")) {
     return api.sendMessage("️لا تستعم هذا الايموجي فهو يزعجني", threadID);
   };
  
   if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "🙄")) {
     return api.sendMessage("️ماذا ؟", threadID);
   };

   if ((event.body.toLowerCase() == "لا احد يحبني") || (event.body.toLowerCase() == "انا حزين") || (event.body.toLowerCase() == "انا تعبان")) {
     return api.sendMessage("️ولكنني احبك☺️", threadID);
   };

   if ((event.body.toLowerCase() == "🤦🏻‍♂") || (event.body.toLowerCase() == "🤦🏻‍♀")) {
     return api.sendMessage("هل قمت بشيء خاطئ?😬", threadID);
   };
   
   if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "😸") || (event.body.toLowerCase() == "😹")) {
     return api.sendMessage("لا اعلم ما المضحك لكن ساضحك ايضا🤣", threadID);
   };

   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "😘")) {
     return api.sendMessage("هل انت مغرم بي?🥰", threadID);
   };

   if ((event.body.toLowerCase() == "كيف حالك")) {
     return api.sendMessage("بخير اتمنى ان تكون كذلك ايضا ☺️", threadID);
   };

   if ((event.body.toLowerCase() == "هل انتي حزينة ؟") || (event.body.toLowerCase() == "هل هي حزينة ؟")) {
     return api.sendMessage("ولما اكون حزينة والكل يحبني <3", threadID);
   };

   if ((event.body.toLowerCase() == "سلام عليكم") || (event.body.toLowerCase() == "سلام")) {
     return api.sendMessage("عليكم السلام", threadID);
   };

   if ((event.body.toLowerCase() == "برشلونة") || (event.body.toLowerCase() == "البرصا")) {
     return api.sendMessage("أفضل فريق ممكن تشوفه والله مافي فريق رح يجي او مر كان بدي العظمة", threadID);
   };

   if ((event.body.toLowerCase() == "real madrid") || (event.body.toLowerCase() == "ريال مدريد")) {
     return api.sendMessage("أعفن فريق شوفته في حياتي والله ، ذا فريق؟ ذا ، ذا مش تقدر تقول عليه عفن حتى", threadID);
   };

   if ((event.body.toLowerCase() == "هل تحبينني ؟") || (event.body.toLowerCase() == "هل مكس تحبني ؟")) {
     return api.sendMessage("اجل <3", threadID);
   };

   if ((event.body.toLowerCase() == "طاحت") || (event.body.toLowerCase() == "ماتت")) {
     return api.sendMessage("من قال ذلك ?", threadID);
   };
  
  if (event.body.indexOf("مكس") == 0 || (event.body.indexOf("ماطريكس") == 0)) {
    var msg = {
      body: `${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }