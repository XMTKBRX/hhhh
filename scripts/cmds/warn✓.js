const { getTime } = global.utils;

module.exports = {
	config: {
		name: "تحذير",
		version: "1.3",
		author: "NTKhang",
		countDown: 5,
		role: 0,
		shortDescription: {
			vi: "cảnh cáo thành viên",
			en: "تحذير أعضاء"
		},
		longDescription: {
			vi: "cảnh cáo thành viên trong nhóm, đủ 3 lần ban khỏi box",
			en: "تحذير الأعضاء وكل من له ثلاث إنذارات يطرد"
		},
		category: "المجموعة",
		guide: {
			vi: "   {pn} @tag <lý do>: dùng cảnh cáo thành viên"
				+ "\n   {pn} list: xem danh sách những thành viên đã bị cảnh cáo"
				+ "\n   {pn} listban: xem danh sách những thành viên đã bị cảnh cáo đủ 3 lần và bị ban khỏi box"
				+ "\n   {pn} info [@tag | <uid> | để trống]: xem thông tin cảnh cáo của người được tag hoặc uid hoặc bản thân"
				+ "\n   {pn} unban <uid>: gỡ ban thành viên bằng uid"
				+ "\n   {pn} unwarn <uid> [<số thứ tự> | để trống]: gỡ cảnh cáo thành viên bằng uid và số thứ tự cảnh cáo"
				+ "\n   {pn} warn reset: reset tất cả dữ liệu cảnh cáo"
				+ "\n⚠️ Cần set quản trị viên cho bot để bot tự kick thành viên bị ban",
			en: "   تحذير @تاغ <السبب>: تحذير عضو\n   تحذير قائمة: رؤية قائمة المحذرين ☣️\n   تحذير قائمةالحضر: رؤية قائمة المحضوريين من المجموعة ❌\n   تحذير معلومات [@تاغ | <آيدي> |  ]: معلومات التحذير لشخص سويت له تاغ أو نفسك\n   تحذير فك <آيدي>: فك البان عن عضو بآيديه\n   تحذير نووارن <آيدي> [<شخص محذر> |  ]: إزالة التحذيير بالآيدي\n   تحذير حذف: حذف التحذيير من الكل\n⚠️ يجب جعل البوت أدمن كي يطرد كل من تم تحذيره ثلاث مرات"
		}
	},

	langs: {
		vi: {
			list: "Danh sách những thành viên bị cảnh cáo:\n%1\n\nĐể xem chi tiết những lần cảnh cáo hãy dùng lệnh \"%2warn info  [@tag | <uid> | để trống]\": để xem thông tin cảnh cáo của người được tag hoặc uid hoặc bản thân",
			listBan: "Danh sách những thành viên bị cảnh cáo đủ 3 lần và ban khỏi box:\n%1",
			listEmpty: "Nhóm bạn chưa có thành viên nào bị cảnh cáo",
			listBanEmpty: "Nhóm bạn chưa có thành viên nào bị ban khỏi box",
			invalidUid: "Vui lòng nhập uid hợp lệ của người bạn muốn xem thông tin",
			noData: "Không có dữ liệu nào",
			noPermission: "❌ Chỉ quản trị viên nhóm mới có thể unban thành viên bị ban khỏi box",
			invalidUid2: "⚠️ Vui lòng nhập uid hợp lệ của người muốn gỡ ban",
			notBanned: "⚠️ Người dùng mang id %1 chưa bị ban khỏi box của bạn",
			unbanSuccess: "✅ Đã gỡ ban thành viên [%1 | %2], hiện tại người này có thể tham gia box chat của bạn",
			noPermission2: "❌ Chỉ quản trị viên nhóm mới có thể gỡ cảnh cáo của thành viên trong nhóm",
			invalidUid3: "⚠️ Vui lòng nhập uid hoặc tag người muốn gỡ cảnh cáo",
			noData2: "⚠️ Người dùng mang id %1 chưa có dữ liệu cảnh cáo",
			notEnoughWarn: "❌ Người dùng %1 chỉ có %2 lần cảnh cáo",
			unwarnSuccess: "✅ Đã gỡ lần cảnh cáo thứ %1 của thành viên [%2 | %3] thành công",
			noPermission3: "❌ Chỉ quản trị viên nhóm mới có thể reset dữ liệu cảnh cáo",
			resetWarnSuccess: "✅ Đã reset dữ liệu cảnh cáo thành công",
			noPermission4: "❌ Chỉ quản trị viên nhóm mới có thể cảnh cáo thành viên trong nhóm",
			invalidUid4: "⚠️ Bạn cần phải tag hoặc phản hồi tin nhắn của người muốn cảnh cáo",
			warnSuccess: "⚠️ Đã cảnh cáo thành viên %1 lần %2\n- Uid: %3\n- Lý do: %4\n- Date Time: %5\nThành viên này đã bị cảnh cáo đủ 3 lần và bị ban khỏi box, để gỡ ban hãy sử dụng lệnh \"%6warn unban <uid>\" (với uid là uid của người muốn gỡ ban)",
			noPermission5: "⚠️ Bot cần quyền quản trị viên để kick thành viên bị ban",
			warnSuccess2: "⚠️ Đã cảnh cáo thành viên %1 lần %2\n- Uid: %3\n- Lý do: %4\n- Date Time: %5\nNếu vi phạm %6 lần nữa người này sẽ bị ban khỏi box",
			hasBanned: "⚠️ Thành viên sau đã bị cảnh cáo đủ 3 lần trước đó và bị ban khỏi box:\n%1",
			failedKick: "⚠️ Đã xảy ra lỗi khi kick những thành viên sau:\n%1"
		},
		en: {
			list: "قائمة الأعضاء المحذريين:\n%1\n\nلرؤية التفاصيل, أكتب \"%2تحذيير معلومات [@تاغ | <آيدي> |  ]\" : لرؤية التفاصييل بدقة✅",
			listBan: "قائمة الأشخاص الذين تم تحذييرهم ثلاث مرات وتم حضرهم من المجموعة :\n%1",
			listEmpty: "المجموعة نظيفة ✅",
			listBanEmpty: "المجموعة لا يوجد محضوروون منها ☣️",
			invalidUid: "أدخل آيدي نظيف",
			noData: "لا يوجد معلومات ☣️",
			noPermission: "❌ فقط الأدمن يفك الحضر ☣️",
			invalidUid2: "⚠️ أدخل آيدي صحيح كي يفك الحضر ",
			notBanned: "⚠️ صاحب الآيدي %1 ليس محضورا",
			unbanSuccess: "✅ تم فك الحضر عن [%1 | %2], يستطيع الآن دخول المجموعة ✅",
			noPermission2: "❌ فقط أدمن المجموعة يستطيع فعلها ☣️",
			invalidUid3: "⚠️ أدخل الآيدي أو ضع تاغ للشخص",
			noData2: "⚠️ صاحب الآيدي %1 لم يحذر",
			notEnoughWarn: "❌ العضو %1 لديه فقط %2 إنذار",
			unwarnSuccess: "✅ تم حذف التحذيير %1 من الأشخاص [%2 | %3]",
			noPermission3: "❌ فقط أدمن المجموعة يشيل التحذير من الكل",
			resetWarnSuccess: "✅ تم حذف كل البيانات",
			noPermission4: "❌فقط الأدمن يقدر يحذر",
			invalidUid4: "⚠️ضع تاغ أو رد على شخص ❌",
			warnSuccess: "⚠️ تحذير العضو %1 المرة %2\n- Uid: %3\n- السبب: %4\n- معلومات كل عدد: %5\nهذا العضو حذر ثلاث مرات وتم حضره من المجموعة, لفك الحضر أكتب \"%6 تحذير أونوارن <آيدي>\" (آيدي الشخص الذي تريد فك التحذير عنه)",
			noPermission5: "⚠️ يجب جعل البوت أدمن ❌✅",
			warnSuccess2: "⚠️ تحذير العضو %1 المرة %2\n- آيديه: %3\n- السبب: %4\n- معلومات كل مرة: %5\nإذا إستمر %6 مرة, سيطرد نهائيا من المجموعة ",
			hasBanned: "⚠️ هاؤلاء تم تحذيرهم ثلاث مرات و تم حضرهم:\n%1",
			failedKick: "⚠️ حدثت مشكلة أثناء محاولة طرد العضو:\n%1"
		}
	},

	onStart: async function ({ message, api, event, args, threadsData, usersData, prefix, role, getLang }) {
		if (!args[0])
			return message.SyntaxError();
		const { threadID, senderID } = event;
		const warnList = await threadsData.get(threadID, "data.warn", []);

		switch (args[0]) {
			case "قائمة": {
				const msg = await Promise.all(warnList.map(async user => {
					const { uid, list } = user;
					const name = await usersData.getName(uid);
					return `${name} (${uid}): ${list.length}`;
				}));
				message.reply(msg.length ? getLang("list", msg.join("\n"), prefix) : getLang("listEmpty"));
				break;
			}
			case "قائمةالبان": {
				const result = (await Promise.all(warnList.map(async user => {
					const { uid, list } = user;
					if (list.length >= 3) {
						const name = await usersData.getName(uid);
						return `${name} (${uid})`;
					}
				}))).filter(item => item);
				message.reply(result.length ? getLang("listBan", result.join("\n")) : getLang("listBanEmpty"));
				break;
			}
			case "check":
			case "معلومات": {
				let uids, msg = "";
				if (Object.keys(event.mentions).length)
					uids = Object.keys(event.mentions);
				else if (event.messageReply && event.messageReply.senderID)
					uids = [event.messageReply.senderID];
				else if (args.slice(1).length)
					uids = args.slice(1);
				else
					uids = [senderID];
				if (!uids)
					return message.reply(getLang("invalidUid"));
				msg += (await Promise.all(uids.map(async uid => {
					if (isNaN(uid))
						return null;
					const dataWarnOfUser = warnList.find(user => user.uid == uid);
					let msg = `Uid: ${uid}`;
					const userName = await usersData.getName(uid);

					if (!dataWarnOfUser || dataWarnOfUser.list.length == 0)
						msg += `\n  Name: ${userName}\n  ${getLang("noData")}`;
					else {
						msg += `\nName: ${userName}`
							+ `\nWarn list:` + dataWarnOfUser.list.reduce((acc, warn) => {
								const { dateTime, reason } = warn;
								return acc + `\n  - Reason: ${reason}\n    Time: ${dateTime}`;
							}, "");
					}
					return msg;
				}))).filter(msg => msg).join("\n\n");
				message.reply(msg);
				break;
			}
			case "فك": {
				if (role < 1)
					return message.reply(getLang("noPermission"));
				const uidUnban = args[1];
				if (!uidUnban || isNaN(uidUnban))
					return message.reply(getLang("invalidUid2"));
				const index = warnList.findIndex(user => user.uid == uidUnban && user.list.length >= 3);
				if (index === -1)
					return message.reply(getLang("notBanned", uidUnban));
				warnList.splice(index, 1);
				await threadsData.set(threadID, warnList, "data.warn");
				const userName = await usersData.getName(uidUnban);
				message.reply(getLang("unbanSuccess", uidUnban, userName));
				break;
			}
			case "نووارن": {
				if (role < 1)
					return message.reply(getLang("noPermission2"));
				let uid, num;
				if (Object.keys(event.mentions)[0]) {
					uid = Object.keys(event.mentions)[0];
					num = args[args.length - 1];
				}
				else if (event.messageReply && event.messageReply.senderID) {
					uid = event.messageReply.senderID;
					num = args[1];
				}
				else {
					uid = args[1];
					num = parseInt(args[2]) - 1;
				}
				if (isNaN(uid))
					return message.reply(getLang("invalidUid3"));
				const dataWarnOfUser = warnList.find(u => u.uid == uid);
				if (!dataWarnOfUser?.list.length)
					return message.reply(getLang("noData2", uid));
				if (isNaN(num))
					num = dataWarnOfUser.list.length - 1;
				const userName = await usersData.getName(uid);
				if (num > dataWarnOfUser.list.length)
					return message.reply(getLang("notEnoughWarn", userName, dataWarnOfUser.list.length));
				dataWarnOfUser.list.splice(parseInt(num), 1);
				if (!dataWarnOfUser.list.length)
					warnList.splice(warnList.findIndex(u => u.uid == uid), 1);
				await threadsData.set(threadID, warnList, "data.warn");
				message.reply(getLang("unwarnSuccess", num + 1, uid, userName));
				break;
			}
			case "حذففف": {
				if (role < 1)
					return message.reply(getLang("noPermission3"));
				await threadsData.set(threadID, [], "data.warn");
				message.reply(getLang("resetWarnSuccess"));
				break;
			}
			default: {
				if (role < 1)
					return message.reply(getLang("noPermission4"));
				let reason, uid;
				if (event.messageReply) {
					uid = event.messageReply.senderID;
					reason = args.join(" ").trim();
				}
				else if (Object.keys(event.mentions)[0]) {
					uid = Object.keys(event.mentions)[0];
					reason = args.join(" ").replace(event.mentions[uid], "").trim();
				}
				else {
					return message.reply(getLang("invalidUid4"));
				}
				if (!reason)
					reason = "No reason";
				const dataWarnOfUser = warnList.find(item => item.uid == uid);
				const dateTime = getTime("DD/MM/YYYY hh:mm:ss");
				if (!dataWarnOfUser)
					warnList.push({
						uid,
						list: [{ reason, dateTime, warnBy: senderID }]
					});
				else
					dataWarnOfUser.list.push({ reason, dateTime, warnBy: senderID });

				await threadsData.set(threadID, warnList, "data.warn");

				const times = dataWarnOfUser?.list.length ?? 1;

				const userName = await usersData.getName(uid);
				if (times >= 3) {
					message.reply(getLang("warnSuccess", userName, times, uid, reason, dateTime, prefix), () => {
						api.removeUserFromGroup(uid, threadID, (err) => {
							if (err)
								return message.reply(getLang("noPermission5"), (e, info) => {
									const { onEvent } = global.GoatBot;
									onEvent.push({
										messageID: info.messageID,
										onStart: ({ event }) => {
											if (event.logMessageType === "log:thread-admins" && event.logMessageData.ADMIN_EVENT == "add_admin") {
												const { TARGET_ID } = event.logMessageData;
												if (TARGET_ID == api.getCurrentUserID()) {
													if ((warnList.find(user => user.uid == uid)?.list.length ?? 0) <= 3)
														global.GoatBot.onEvent = onEvent.filter(item => item.messageID != info.messageID);
													else
														api.removeUserFromGroup(uid, event.threadID, () => global.GoatBot.onEvent = onEvent.filter(item => item.messageID != info.messageID));
												}
											}
										}
									});
								});
						});
					});
				}
				else
					message.reply(getLang("warnSuccess2", userName, times, uid, reason, dateTime, 3 - (times)));
			}
		}
	},

	onEvent: async ({ event, threadsData, usersData, message, api, getLang }) => {
		const { logMessageType, logMessageData } = event;
		if (logMessageType === "log:subscribe") {
			return async () => {
				const { data, adminIDs } = await threadsData.get(event.threadID);
				const warnList = data.warn?.warnList ?? [];
				if (!warnList.length)
					return;
				const { addedParticipants } = logMessageData;
				const hasBanned = [];

				for (const user of addedParticipants) {
					const { userFbId: uid } = user;
					const dataWarnOfUser = warnList.find(item => item.uid == uid);
					if (!dataWarnOfUser)
						continue;
					const { list } = dataWarnOfUser;
					if (list.length >= 3) {
						const userName = await usersData.getName(uid);
						hasBanned.push({
							uid,
							name: userName
						});
					}
				}

				if (hasBanned.length) {
					await message.send(getLang("hasBanned", hasBanned.map(item => `  - ${item.name} (uid: ${item.uid})`).join("\n")));
					if (!adminIDs.includes(api.getCurrentUserID()))
						message.reply(getLang("noPermission5"), (e, info) => {
							const { onEvent } = global.GoatBot;
							onEvent.push({
								messageID: info.messageID,
								onStart: ({ event }) => {
									if (event.logMessageType === "log:thread-admins" && event.logMessageData.ADMIN_EVENT == "add_admin") {
										const { TARGET_ID } = event.logMessageData;
										if (TARGET_ID == api.getCurrentUserID()) {
											removeUsers(hasBanned, warnList, api, event, message, getLang);
											global.GoatBot.onEvent = onEvent.filter(item => item.messageID != info.messageID);
										}
									}
								}
							});
						});
					else
						removeUsers(hasBanned, warnList, api, event, message, getLang);
				}
			};
		}
	}
};

async function removeUsers(hasBanned, warnList, api, event, message, getLang) {
	const failed = [];
	for (const user of hasBanned) {
		try {
			if (warnList.find(item => item.uid == user.uid)?.list.length ?? 0 >= 3)
				await api.removeUserFromGroup(user.uid, event.threadID);
		}
		catch (e) {
			failed.push({
				uid: user.uid,
				name: user.name
			});
		}
	}
	if (failed.length)
		message.reply(getLang("failedRemove", failed.map(item => `  - ${item.name} (uid: ${item.uid})`).join("\n")));
}