const fs = require("fs-extra");
const request = require("request");
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
    const filePath = __dirname + "/cache/1.png";
    const time = moment().tz("Asia/Dhaka").format("DD/MM/YYYY hh:mm:ss A");

    // ফাইল থাকলে আগে মুছে ফেলো
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
    }

    // ছবি ডাউনলোডের পর মেসেজ পাঠানো
    const callback = () => api.sendMessage({
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
        attachment: fs.createReadStream(filePath)
    }, event.threadID, () => fs.unlinkSync(filePath));

    // ছবি ডাউনলোড করা
    return request("https://i.ibb.co/9mwXdgyG/Picsart-25-02-15-07-13-07-933.jpg")
        .pipe(fs.createWriteStream(filePath))
        .on('close', () => callback());
};
