const fs = require("fs");
const request = require("request");

module.exports.config = {
  name: "bkash",
  version: "1.0.5",
  hasPermssion: 0,
  credits: "Developer SIAM",
  description: "Send bKash Cash Out receipt style with photo",
  commandCategory: "fun",
  usages: "/bkash [number] [amount]",
  cooldowns: 3
};

module.exports.run = async ({ api, event, args }) => {
  if (args.length < 2) {
    return api.sendMessage("❌ ব্যবহারঃ /bkash [নাম্বার] [টাকা]\nউদাহরণ: /bkash 01812345678 500", event.threadID, event.messageID);
  }

  const number = args[0];
  const amount = args[1];
  const trxId = `TRX${Math.floor(100000 + Math.random() * 900000)}`;

  // বাংলাদেশের সময় ও তারিখ
  const now = new Date();
  const options = { timeZone: "Asia/Dhaka", hour12: true };
  const date = now.toLocaleDateString("en-GB", options);
  const time = now.toLocaleTimeString("en-US", options);

  const message = `✅ Cash Out Successful!\n📲 Receiver: ${number}\n💸 Amount: ৳${amount}\n🆔 TrxID: ${trxId}\n📅 Date: ${date}\n⏰ Time: ${time}`;

  const imageUrl = "https://i.ibb.co/zh86hZ4K/bKash.jpg"; // নতুন ইমেজ লিংক
  const filePath = __dirname + "/bkash_temp.jpg";

  request(imageUrl).pipe(fs.createWriteStream(filePath)).on("close", () => {
    api.sendMessage(
      {
        body: message,
        attachment: fs.createReadStream(filePath)
      },
      event.threadID,
      () => fs.unlinkSync(filePath),
      event.messageID
    );
  });
};
