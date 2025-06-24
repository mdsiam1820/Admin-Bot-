const axios = require("axios");
const fs = require("fs-extra");
const moment = require("moment-timezone");

module.exports.config = {
    name: "admin",
    version: "1.0.0",
    hasPermission: 0,
    credits: "Siam",
    description: "Show Owner Info",
    commandCategory: "info",
    usages: "",
    cooldowns: 5
};

module.exports.run = async function({ api, event }) {
    try {
        const time = moment().tz("Asia/Dhaka").format("DD/MM/YYYY hh:mm:ss A");
        
        // সরাসরি ইমেজ URL (আপনার কপি করা লিংক দিয়ে রিপ্লেস করুন)
        const imageURL = "https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/432432432_122221679618136307_1234567890123456789_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=abcdefghijkAbCdEfGhIjK-Q&_nc_ht=scontent.fdac14-1.fna&oh=00_AfDdDdDdDdDdDdDdDdDdDdDdDdDdDdDdDdDdDdDdDdDdDdDdDd&oe=662A5B5C";
        
        const path = __dirname + '/cache/adminPic.jpg';
        const { data } = await axios.get(imageURL, { responseType: 'arraybuffer' });
        await fs.writeFile(path, Buffer.from(data, 'binary'));

        await api.sendMessage({
            body: `
┏━━━━━━━━━━━━━━━━━━━━━┓
┃      🌟 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 🌟      
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 👤 𝗡𝗮𝗺𝗲      : 𝗦𝗶𝗮𝗺 ッ
┃ 🚹 𝗚𝗲𝗻𝗱𝗲𝗿    : 𝗠𝗮𝗹𝗲
┃ ❤️ 𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻  : 𝗜𝗧'𝗦 𝗖𝗢𝗠𝗣𝗟𝗜𝗖𝗔𝗧𝗘𝗗
┃ 🎂 𝗔𝗴𝗲       : 𝟮𝟬
┃ 🕌 𝗥𝗲𝗹𝗶𝗴𝗶𝗼𝗻  : 𝗜𝘀𝗹𝗮𝗺
┃ 🏫 𝗘𝗱𝘂𝗰𝗮𝘁𝗶𝗼𝗻 : 𝗛𝗮𝗳𝗶𝘇-𝗲-𝗤𝘂𝗿𝗮𝗻
┃ 🏡 𝗔𝗱𝗱𝗿𝗲𝘀𝘀  : 𝗧𝗼𝗷𝘂𝗺𝘂𝗱𝗱𝗶𝗻, 𝗕𝗵𝗼𝗹𝗮
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 🔗 𝗔𝗹𝗹 𝗜𝗻𝗳𝗼 𝗟𝗶𝗻𝗸 : https://developer_siam_1.bio.link/
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 🕒 𝗨𝗽𝗱𝗮𝘁𝗲𝗱 𝗧𝗶𝗺𝗲 : ${time}
┗━━━━━━━━━━━━━━━━━━━━━┛
            `,
            attachment: fs.createReadStream(path)
        }, event.threadID);

        fs.unlinkSync(path);
    } catch (error) {
        console.error("Error:", error);
        api.sendMessage("❌ ছবি লোড করতে ব্যর্থ! অনুগ্রহ করে ইমেজ URL চেক করুন।", event.threadID);
    }
};
