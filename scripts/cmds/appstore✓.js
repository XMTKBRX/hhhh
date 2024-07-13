const axios = require('axios');

// config 
const apiKey = "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";
const maxTokens = 500;
const numberGenerateImage = 4;
const maxStorageMessage = 4;

if (!global.temp.openAIUsing)
	global.temp.openAIUsing = {};
if (!global.temp.openAIHistory)
	global.temp.openAIHistory = {};

const { openAIUsing, openAIHistory } = global.temp;

module.exports = {
	config: {
		name: "gpt",
		version: "1.0",
		author: "NTKhang",
		countDown: 5,
		role: 0,
		shortDescription: {
			vi: "GPT chat",
			en: "GPT chat"
		},
		longDescription: {
			vi: "GPT chat",
			en: "GPT chat"
		},
		category: "box chat",
		guide: {
			vi: "{pn} [nội dung | để trống]",
			en: "{pn} [content | empty]"
		}
	},

	langs: {
		vi: {
			apiKeyEmpty: "Vui lòng cung cấp api key cho openai tại file scripts/cmds/gpt.js",
			invalidContentDraw: "Vui lòng nhập nội dung bạn muốn vẽ",
			yourAreUsing: "Bạn đang sử dụng gpt chat, vui lòng chờ quay lại sau khi yêu cầu trước kết thúc",
			processingRequest: "Đang xử lý yêu cầu của bạn...",
			invalidContent: "Vui lòng nhập nội dung bạn muốn chat",
			error: "Đã có lỗi xảy ra\n%1",
			clearHistory: "Đã xóa lịch sử chat của bạn với gpt"
		},
		en: {
			apiKeyEmpty: "Please provide api key for openai at file scripts/cmds/gpt.js",
			invalidContentDraw: "Please enter the content you want to draw",
			yourAreUsing: "You are using gpt chat, please wait until the previous request ends",
			processingRequest: "Processing your request...",
			invalidContent: "Please enter the content you want to chat",
			error: "An error has occurred\n%1",
			clearHistory: "Your chat history with gpt has been deleted"
		}
	},

	onStart: async function ({ message, event, args, getLang, prefix, commandName }) {
		if (!apiKey)
			return message.reply(getLang('apiKeyEmpty', prefix));

		switch (args[0]) {
			case 'img':
			case 'image':
			case 'draw': {
				if (!args[1])
					return message.reply(getLang('invalidContentDraw'));
				if (openAIUsing[event.senderID])
					return message.reply(getLang("yourAreUsing"));

				openAIUsing[event.senderID] = true;

				try {
					const sending = message.reply(getLang('processingRequest'));
					const responseImage = await axios({
						url: "https://api.openai.com/v1/images/generations",
						method: "POST",
						headers: {
							"Authorization": `Bearer ${apiKey}`,
							"Content-Type": "application/json"
						},
						data: {
							prompt: args.slice(1).join(' '),
							n: numberGenerateImage,
							size: '1024x1024'
						}
					});
					const imageUrls = responseImage.data.data;
					const images = await Promise.all(imageUrls.map(async (item) => {
						const image = await axios.get(item.url, {
							responseType: 'stream'
						});
						image.data.path = `${Date.now()}.png`;
						return image.data;
					}));
					return message.reply({
						attachment: images
					}, async () => {
						message.unsend(await sending.messageID);
						delete openAIUsing[event.senderID];
					});
				}
				catch (err) {
					const errorMessage = err.response?.data.error.message || err.message;
					return message.reply(getLang('error', errorMessage || ''), () => {
						delete openAIUsing[event.senderID];
					});
				}
			}
			case 'clear': {
				openAIHistory[event.senderID] = [];
				return message.reply(getLang('clearHistory'));
			}
			default: {
				if (!args[1])
					return message.reply(getLang('invalidContent'));

				handleGpt(event, message, args, getLang, commandName);
			}
		}
	},

	onReply: async function ({ Reply, message, event, args, getLang, commandName }) {
		const { author } = Reply;
		if (!author)
			return;

		handleGpt(event, message, args, getLang, commandName);
	}
};

async function askGpt(event) {
	const response = await axios({
		url: "https://api.openai.com/v1/chat/completions",
		method: "POST",
		headers: {
			"Authorization": `Bearer ${apiKey}`,
			"Content-Type": "application/json"
		},
		data: {
			model: "gpt-3.5-turbo",
			messages: openAIHistory[event.senderID],
			max_tokens: maxTokens,
			temperature: 0.7
		}
	});
	return response;
}

async function handleGpt(event, message, args, getLang, commandName) {
	try {
		openAIUsing[event.senderID] = true;

		if (
			!openAIHistory[event.senderID] ||
			!Array.isArray(openAIHistory[event.senderID])
		)
			openAIHistory[event.senderID] = [];

		if (openAIHistory[event.senderID].length >= maxStorageMessage)
			openAIHistory[event.senderID].shift();

		openAIHistory[event.senderID].push({
			role: 'user',
			content: args.join(' ')
		});

		const response = await askGpt(event);
		const text = response.data.choices[0].message.content;

		openAIHistory[event.senderID].push({
			role: 'assistant',
			content: text
		});

		return message.reply(text, (err, info) => {
			global.GoatBot.onReply.set(info.messageID, {
				commandName,
				author: event.senderID,
				messageID: info.messageID
			});
		});
	}
	catch (err) {
		const errorMessage = err.response?.data.error.message || err.message || "";
		return message.reply(getLang('error', errorMessage), () => {
			delete openAIUsing[event.senderID];
		});
	}
    }