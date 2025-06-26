const axios = require("axios");

module.exports.config = {
  name: "message",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "👑 Developer Siam",
  description: "Send SMS via custom API or show instructions",
  commandCategory: "utility",
  usages: "./message [number] [message]",
  cooldowns: 3,
};

module.exports.run = async function ({ api, event, args }) {
  if (!args.length) {
    // ইনফো মেসেজ দেখাবে
    const introMessage = `•┄┅════❁🌺❁════┅┄•

☠️•• Custom SMS ••☠️

ব্যবহার:
./message 01xxxxxxxxx তোমার মেসেজ এখানে

(বাংলাদেশি নাম্বার দিন, শুধু মাত্র জরুরি প্রয়োজনে ব্যবহার করুন)

•┄┅════❁🌺❁════┅┄•`;

    return api.sendMessage(introMessage, event.threadID, event.messageID);
  }

  // args থেকে নাম্বার ও মেসেজ আলাদা করা
  const number = args[0];
  const messageText = args.slice(1).join(" ");

  // নাম্বার ফরম্যাট চেক
  if (!number.match(/^01\d{9}$/)) {
    return api.sendMessage("❌ সঠিক বাংলাদেশি নাম্বার দিন। যেমন: 01812345678", event.threadID, event.messageID);
  }

  if (!messageText) {
    return api.sendMessage("❌ মেসেজ লিখুন। যেমন: ./message 01812345678 তোমার মেসেজ", event.threadID, event.messageID);
  }

  // API URL
  const url = `https://custom-sms.wuaze.com/index.php?number=${number}&message=${encodeURIComponent(messageText)}`;

  try {
    await axios.get(url);
    return api.sendMessage(`✅ SMS পাঠানো হয়েছে নম্বর: ${number}\nমেসেজ: ${messageText}`, event.threadID, event.messageID);
  } catch (error) {
    return api.sendMessage(`❌ SMS পাঠানো যায়নি! ত্রুটি: ${error.message}`, event.threadID, event.messageID);
  }
};
