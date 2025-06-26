module.exports.config = {
  name: "message", // কমান্ড নাম: ./message
  version: "1.0.0",
  hasPermssion: 0,
  credits: "👑 Developer Siam",
  description: "Show SMS sending instructions only",
  commandCategory: "utility",
  usages: "./message",
  cooldowns: 3,
};

module.exports.run = async function ({ api, event }) {
  try {
    const introMessage = `•┄┅════❁🌺❁════┅┄•

☠️•• Custom SMS ••☠️

ব্যবহার:
./message 01xxxxxxxxx

(বাংলাদেশি নাম্বার দিন, শুধু মাত্র জরুরি প্রয়োজনে ব্যবহার করুন)

•┄┅════❁🌺❁════┅┄•`;

    await api.sendMessage(introMessage, event.threadID, event.messageID);
  } catch (error) {
    console.error("Error sending message command reply:", error);
  }
};
