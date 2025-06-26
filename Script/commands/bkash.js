const fs = require("fs");
const request = require("request");

module.exports.config = {
  name: "bkash",
  version: "1.0.3",
  hasPermssion: 0,
  credits: "Developer SIAM",
  description: "Send bKash receipt with user input number & amount",
  commandCategory: "fun",
  usages: "/bkash [number] [amount]",
  cooldowns: 3
};

module.exports.run = async ({ api, event, args }) => {
  // ইনপুট চেক
  if (args.length < 2) {
    return api.sendMessage(
      "❌ সঠিকভাবে ব্যবহার করুন:\n/bkash [নাম্বার] [টাকা]\n\nউদাহরণ:\n/bkash 01812345678 500",
      event.threadID,
      event.messageID
    );
  }

  const number = args[0];
  const amount = args[1];

  // ছবি URL (আপনি চাইলে নিজের ছবি URL দিতে পারেন)
  const imageUrl = "https://i.ibb.co/9mwXdgyG/Picsart-25-02-15-07-13-07-933.jpg";

  const filePath = __dirname + "/bkash.jpg";

  // বর্তমান তারিখ ও সময় বাংলাদেশ টাইমে
  const now = new Date();
  const options = { timeZone: "Asia/Dhaka", hour12: true };
  const date = now.toLocaleDateString("en-GB", options); // dd/mm/yyyy
  const time = now.toLocaleTimeString("en-US", options); // hh:mm AM/PM

  // ট্রানজেকশন আইডি র‍্যান্ডম জেনারেট করা
  const trxId = `TXN${Math.floor(100000 + Math.random() * 900000)}K`;

  // মেসেজ ফরম্যাট
  const message = `✅ বিকাশ পেমেন্ট সফল হয়েছে!
📅 Date: ${date}
⏰ Time: ${time}
🆔 TrxID: ${trxId}
💸 Amount: ৳${amount}
📲 Receiver: ${number}`;

  // ছবি ডাউনলোড করে পাঠানো
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
