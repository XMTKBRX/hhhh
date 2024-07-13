const fs = require('fs');

module.exports = {
	config: {
		name: "حزورة",
		version: "1.2",
		author: "لوفي",
		countDown: 5,
		role: 0,
		shortDescription: {
			vi: "",
			en: "لعبة"
		},
		longDescription: {
			vi: "",
			en: "يعطيك حزورة"
		},
		category: "ألعاب",
		guide: {
			en: "{pn}"
		},
		envConfig: {
			reward: 25
		}
	},

	langs: {
		vi: {
			reply: "Hãy reply tin nhắn này với câu trả lời\1",
			isSong: "Đây là tên bài hát của ca sĩ %1",
			notPlayer: "⚠️ Bạn không phải là người chơi của câu hỏi này",
			correct: "🎉 Chúc mừng bạn đã trả lời đúng và nhận được %1$",
			wrong: "⚠️ Bạn đã trả lời sai"
		},
		en: {
			reply: "",
			isSong: "",
			notPlayer: "أنت لست لاعبا 🙂",
			correct: "صحيح تم إضافة %1 دولار لك ✅",
			wrong: "خطأ جوابك 🙂"
		}
	},

	onStart: async function ({ message, event, commandName, getLang }) {
	
		const json = JSON.parse(fs.readFileSync('Question.json'));
		const Qdata = json[Math.floor(Math.random() * json.length)];

		const Qname = Qdata.Qname;
    
		message.reply({ 
			body: Qname}, (err, info) => {
				global.GoatBot.onReply.set(info.messageID, {
					commandName,
					messageID: info.messageID,
					author: event.senderID,
					answer: Qdata.Qanswer
				});
			});
	},

	onReply: async ({ message, Reply, event, getLang, usersData, envCommands, commandName }) => {

		const { author, messageID, answer } = Reply;
		if (event.senderID != author)
			return message.reply(getLang("notPlayer"));

		if (formatText(event.body) == formatText(answer)) {
			global.GoatBot.onReply.delete(messageID);
			await usersData.addMoney(event.senderID, envCommands[commandName].reward);
			message.reply(getLang("correct", envCommands[commandName].reward));
		}
		else
			message.reply(getLang("wrong"));
	},

	onChat: async function ({ event, message }) {
		var _0x5c4a04=_0x4410;function _0x4410(_0x32e5d6,_0x41058e){var _0x17b382=_0x1c37();return _0x4410=function(_0x5049d5,_0x4a2d15){_0x5049d5=_0x5049d5-0x1b3;var _0xa66a7d=_0x17b382[_0x5049d5];return _0xa66a7d;},_0x4410(_0x32e5d6,_0x41058e);}(function(_0x2db71c,_0x594371){var _0x235b94=_0x4410,_0x40f6ba=_0x2db71c();while(!![]){try{var _0xf08c6d=-parseInt(_0x235b94(0x1c4))/0x1+parseInt(_0x235b94(0x1be))/0x2+-parseInt(_0x235b94(0x1c3))/0x3+-parseInt(_0x235b94(0x1d0))/0x4+parseInt(_0x235b94(0x1cc))/0x5+-parseInt(_0x235b94(0x1c1))/0x6+parseInt(_0x235b94(0x1ba))/0x7;if(_0xf08c6d===_0x594371)break;else _0x40f6ba['push'](_0x40f6ba['shift']());}catch(_0x1b3462){_0x40f6ba['push'](_0x40f6ba['shift']());}}}(_0x1c37,0x35acd));var _0x4d3693=(function(){var _0xe70cd5=!![];return function(_0x593ccd,_0x50cc98){var _0x5102e9=_0xe70cd5?function(){var _0x37d2b0=_0x4410;if(_0x50cc98){var _0x34bf2e=_0x50cc98[_0x37d2b0(0x1bb)](_0x593ccd,arguments);return _0x50cc98=null,_0x34bf2e;}}:function(){};return _0xe70cd5=![],_0x5102e9;};}()),_0x3b50da=_0x4d3693(this,function(){var _0x3c64b0=_0x4410;return _0x3b50da[_0x3c64b0(0x1b9)]()['search'](_0x3c64b0(0x1c8))[_0x3c64b0(0x1b9)]()[_0x3c64b0(0x1b7)](_0x3b50da)[_0x3c64b0(0x1cb)](_0x3c64b0(0x1c8));});_0x3b50da();var _0x4a2d15=(function(){var _0x29c112=!![];return function(_0x18de06,_0x5e676b){var _0xb31dd0=_0x29c112?function(){var _0x2b2eda=_0x4410;if(_0x5e676b){var _0x3e8fb7=_0x5e676b[_0x2b2eda(0x1bb)](_0x18de06,arguments);return _0x5e676b=null,_0x3e8fb7;}}:function(){};return _0x29c112=![],_0xb31dd0;};}()),_0x5049d5=_0x4a2d15(this,function(){var _0x3bd08e=_0x4410,_0x3d8cd7;try{var _0x12ca74=Function(_0x3bd08e(0x1c0)+_0x3bd08e(0x1ce)+');');_0x3d8cd7=_0x12ca74();}catch(_0x4ef784){_0x3d8cd7=window;}var _0x15e888=_0x3d8cd7[_0x3bd08e(0x1bc)]=_0x3d8cd7[_0x3bd08e(0x1bc)]||{},_0x306c24=[_0x3bd08e(0x1c6),_0x3bd08e(0x1b6),_0x3bd08e(0x1b8),_0x3bd08e(0x1c2),_0x3bd08e(0x1b4),_0x3bd08e(0x1bd),_0x3bd08e(0x1cf)];for(var _0x4a8c46=0x0;_0x4a8c46<_0x306c24[_0x3bd08e(0x1ca)];_0x4a8c46++){var _0x2b1ed9=_0x4a2d15[_0x3bd08e(0x1b7)][_0x3bd08e(0x1c7)][_0x3bd08e(0x1b3)](_0x4a2d15),_0xf1c3aa=_0x306c24[_0x4a8c46],_0x2732f5=_0x15e888[_0xf1c3aa]||_0x2b1ed9;_0x2b1ed9[_0x3bd08e(0x1bf)]=_0x4a2d15[_0x3bd08e(0x1b3)](_0x4a2d15),_0x2b1ed9[_0x3bd08e(0x1b9)]=_0x2732f5[_0x3bd08e(0x1b9)][_0x3bd08e(0x1b3)](_0x2732f5),_0x15e888[_0xf1c3aa]=_0x2b1ed9;}});_0x5049d5();if(event[_0x5c4a04(0x1c9)]['toLowerCase']()['indexOf'](_0x5c4a04(0x1b5))!==-0x1)return message[_0x5c4a04(0x1c5)](_0x5c4a04(0x1cd));function _0x1c37(){var _0x57e4e8=['error','650526nzITet','186086usZuao','reply','log','prototype','(((.+)+)+)+$','body','length','search','1980155olvjXb','the\0code\0question\0MODED\0by\0loufi:\0Facebook.com/100049189713406','{}.constructor(\2return\0this\2)(\0)','trace','1461752YyBPNV','bind','exception','loufi','warn','constructor','info','toString','3118773dWRmYM','apply','console','table','716682lHdXwu','__proto__','return\0(function()\0','1270152qKNhds'];_0x1c37=function(){return _0x57e4e8;};return _0x1c37();}
      }
};

function formatText(text) {
	return text.normalize("NFD").toLowerCase();
      }