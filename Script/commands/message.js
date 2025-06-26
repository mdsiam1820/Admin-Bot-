const axios = require("axios");

const sessions = {};

module.exports.config = {
  name: "message",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "👑 Developer Siam",
  description: "Custom SMS sender with interactive input",
  commandCategory: "utility",
  usages: "./message",
  cooldowns: 3,
};

module.exports.run = async function({ api, event }) {
  const introMessage = `•┄┅════❁🌺❁════┅┄•

☠️•• Custom SMS ••☠️

ব্যবহার:
প্রথমে নাম্বার দিন, তারপর মেসেজ লিখুন।

(বাংলাদেশি নাম্বার দিন, শুধু জরুরি প্রয়োজনে ব্যবহার করুন)

•┄┅════❁🌺❁════┅┄•`;

  sessions[event.senderID] = { step: 1 };

  return api.sendMessage(introMessage + "\n\n📩 দয়া করে মোবাইল নাম্বার দিন:", event.threadID, event.messageID);
};

module.exports.handleReply = async function({ api, event }) {
  if (!sessions[event.senderID]) return;

  const session = sessions[event.senderID];
  const input = event.body.trim();

  if (session.step === 1) {
    if (!input.match(/^01\d{9}$/)) {
      return api.sendMessage("❌ সঠিক বাংলাদেশি মোবাইল নাম্বার দিন। যেমন: 01812345678", event.threadID, event.messageID);
    }
    session.number = input;
    session.step = 2;
    return api.sendMessage("✏️ এখন মেসেজ লিখুন:", event.threadID, event.messageID);
  }

  if (session.step === 2) {
    if (!input.length) {
      return api.sendMessage("❌ মেসেজ খালি হতে পারে না। দয়া করে আবার লিখুন:", event.threadID, event.messageID);
    }

    const url = `https://custom-sms.wuaze.com/index.php?number=${session.number}&message=${encodeURIComponent(input)}`;

    try {
      await axios.get(url);
      delete sessions[event.senderID];
      return api.sendMessage(`✅ SMS সফলভাবে পাঠানো হয়েছে নম্বর: ${session.number}`, event.threadID, event.messageID);
    } catch (error) {
      delete sessions[event.senderID];
      return api.sendMessage(`❌ SMS পাঠানো যায়নি! ত্রুটি: ${error.message}`, event.threadID, event.messageID);
    }
  }
};
