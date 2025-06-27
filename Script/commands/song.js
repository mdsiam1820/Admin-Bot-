const axios = require("axios");
const fs = require("fs");
const path = require("path");

module.exports.config = {
  name: "song",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Developer Siam",
  description: "Send a song from online link",
  commandCategory: "media",
  usages: "/song",
  cooldowns: 5,
};

module.exports.run = async ({ api, event }) => {
  const url = "https://jmp.sh/vtJvj3Fp"; // আপনার গান লিংক
  const tempPath = path.join(__dirname, "temp_song.mp3");

  try {
    const response = await axios({
      method: "GET",
      url: url,
      responseType: "stream",
    });

    const writer = fs.createWriteStream(tempPath);
    response.data.pipe(writer);

    writer.on("finish", () => {
      api.sendMessage({
        body: "🎧 গান শুনুন এখনি!",
        attachment: fs.createReadStream(tempPath)
      }, event.threadID, () => {
        fs.unlinkSync(tempPath); // গান পাঠানোর পর মুছে ফেলবে
      }, event.messageID);
    });

    writer.on("error", (err) => {
      console.error("Download error:", err);
      api.sendMessage("❌ গান ডাউনলোড করতে সমস্যা হয়েছে!", event.threadID, event.messageID);
    });

  } catch (err) {
    console.error("Request error:", err);
    api.sendMessage("❌ গান আনতে ব্যর্থ হলাম!", event.threadID, event.messageID);
  }
};
