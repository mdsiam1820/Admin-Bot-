const fs = require("fs");
const path = require("path");

module.exports.config = {
  name: "bkash",
  version: "1.0.8",
  hasPermssion: 0,
  credits: "Developer SIAM",
  description: "Send only bKash Cash Out receipt photo",
  commandCategory: "fun",
  usages: "/bkash",
  cooldowns: 3
};

module.exports.run = async ({ api, event }) => {
  const imagePath = path.join(__dirname, "bkash.jpg");

  if (!fs.existsSync(imagePath)) {
    return api.sendMessage("❌ bKash ছবিটি পাওয়া যায়নি! দয়া করে 'bkash.jpg' এই ফোল্ডারে রাখুন।", event.threadID, event.messageID);
  }

  api.sendMessage(
    {
      attachment: fs.createReadStream(imagePath)
    },
    event.threadID,
    event.messageID
  );
};
