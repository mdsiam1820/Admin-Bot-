module.exports.config = {
  name: "sms",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "—͟͟͞͞𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
  description: "একটি কাস্টম এসএমএস পাঠান (বোম্বার নয়)",
  commandCategory: "Tool",
  usages: "/sms 01xxxxxxxxx [message]",
  cooldowns: 5,
  dependencies: { "axios": "" }
};

const axios = require("axios");

module.exports.run = async ({ api, event, args }) => {
  const threadID = event.threadID;
  
  if (args[0] === "help") {
    return api.sendMessage(
      "•┄┅════❁🌺❁════┅┄•\n\n" +
      "📱 কাস্টম এসএমএস সেন্ডার\n\n" +
      "ব্যবহার:\n" +
      "/sms 01xxxxxxxxx [message]\n\n" +
      "উদাহরণ:\n" +
      "/sms 01712345678 হ্যালো, এটি একটি টেস্ট মেসেজ\n\n" +
      "•┄┅════❁🌺❁════┅┄•",
      threadID
    );
  }

  const number = args[0];
  const message = args.slice(1).join(" ") || "—͟͟͞͞𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️ দ্বারা পাঠানো বার্তা";

  if (!number || !/^01[0-9]{9}$/.test(number)) {
    return api.sendMessage("⚠️ সঠিক ফরম্যাটে নাম্বার দিন:\n/sms 01xxxxxxxxx [message]", threadID);
  }

  try {
    const encodedMessage = encodeURIComponent(message);
    await axios.get(`https://custom-sms.wuaze.com/index.php?number=${number}&message=${encodedMessage}`);
    
    return api.sendMessage(
      `✅ এসএমএস সফলভাবে পাঠানো হয়েছে!\n\n` +
      `📞 নম্বর: ${number}\n` +
      `📝 মেসেজ: "${message}"`,
      threadID
    );
  } catch (err) {
    return api.sendMessage(`❌ এসএমএস পাঠাতে সমস্যা: ${err.message}`, threadID);
  }
};
