module.exports.config = {  
    name: "owner",  
    version: "1.0.0",  
    hasPermssion: 0,  
    credits: "SIAM ッ",  
    description: "Show bot owner information",  
    commandCategory: "system",  
    usages: "",  
    cooldowns: 5
};

module.exports.run = async function({ api, event }) {
    const axios = require("axios");
    const fs = require("fs-extra");
    
    // মালিকের তথ্য
    const ownerInfo = {
        name: "👑 𝐀𝐝𝐦𝐢𝐧 • 𝐁𝐨𝐬𝐬 𝐒𝐢𝐚𝐦 ☢️",
        facebook: "https://www.facebook.com/profile.php?id=100087227243000",
        uid: "100087227243000",
        messenger: "m.me/100087227243000",
        page: "https://www.facebook.com/profile.php?id=100087227243000",
        email: "siamahmedofficial@gmail.com",
        website: "https://siam-bot.xyz"
    };

    // ইমেজ লিঙ্ক (আপনার নিজের ইমেজ URL দিয়ে প্রতিস্থাপন করুন)
    const imageUrl = "https://i.ibb.co/9mwXdgyG/Picsart-25-02-15-07-13-07-933.jpg"; 
    
    try {
        // ইমেজ ডাউনলোড
        const path = __dirname + "/cache/owner_image.jpg";
        const { data } = await axios.get(imageUrl, { responseType: "stream" });
        const writer = fs.createWriteStream(path);
        data.pipe(writer);
        
        await new Promise((resolve, reject) => {
            writer.on("finish", resolve);
            writer.on("error", reject);
        });

        // মেসেজ বডি
        const messageBody = `╭──────•◈•──────╮
│        𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 𝗰𝗵𝗮𝘁 𝗯𝗼𝘁
│👑 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡 👑
│
│•—» 𝗡𝗮𝗺𝗲: ${ownerInfo.name}
│•—» 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸: ${ownerInfo.facebook}
│•—» 𝗨𝗜𝗗: ${ownerInfo.uid}
│•—» 𝗠𝗲𝘀𝘀𝗲𝗻𝗴𝗲𝗿: ${ownerInfo.messenger}
│•—» 𝗘𝗺𝗮𝗶𝗹: ${ownerInfo.email}
│•—» 𝗪𝗲𝗯𝘀𝗶𝘁𝗲: ${ownerInfo.website}
│
│ 𝗖𝗢𝗡𝗧𝗔𝗖𝗧 𝗠𝗘 𝗙𝗢𝗥 𝗔𝗡𝗬 𝗣𝗥𝗢𝗕𝗟𝗘𝗠
╰──────•◈•──────╯`;

        // মেসেজ পাঠানো
        api.sendMessage({
            body: messageBody,
            attachment: fs.createReadStream(path)
        }, event.threadID, () => fs.unlinkSync(path), event.messageID);

    } catch (error) {
        console.error("Error in owner command:", error);
        api.sendMessage("An error occurred while processing the owner command.", event.threadID, event.messageID);
    }
};
