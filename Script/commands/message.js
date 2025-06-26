const axios = require("axios");

module.exports.config = {
  name: "message",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "👑 Developer Siam",
  description: "Send SMS with number and message in single command",
  commandCategory: "utility",
  usages: "/message ./01812345678 তোমার মেসেজ",
  cooldowns: 3,
};

module.exports.run = async function({ api, event }) {
  const usageMsg = `•┄┅════❁🌺❁════┅┄•

☠️•• Custom SMS ••☠️

দয়া করে নিচের ফরম্যাটে নাম্বার এবং মেসেজ একসাথে লিখুন:

./01812345678 তোমার মেসেজ

(শুধু বাংলাদেশি নাম্বার দিন, জরুরি প্রয়োজনে ব্যবহার করুন)

•┄┅════❁🌺❁════┅┄•`;

  // ইউজার শুধু /message কমান্ড দিলে ইনস্ট্রাকশন দিবে
  if (event.body.trim() === "/message") {
    return api.sendMessage(usageMsg, event.threadID, event.messageID);
  }

  // ইউজার যদি /message এর সাথে ইনপুট দেয় তাহলে সেটাকে প্রসেস করবে
  const input = event.body.trim();

  // /message এর পর অংশটা নেবে
  const args = input.split(" ").slice(1).join(" ");

  if (!args.startsWith("./")) {
    return api.sendMessage(
      "❌ ইনপুট অবশ্যই './' দিয়ে শুরু করতে হবে, যেমন: ./01812345678 হ্যালো",
      event.threadID,
      event.messageID
    );
  }

  const firstSpaceIndex = args.indexOf(" ");
  if (firstSpaceIndex === -1) {
    return api.sendMessage(
      "❌ নাম্বার এবং মেসেজ দুটোই দিতে হবে, যেমন: ./01812345678 হ্যালো",
      event.threadID,
      event.messageID
    );
  }

  const number = args.slice(2, firstSpaceIndex);
  const message = args.slice(firstSpaceIndex + 1).trim();

  if (!number.match(/^01\d{9}$/)) {
    return api.sendMessage(
      "❌ সঠিক বাংলাদেশি নাম্বার দিন, যেমন: 01812345678",
      event.threadID,
      event.messageID
    );
  }

  if (message.length === 0) {
    return api.sendMessage(
      "❌ মেসেজ খালি হতে পারে না, আবার চেষ্টা করুন।",
      event.threadID,
      event.messageID
    );
  }

  const url = `https://custom-sms.wuaze.com/index.php?number=${number}&message=${encodeURIComponent(message)}`;

  try {
    const response = await axios.get(url);
    console.log("API Response:", response.data);
    return api.sendMessage(
      `✅ SMS সফলভাবে পাঠানো হয়েছে নম্বর: ${number}`,
      event.threadID,
      event.messageID
    );
  } catch (error) {
    console.log("SMS API error:", error.response?.data || error.message || error);
    return api.sendMessage(
      `❌ SMS পাঠানো যায়নি! ত্রুটি: ${error.message}`,
      event.threadID,
      event.messageID
    );
  }
};
