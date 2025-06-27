const axios = require("axios");
const fs = require("fs");
const path = require("path");

module.exports.config = {
  name: "song",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Developer Siam",
  description: "Send a song from a given link",
  commandCategory: "media",
  usages: "/song",
  cooldowns: 5,
};

module.exports.run = async ({ api, event }) => {
  const url = "https://cdn.jmp.sh/vtJvj3Fp/song.mp3"; // ✅ আপনার গান লিংক (direct CDN)

  const filePath = path.join(__dirname, "temp_song.mp3");

  try {
    const response = await axios({
      method: "GET",
      url,
      responseType: "stream",
    });

    const writer = fs.createWriteStream(filePath);
    response.data.pipe(writer);

    writer.on("finish", () => {
      api.sendMessage({
        body: "🎵 আপনার গান এসেছে, শুনুন মজা করে!",
        attachment: fs.createReadStream(filePath)
      }, event.threadID, () => {
        fs.unlinkSync(filePath); // ✅ গান পাঠানোর পর অস্থায়ী ফাইল মুছে ফেলবে
      }, event.messageID);
    });

    writer.on("error", () => {
      api.sendMessage("❌ গান পাঠাতে সমস্যা হয়েছে!", event.threadID, event.messageID);
    });

  } catch (err) {
    console.error(err);
    api.sendMessage("❌ গান ডাউনলোড করতে পারলাম না, লিংক কাজ করছে না!", event.threadID, event.messageID);
  }
};
