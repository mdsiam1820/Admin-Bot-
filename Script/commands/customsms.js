const axios = require("axios");

const smsSession = {};

module.exports.config = {
  name: "message",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "👑 Developer Siam",
  description: "Step by step SMS sender",
  commandCategory: "utility",
  usages: "./Message",
  cooldowns: 3,
};

module.exports.run = async function ({ api, event }) {
  const senderID = event.senderID;

  const introMessage = `•┄┅════❁🌺❁════┅┄•

☠️•• Custom SMS ••☠️

ব্যবহার:
/Message 01xxxxxxxxx

(বাংলাদেশি নাম্বার দিন, শুধু মাত্র জরুরি প্রয়োজনে ব্যবহার করুন)

•┄┅════❁🌺❁════┅┄•`;

  smsSession[senderID] = {
    step: 1
  };

  return api.sendMessage(introMessage + "\n\n📩 দয়া করে SMS পাঠাতে একটি ফোন নাম্বার লিখুন।", event.threadID, event.messageID);
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

    const url = `https://custom-sms.wuaze.com/index.php?number=${number}&message=${message}`;

    try {
      await axios.get(url);
      delete smsSession[senderID];
      return api.sendMessage(`✅ SMS পাঠানো হয়েছে নম্বরে: ${number}`, event.threadID, event.messageID);
    } catch (error) {
      delete smsSession[senderID];
      return api.sendMessage(`❌ SMS পাঠাতে ব্যর্থ! ত্রুটি: ${error.message}`, event.threadID, event.messageID);
    }
  }
};
