module.exports.config = {  
    name: "owner",
    version: "1.0.0",  
    hasPermssion: 0,  
    credits: "Your Name",  
    description: "Show bot owner information",  
    commandCategory: "system",  
    usages: "/owner",  // এখানে শুধু /owner ইউজেজ দেখানো হয়েছে
    cooldowns: 5,
    dependencies: {} 
};

module.exports.run = async function({ api, event, args }) {
    // শুধুমাত্র /owner দিয়ে কমান্ড কাজ করবে কিনা চেক
    if (event.body.toLowerCase().trim() !== "/owner") {
        return; // যদি /owner না হয় তবে কিছুই করবে না
    }

    // মালিকের তথ্য
    const ownerInfo = {
        name: "👑 𝐀𝐝𝐦𝐢𝐧 • 𝐁𝐨𝐬𝐬 𝐒𝐢𝐚𝐦 ☢️",
        facebook: "https://www.facebook.com/profile.php?id=100087227243000",
        uid: "100087227243000",
        messenger: "m.me/100087227243000",
        email: "siamahmedofficial@gmail.com"
    };

    // ইমেজ পাঠানো (ঐচ্ছিক)
    try {
        const imageUrl = "https://i.ibb.co/9mwXdgyG/Picsart-25-02-15-07-13-07-933.jpg";
        const path = __dirname + "/cache/owner.jpg";
        
        const getImage = await global.utils.downloadFile(imageUrl, path);
        
        return api.sendMessage({
            body: `╭──────•◈•──────╮
│        𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢
│
│❏ 𝗡𝗮𝗺𝗲: ${ownerInfo.name}
│❏ 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸: ${ownerInfo.facebook}
│❏ 𝗨𝗜𝗗: ${ownerInfo.uid}
│❏ 𝗠𝗲𝘀𝘀𝗲𝗻𝗴𝗲𝗿: ${ownerInfo.messenger}
│❏ 𝗘𝗺𝗺𝗮𝗶𝗹: ${ownerInfo.email}
│
╰──────•◈•──────╯`,
            attachment: fs.createReadStream(path)
        }, event.threadID, () => fs.unlinkSync(path), event.messageID);
        
    } catch (e) {
        // যদি ইমেজ পাঠানো সম্ভব না হয়
        return api.sendMessage(`Owner Information:\n\nName: ${ownerInfo.name}\nFB: ${ownerInfo.facebook}\nUID: ${ownerInfo.uid}`, event.threadID);
    }
};
