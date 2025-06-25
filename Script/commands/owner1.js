const fs = require("fs-extra");

module.exports.config = {
    name: "owner1",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "SIAM",
    description: "বট মালিকের তথ্য দেখায়",
    commandCategory: "system",
    usages: "/owner",
    cooldowns: 5,
    dependencies: {}
};

module.exports.run = async function({ api, event }) {
    // শুধুমাত্র /owner কমান্ডে রেসপন্স দিবে
    if (event.body.toLowerCase().trim() !== "/owner") {
        return;
    }

    const ownerInfo = {
        name: "👑 𝐀𝐝𝐦𝐢𝐧 • 𝐁𝐨𝐬𝐬 𝐒𝐢𝐚𝐦 ☢️",
        facebook: "https://www.facebook.com/profile.php?id=100087227243000",
        uid: "100087227243000",
        messenger: "m.me/100087227243000",
        email: "siamahmedofficial@gmail.com",
        website: "https://siam-bot.xyz"
    };

    try {
        const imageUrl = "https://i.ibb.co/9mwXdgyG/Picsart-25-02-15-07-13-07-933.jpg";
        const path = __dirname + "/cache/owner1_image.jpg";
        
        // ইমেজ ডাউনলোড
        const getImage = await global.utils.downloadFile(imageUrl, path);
        
        // মেসেজ ফরম্যাট
        const messageBody = `╭──────•◈•──────╮
│        𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡
│
│❏ 𝗡𝗮𝗺𝗲: ${ownerInfo.name}
│❏ 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸: ${ownerInfo.facebook}
│❏ 𝗨𝗜𝗗: ${ownerInfo.uid}
│❏ 𝗠𝗲𝘀𝘀𝗲𝗻𝗴𝗲𝗿: ${ownerInfo.messenger}
│❏ 𝗘𝗺𝗮𝗶𝗹: ${ownerInfo.email}
│❏ 𝗪𝗲𝗯𝘀𝗶𝘁𝗲: ${ownerInfo.website}
│
╰──────•◈•──────╯`;

        // মেসেজ পাঠানো
        return api.sendMessage({
            body: messageBody,
            attachment: fs.createReadStream(path)
        }, event.threadID, () => fs.unlinkSync(path), event.messageID);
        
    } catch (error) {
        console.error("Error in owner command:", error);
        return api.sendMessage("⚠️ মালিকের তথ্য প্রদর্শনে সমস্যা হচ্ছে, পরে আবার চেষ্টা করুন", event.threadID);
    }
};
