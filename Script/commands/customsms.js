const axios = require("axios");

const smsSession = {};

module.exports.config = {
  name: "custom", // 👉 তুমি চাইছিলে: /custom SMS
  version: "1.0.0",
  hasPermssion: 0,
  credits: "👑 Developer Siam",
  description: "Step by step SMS sender",
  commandCategory: "utility",
  usages: "/custom SMS",
  cooldowns: 3,
};

module.exports.handleReply = async function ({ api, event }) {
  const senderID = event.senderID;
  const userInput = event.body;

  if (!smsSession[senderID]) return;

  const session = smsSession[senderID];

  if (session.step === 1) {
    session.number = userInput;
    session.step = 2;
    return api.sendMessage("✏️ এখন মেসেজটি লিখুন যা আপনি পাঠাতে চান।", event.threadID, event.messageID);
  }

  if (session.step === 2) {
    const number = session.number;
    const message = encodeURIComponent(userInput);

    // ✅ তোমার দেওয়া API
    const url = `https://custom-sms.wuaze.com/index.php?number=${number}&message=${message}`;

    try {
      const response = await axios.get(url);
      delete smsSession[senderID];

      return api.sendMessage(`✅ SMS পাঠানো হয়েছে নম্বরে: ${number}`, event.threadID, event.messageID);
    } catch (error) {
      delete smsSession[senderID];
      return api.sendMessage(`❌ SMS পাঠাতে ব্যর্থ! ত্রুটি: ${error.message}`, event.threadID, event.messageID);
    }
  }
};

module.exports.run = async function ({ api, event }) {
  const senderID = event.senderID;

  smsSession[senderID] = {
    step: 1
  };

  return api.sendMessage("📩 দয়া করে SMS পাঠাতে একটি ফোন নাম্বার লিখুন।", event.threadID, event.messageID);
};
