module.exports = {
	config: {
		name: "مسح",
		version: "1.1",
		author: "عبيدة🤍",
		countDown: 5,
		role: 0,
		shortDescription: {
			vi: "Gỡ tin nhắn của bot",
			en: "مسح رسائل البوت"
		},
		longDescription: {
			vi: "Gỡ tin nhắn của bot",
			en: "مسح رسائل البوت"
		},
		category: "المجموعة",
		guide: {
			vi: "reply tin nhắn muốn gỡ của bot và gọi lệnh {pn}",
			en: "رد على رسالة البوت بكلمة {pn}"
		}
	},

	langs: {
		vi: {
			syntaxError: "Vui lòng reply tin nhắn muốn gỡ của bot"
		},
		en: {
			syntaxError: "فقط رد على رسالة البوت 🌝 | ⛔ لأني لست ساحر 😹"
		}
	},

	onStart: async function ({ message, event, api, getLang }) {
		if (!event.messageReply || event.messageReply.senderID != api.getCurrentUserID())
			return message.reply(getLang("syntaxError"));
		message.unsend(event.messageReply.messageID);
	}
};