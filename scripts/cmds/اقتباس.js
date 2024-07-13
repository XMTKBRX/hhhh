const config = {
    name: "اقتباس",
    description: "اقتباسات انمي!",
    usage: "[شخصية]",
    cooldown: 3,
    permissions: [0, 1, 2],
    credits: ""
}

const langData = {
    "en_US": {
        "noResults": "لم يعثر على نتائج",
        "results": "• انمي: {anime}\• الشخصية: {character}\• اقتباس: \{quote}\",
        "خطا": "خطأ ، حاول مرة أخرى في وقت لاحق ."
    },
    "vi_VN": {
        "noResults": "Không tìm thấy kết quả nào",
        "results": "• Anime: {anime}\• Nhân vật: {character}\• Quote: \{quote}\",
        "error": "Đã có lỗi xảy ra..."
    },
    "ar_SY": {
        "noResults": "لم يتم العثور على نتائج",
        "results": "• انمي: {anime}\• الشخصية: {character}\• اقتباس: \{quote}\",
        "خطا": "خطأ ، حاول مرة أخرى في وقت لاحق "
    }
}


async function onCall({ message, args, getLang }) {
    try {
        let requestURL = global.xva_api.quote;
        const input = args.join(" ");
        if (input) {
            requestURL += `/شخصية?اسم=${input}`;
        }

        const response = await global.GET(requestURL);
        const data = response.data;

        if (data.error) return message.reply(getLang("noResults"));
        await message.reply(getLang("results", {
            anime: data.anime,
            character: data.character,
            quote: data.quote
        }))
    } catch (e) {
        console.error(e);
        message.reply(getLang("خطا"))
    }
}

export default {
    config,
    langData,
    onCall
}