const fs = require("fs");
const path = require("path");

module.exports.config = {
  name: "bkash",
  version: "1.0.4",
  hasPermssion: 0,
  credits: "Developer SIAM",
  description: "Send custom bKash receipt with real-style image",
  commandCategory: "fun",
  usages: "/bkash [number] [amount]",
  cooldowns: 3
};

module.exports.run = async ({ api, event, args }) => {
  if (args.length < 2) {
    return api.sendMessage("❌ সঠিকভাবে লিখুন:\n/bkash [নাম্বার] [টাকা]\nযেমন: /bkash 01812345678 500", event.threadID, event.messageID);
  }

  const number = args[0];
  const amount = args[1];

  // বাংলাদেশ সময় ও তারিখ
  const now = new Date();
  const options = { timeZone: "Asia/Dhaka", hour12: true };
  const date = now.toLocaleDateString("en-GB", options); // dd/mm/yyyy
  const time = now.toLocaleTimeString("en-US", options); // hh:mm AM/PM
  const trxId = `TRX${Math.floor(100000 + Math.random() * 900000)}`;

  const message = `✅ bKash Cash Out Successful!
📅 Date: ${date}
⏰ Time: ${time}
🆔 TrxID: ${trxId}
💸 Amount: ৳${amount}
📲 Receiver: ${number}`;

  const imagePath = path.join(__dirname, "cashout.jpg"); // আপনার দেওয়া ছবির নাম রাখুন 'cashout.jpg'

  // ফাইল চেক
  if (!fs.existsSync(imagePath)) {
    return api.sendMessage("❌ স্ক্রিনশট ফাইল পাওয়া যায়নি! অনুগ্রহ করে 'cashout.jpg' নাম দিয়ে মডিউলের একই ফোল্ডারে রাখুন।", event.threadID, event.messageID);
  }

  // মেসেজ + ইমেজ পাঠানো
  api.sendMessage(
    {
      body: message,
      attachment: fs.createReadStream(imagePath)
    },
    event.threadID,
    event.messageID
  );
};
