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
        
        // আপনার ফেসবুক ফটো লিংক (সরাসরি ইমেজ URL)
        const photoLink = "https://www.facebook.com/photo.php?fbid=122221679618136307&set=a.122101281002136307&type=3";
        
        // ফটো থেকে সরাসরি ইমেজ URL এক্সট্র্যাক্ট করার জন্য
        const imageURL = await getDirectImageURL(photoLink);
        
        const path = __dirname + '/cache/adminPic.jpg';
        
        // ছবি ডাউনলোড
        const { data } = await axios.get(imageURL, { responseType: 'arraybuffer' });
        await fs.writeFile(path, Buffer.from(data, 'binary'));

        // মেসেজ পাঠানো
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

        // টেম্প ফাইল ডিলিট
        fs.unlinkSync(path);
        
    } catch (error) {
        console.error("Error:", error);
        api.sendMessage("❌ আমার প্রোফাইল ছবি লোড করতে সমস্যা হচ্ছে। অনুগ্রহ করে পরে আবার চেষ্টা করুন।", event.threadID);
    }
};

async function getDirectImageURL(photoLink) {
    try {
        // Facebook ফটো লিংক থেকে সরাসরি ইমেজ URL পাওয়ার জন্য
        const response = await axios.get(photoLink);
        const html = response.data;
        
        // ইমেজ URL এক্সট্র্যাক্ট (সরলীকৃত পদ্ধতি)
        const regex = /<meta property="og:image" content="(.*?)"/;
        const match = html.match(regex);
        
        if (match && match[1]) {
            return match[1];
        } else {
            throw new Error("Direct image URL not found");
        }
    } catch (err) {
        console.error("Facebook photo parsing error:", err);
        // ফটব্যাক হিসেবে Graph API ব্যবহার
        return "https://graph.facebook.com/61554089225155/picture?width=720&height=720";
    }
}
