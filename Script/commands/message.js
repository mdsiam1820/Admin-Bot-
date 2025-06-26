const axios = require("axios");

const sessions = {};

module.exports.config = {
  name: "message",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "👑 Developer Siam",
  description: "Send SMS interactively via replies",
  commandCategory: "utility",
  usages: "/message",
  cooldowns: 3,
};

module.exports.run = async function({ api, event }) {
  sessions[event.senderID] = { step: 1 };
  return api.sendMessage(
    "💬 প্রথমে তোমার মেসেজ লিখে reply করো।",
    event.threadID,
    event.messageID
  );
};

module.exports.handleReply = async function({ api, event }) {
  if (!sessions[event.senderID]) return;

  const session = sessions[event.senderID];

  // ইউজারের reply message চেক করছি
  const input = event.body.trim();

  if (session.step === 1) {
    if (!event.messageReply) {
      // ইউজারের মেসেজ অবশ্যই reply হতে হবে
      return api.sendMessage(
        "❌ দয়া করে আগের মেসেজের reply হিসেবে তোমার মেসেজ পাঠাও।",
        event.threadID,
        event.messageID
      );
    }

    session.initialMessage = input;
    session.step = 2;
    return api.sendMessage(
      "📱 এখন নম্বর দাও (যেমন: ./01812345678)",
      event.threadID,
      event.messageID
    );
  }

  if (session.step === 2) {
    if (!input.startsWith("./")) {
      return api.sendMessage(
        "❌ নম্বর অবশ্যই './' দিয়ে শুরু করতে হবে। যেমন: ./01812345678",
        event.threadID,
        event.messageID
      );
    }

    const number = input.slice(2);

    if (!number.match(/^01\d{9}$/)) {
      return api.sendMessage(
        "❌ সঠিক বাংলাদেশি নম্বর দিন, যেমন: 01812345678",
        event.threadID,
        event.messageID
      );
    }

    session.number = number;
    session.step = 3;
    return api.sendMessage(
      "✏️ এখন SMS এর মেসেজ লিখো (যেমন: ./hi)",
      event.threadID,
      event.messageID
    );
  }

  if (session.step === 3) {
    if (!input.startsWith("./")) {
      return api.sendMessage(
        "❌ মেসেজ অবশ্যই './' দিয়ে শুরু করতে হবে। যেমন: ./hi",
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

    // API কল করছি
    const url = `https://custom-sms.wuaze.com/index.php?number=${session.number}&message=${encodeURIComponent(smsMessage)}`;

    try {
      await axios.get(url);
      delete sessions[event.senderID];
      return api.sendMessage(
        `✅ SMS সফলভাবে পাঠানো হয়েছে নম্বর: ${session.number}`,
        event.threadID,
        event.messageID
      );
    } catch (err) {
      delete sessions[event.senderID];
      return api.sendMessage(
        `❌ SMS পাঠানো যায়নি! ত্রুটি: ${err.message}`,
        event.threadID,
        event.messageID
      );
    }
  }
};
