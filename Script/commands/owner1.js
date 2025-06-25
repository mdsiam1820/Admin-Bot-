const fs = require('fs');
const path = require('path');
const axios = require('axios');

module.exports.config = {
    name: "owner1",
    version: "2.0.0",
    hasPermssion: 0,
    credits: "SIAM",
    description: "Bot Owner Information",
    commandCategory: "system",
    usages: "/owner",
    cooldowns: 5,
    dependencies: {}
};

module.exports.run = async function({ api, event }) {
    // শুধুমাত্র /owner কমান্ডে রেসপন্স দেবে
    if (event.body.trim() !== "/owner") return;

    try {
        // মালিকের তথ্য
        const ownerInfo = {
            name: "👑 𝐀𝐝𝐦𝐢𝐧 • 𝐁𝐨𝐬𝐬 𝐒𝐢𝐚𝐦 ☢️",
            fbLink: "https://www.facebook.com/profile.php?id=100087227243000",
            uid: "100087227243000",
            messenger: "m.me/100087227243000",
            email: "siamahmedofficial@gmail.com"
        };

        // ইমেজ ডাউনলোড (বিকল্প লিঙ্কসহ)
        const imageUrls = [
            "https://i.ibb.co/9mwXdgyG/Picsart-25-02-15-07-13-07-933.jpg",
            "https://example.com/backup-image.jpg" // ব্যাকআপ ইমেজ
        ];
        
        let imgPath;
        for (const url of imageUrls) {
            try {
                const cacheDir = path.join(__dirname, 'cache');
                if (!fs.existsSync(cacheDir)) {
                    fs.mkdirSync(cacheDir, { recursive: true });
                }
                
                imgPath = path.join(cacheDir, 'owner_img.jpg');
                const response = await axios.get(url, { responseType: 'arraybuffer' });
                fs.writeFileSync(imgPath, response.data);
                break; // প্রথম সফল ডাউনলোডে লুপ থামবে
            } catch (e) {
                console.log(`Failed to download image from ${url}`);
            }
        }

        // মেসেজ ফরম্যাট
        const replyMsg = `╭──────•◈•──────╮
│ 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡
│
│❏ 𝗡𝗮𝗺𝗲: ${ownerInfo.name}
│❏ 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸: ${ownerInfo.fbLink}
│❏ 𝗨𝗜𝗗: ${ownerInfo.uid}
│❏ 𝗠𝗲𝘀𝘀𝗲𝗻𝗴𝗲𝗿: ${ownerInfo.messenger}
│❏ 𝗘𝗺𝗮𝗶𝗹: ${ownerInfo.email}
╰──────•◈•──────╯`;

        // মেসেজ পাঠানো (ইমেজ থাকলে অ্যাটাচমেন্টসহ)
        if (fs.existsSync(imgPath)) {
            await api.sendMessage({ 
                body: replyMsg,
                attachment: fs.createReadStream(imgPath)
            }, event.threadID, () => {
                try { fs.unlinkSync(imgPath); } catch (e) {}
            }, event.messageID);
        } else {
            await api.sendMessage(replyMsg, event.threadID, event.messageID);
        }

    } catch (error) {
        console.error("Owner command error:", error);
        await api.sendMessage("⚠️ সিস্টেমে সাময়িক সমস্যা হচ্ছে, পরে চেষ্টা করুন", event.threadID);
    }
};
