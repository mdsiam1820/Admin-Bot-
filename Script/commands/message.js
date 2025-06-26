const axios = require("axios");

const sessions = {};

module.exports.config = {
  name: "message",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "👑 Developer Siam",
  description: "Custom SMS with reply inputs for number and message",
  commandCategory: "utility",
  usages: "/message",
  cooldowns: 3,
};

module.exports.run = async function({ api, event }) {
  sessions[event.senderID] = { step: 1 };
  const initialMsg = `•┄┅════❁🌺❁════┅┄•

☠️•• Custom SMS ••☠️

দয়া করে মোবাইল নাম্বার দিন (যেমন: ./01812345678)

(শুধু বাংলাদেশি নাম্বার এবং জরুরি প্রয়োজনে ব্যবহার করুন)

•┄┅════❁🌺❁════┅┄•`;
  return api.sendMessage(initialMsg, event.threadID, event.messageID);
};

module.exports.handleReply = async function({ api, event }) {
  if (!sessions[event.senderID]) return;
  const session = sessions[event.senderID];
  const input = event.body.trim();

  // অবশ্যই reply হতে হবে
  if (!event.messageReply) {
    return api.sendMessage(
      "❌ দয়া করে আগের বট মেসেজের reply হিসেবে মেসেজ পাঠাও।",
      event.threadID,
      event.messageID
    );
  }

  if (session.step === 1) {
    // নাম্বার চেক
    if (!input.startsWith("./")) {
      return api.sendMessage(
        "❌ নাম্বার অবশ্যই './' দিয়ে শুরু করতে হবে। যেমন: ./01812345678",
        event.threadID,
        event.messageID
      );
    }
    const number = input.slice(2);
    if (!number.match(/^01\d{9}$/)) {
      return api.sendMessage(
        "❌ সঠিক বাংলাদেশি নাম্বার দিন, যেমন: 01812345678",
        event.threadID,
        event.messageID
      );
    }
    session.number = number;
    session.step = 2;
    return api.sendMessage(
      "✏️ এখন SMS এর মেসেজ লিখো (যেমন: ./হ্যালো)",
      event.threadID,
      event.messageID
    );
  }

  if (session.step === 2) {
    if (!input.startsWith("./")) {
      return api.sendMessage(
        "❌ মেসেজ অবশ্যই './' দিয়ে শুরু করতে হবে। যেমন: ./হ্যালো",
        event.threadID,
        event.messageID
      );
    }
    const smsMessage = input.slice(2);
    if (smsMessage.length === 0) {
      return api.sendMessage(
        "❌ মেসেজ খালি হতে পারে না, আবার লিখো।",
        event.threadID,
        event.messageID
      );
    }

    const url = `https://custom-sms.wuaze.com/index.php?number=${session.number}&message=${encodeURIComponent(smsMessage)}`;

    try {
      await axios.get(url);
      delete sessions[event.senderID];
      return api.sendMessage(
        `✅ SMS সফলভাবে পাঠানো হয়েছে নম্বর: ${session.number}`,
        event.threadID,
        event.messageID
      );
    } catch (error) {
      delete sessions[event.senderID];
      return api.sendMessage(
        `❌ SMS পাঠানো যায়নি! ত্রুটি: ${error.message}`,
        event.threadID,
        event.messageID
      );
    }
  }
};
