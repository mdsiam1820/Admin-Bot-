module.exports.config = {
  name: "message", // ⬅️ তুমি ./message কমান্ড ব্যবহার করবে
  version: "1.0.0",
  hasPermssion: 0,
  credits: "👑 Developer Siam",
  description: "Show SMS sending instructions only",
  commandCategory: "utility",
  usages: "./message",
  cooldowns: 3,
};

module.exports.run = async function ({ api, event }) {
  const introMessage = `•┄┅════❁🌺❁════┅┄•

☠️•• Custom SMS ••☠️

ব্যবহার:
./message 01xxxxxxxxx

(বাংলাদেশি নাম্বার দিন, শুধু মাত্র জরুরি প্রয়োজনে ব্যবহার করুন)

•┄┅════❁🌺❁════┅┄•`;

  return api.sendMessage(introMessage, event.threadID, event.messageID);
};
