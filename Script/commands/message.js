const axios = require("axios");

module.exports.config = {
  name: "message",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Developer SIAM",
  description: "Send custom SMS using API",
  commandCategory: "utility",
  usages: "/message [number] [message]",
  cooldowns: 5,
};

module.exports.run = async ({ api, event, args }) => {
  if (args.length < 2) {
    return api.sendMessage(
      "❌ ব্যবহারঃ /message [number] [message]\n\n📌 উদাহরণঃ /message 01832 hi",
      event.threadID,
      event.messageID
    );
  }

  const number = args[0];
  const message = args.slice(1).join(" ");

  const url = `https://custom-sms.wuaze.com/index.php?number=${number}&message=${encodeURIComponent(message)}`;

  try {
    const res = await axios.get(url);

    if (res.data.includes("Success") || res.status === 200) {
      api.sendMessage(`✅ সফলভাবে পাঠানো হয়েছে!\n📲 নম্বরঃ ${number}\n✉️ মেসেজঃ ${message}`, event.threadID);
    } else {
      api.sendMessage("❌ এসএমএস পাঠাতে সমস্যা হচ্ছে।", event.threadID);
    }
  } catch (error) {
    api.sendMessage("❌ সার্ভারে সমস্যা হয়েছে বা API কাজ করছে না।", event.threadID);
  }
};
