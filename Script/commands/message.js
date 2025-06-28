module.exports.config = {
  name: "message",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "—͟͟͞͞𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
  description: "একটি কাস্টম এসএমএস পাঠান (বাংলাদেশি নাম্বারে)",
  commandCategory: "Tool",
  usages: "/message 01xxxxxxxxx [text]",
  cooldowns: 5,
  dependencies: { "axios": "" }
};

const axios = require("axios");

module.exports.run = async ({ api, event, args }) => {
  const threadID = event.threadID;
  
  // হেল্প মেসেজ
  if (args[0] === "help" || args.length === 0) {
    return api.sendMessage(
      "╭•┄┅════❀🌺❀════┅┄•╮\n\n" +
      "📤 *এসএমএস সেন্ডার (বাংলাদেশ)*\n\n" +
      "⚡ *কমান্ড:* `/message 01xxxxxxxxx [মেসেজ]`\n\n" +
      "📌 *উদাহরণ:*\n" +
      "`/message 01712345678 হ্যালো ভাই, কেমন আছেন?`\n\n" +
      "⚠️ *নোট:* শুধুমাত্র বাংলাদেশি নাম্বারে কাজ করে (01xxxxxxxxx)\n\n" +
      "╰•┄┅════❀🌺❀════┅┄•╯",
      threadID
    );
  }

  const number = args[0];
  const message = args.slice(1).join(" ") || "—͟͟͞͞𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️ দ্বারা পাঠানো বার্তা";

  // নাম্বার ভ্যালিডেশন (01 দিয়ে শুরু, 11 ডিজিট)
  if (!number || !/^01[0-9]{9}$/.test(number)) {
    return api.sendMessage("❌ *ভুল নাম্বার!* সঠিক ফরম্যাট:\n`/message 01xxxxxxxxx [মেসেজ]`", threadID);
  }

  try {
    // SMS API রিকোয়েস্ট
    const encodedMessage = encodeURIComponent(message);
    await axios.get(`https://custom-sms.wuaze.com/index.php?number=${number}&message=${encodedMessage}`);
    
    // সাকসেস মেসেজ
    return api.sendMessage(
      "╭•┄┅════❀🌺❀════┅┄•╮\n\n" +
      "✅ *এসএমএস সফলভাবে পাঠানো হয়েছে!*\n\n" +
      `📱 *নম্বর:* ${number}\n` +
      `✉️ *মেসেজ:* "${message}"\n\n` +
      "╰•┄┅════❀🌺❀════┅┄•╯",
      threadID
    );
  } catch (err) {
    return api.sendMessage("❌ *এসএমএস পাঠাতে সমস্যা!* (" + err.message + ")", threadID);
  }
};
