const fs = require("fs");

module.exports = {
  config: {
    name: "بنك",
    description: "إيداع أو سحب الأموال من البنك وكسب الفائدة",
    guide: {
			vi: "",
			en: "بنك:\ائدة - عرض - سحب - ايداع و اكتب الاثرى ليعرض لك اثرى اشخاص"
    },
    category: "الأموال",
    countDown: 10,
		role: 0
  },
  onStart: async function ({ args, message, event, usersData }) {
    const userMoney = await usersData.get(event.senderID, "money");
    const user = parseInt(event.senderID);
    const bankData = JSON.parse(fs.readFileSync("bank.json", "utf8"));

    if (!bankData[user]) {
      bankData[user] = { bank: 0, lastInterestClaimed: Date.now() };
      fs.writeFile("bank.json", JSON.stringify(bankData), (err) => {
        if (err) throw err;
      });
    }

    const command = args[0];
    const amount = parseInt(args[1]);
    const recipientUID = parseInt(args[2]); // Assuming recipientUID is passed as the second argument in the transfer command


    if (command === "ايداع") {
      if (isNaN(amount) || amount <= 0) {
        return message.reply("[♡════◄∘∘بنك ايلييونة∘∘►════♡]\nأدخل المبلغ 🔁");
      }

      if (userMoney < amount) {
        return message.reply("[♡═════◄∘∘بنك ايلييونة∘∘►════♡]\nهذا المبلغ ليس متوفرا عندك✖️");
      }

      bankData[user].bank += amount;
      await usersData.set(event.senderID, {
        money: userMoney - amount
      });
      fs.writeFile("bank.json", JSON.stringify(bankData), (err) => {
        if (err) throw err;
      });

      return message.reply(`♡═══◄∘∘بنك ايلييونة∘∘►═══♡\nتم بنجاح إيداع مبلغ ${amount} $ في حسابك على البنك✅`);
    } else if (command === "سحب") {
      const balance = bankData[user].bank || 0;

      if (isNaN(amount) || amount <= 0) {
        return message.reply("[♡═════◄∘∘بنك ايلييونة∘∘►════♡]\nمن فضلك أدخل المبلغ الصحيح");
      }

      if (amount > balance) {
        return message.reply("♡═══◄∘∘بنك ايلييونة∘∘►══♡]\nهذا المبلغ أكبر من مبلغك في البنك");
      }

      bankData[user].bank = balance - amount;
      const userMoney = await usersData.get(event.senderID, "money");
      await usersData.set(event.senderID, {
        money: userMoney + amount
      });
      fs.writeFile("bank.json", JSON.stringify(bankData), (err) => {
        if (err) throw err;
      });

      return message.reply(`♡═════◄∘∘بنك ايلييونة∘∘►════♡\nلقد قمت بنجاح بسحب ${amount} $ من حسابك الافتراضي`);
    } else if (command === "عرض") {
      const balance = bankData[user].bank !== undefined && !isNaN(bankData[user].bank) ? bankData[user].bank :0;
  return message.reply(`[♡═════◄∘∘بنك ايلييونة∘∘►════♡]\nحسابك فيه مبلغ: ${balance} $\nللسحب أكتب بنك سحب ${balance}\nلتأخذ الفائدة أكتب بنك فائدة`);
} else if (command === "فائدة") {
  const interestRate = 0.001; // 5% annual interest rate
  const lastInterestClaimed = bankData[user].lastInterestClaimed || Date.now();
  const currentTime = Date.now();

  // Calculate the time difference in seconds
  const timeDiffInSeconds = (currentTime - lastInterestClaimed) / 1000;

  // Calculate the interest earned
  const interestEarned = bankData[user].bank * (interestRate / 365) * timeDiffInSeconds;

  // Update the lastInterestClaimed time
  bankData[user].lastInterestClaimed = currentTime;

  // Add the interest earned to the bank balance
  bankData[user].bank += interestEarned;

  fs.writeFile("bank.json", JSON.stringify(bankData), (err) => {
    if (err) throw err;
  });

  return message.reply(`[بنك ]\nالفائدة بقيمة ${interestEarned.toFixed(2)} $\nأضيفت بنجاح لرصيد حسابك`);
        } else if (command === "تحويل") {
  const balance = bankData[user].bank || 0;

  if (isNaN(amount) || amount <= 0) {
    return message.reply("[بنك ]\nأدخل المبلغ الذي تريد تحويله");
  }

  if (balance < amount) {
    return message.reply("[بنك ]\nالمبلغ غير موجود في حسابك");
  }

  if (isNaN(recipientUID)) {
    return message.reply("[بنك ]\nأكتب:\بنك تحويل ثم المبلغ و المُعرف {uid} المُستلم");
  }

  if (!bankData[recipientUID]) {
    bankData[recipientUID] = { bank: 0, lastInterestClaimed: Date.now() };
    fs.writeFile("bank.json", JSON.stringify(bankData), (err) => {
      if (err) throw err;
    });
  }

  bankData[user].bank -= amount;
  bankData[recipientUID].bank += amount;
  fs.writeFile("bank.json", JSON.stringify(bankData), (err) => {
    if (err) throw err;
  });

  return message.reply(`[بنك ]\nتم خصم ${amount} $ من حسابك و تحولت إلى ${recipientUID}`);
} else {
  return message.reply(" ♡════◄∘∘بنك ايلييونة∘∘►═══♡\nتوفر الخدمات التالية:\nايداع: وضع المال في البنك.\nسحب:سحب المال من البنك من حسابك.\nعرض:عرض مبلغ حسابك البنكي.\nفائدة:تحصل على فائدة جيدة\nتحويل:تحويل مال من حسابك الى حساب شخص اخر بالآيدي:\nبنك تحويل «ايديه» المبلغ.\n♡═════◄∘∘❀∘∘►════♡");
} 
}
};