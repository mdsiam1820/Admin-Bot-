const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "royal-protect-plus",
  version: "3.0.0",
  hasPermssion: 0,
  credits: "Developer",
  description: "Advanced Royal Protection System",
  commandCategory: "noprefix",
  usages: "",
  cooldowns: 3,
};

module.exports.handleEvent = async function({ api, event }) {
  const { threadID, messageID, body } = event;
  
  // Advanced Royal Protection System
  const royalProtection = {
    "siam": {
      emoji: "👑",
      responses: [
        "ওই ছোটলোক! রাজা সিয়াম সাহেবকে ডাইরেক্ট ডাক দিবেন না! 😤 (নিয়ম কানুন মানেন!)",
        "⚠️ সাবধান! রাজা সিয়ামের নাম নেওয়া নিষেধ!",
        "⛔ মহারাজা সিয়ামের নাম মুখে নেওয়ার সাহস? 😡"
      ],
      pattern: /(?:^|\s)siam(?=\s|$)/i
    },
    "সিয়াম": {
      emoji: "🤴",
      responses: [
        "আরে বাপ রে! আমাদের মহারাজা সিয়াম সাহেবকে ডাকছো? 😱 (পদ্মফুল এনে ক্ষমা চাও!)",
        "🚨 রাজদ্রোহ! সিয়াম সাহেবের নাম নিষিদ্ধ!",
        "🔴 নামটি মুছে ফেলুন! নাহলে রাজদরবারে ডাকা হবে!"
      ],
      pattern: /(?:^|\s)সিয়াম(?=\s|$)/
    },
    "nafisa": {
      emoji: "👸",
      responses: [
        "উফ্ফ! রানী নাফিসা সাহেবাকে ডাকার সাহস? 😳 (তোমার তো বড় দুঃসাহস!)",
        "💢 রানী নাফিসার নাম মুখে আনতে নিষেধ!",
        "⚜️ মহারানীর নাম নেওয়ার আগে অনুমতি নিন!"
      ],
      pattern: /(?:^|\s)nafisa(?=\s|$)/i
    },
    "নাফিসা": {
      emoji: "💍",
      responses: [
        "শুনো হে প্রজা! মহারানী নাফিসা দেবীকে ডাকার আগে রাজদরবার থেকে পারমিশন নিবেন! ✨",
        "🌸 রানী নাফিসার নাম নিষিদ্ধ! সম্মান বজায় রাখুন!",
        "👑 মহারানীর নাম সরাসরি ডাকা রাজদ্রোহের শামিল!"
      ],
      pattern: /(?:^|\s)নাফিসা(?=\s|$)/
    }
  };

  // Check message for protected names
  for (const name in royalProtection) {
    const { pattern, emoji, responses } = royalProtection[name];
    if (pattern.test(body)) {
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      return api.sendMessage(`${emoji} ${randomResponse} ${emoji}`, threadID, messageID);
    }
  }
};

module.exports.run = function({ api, event, client, __GLOBAL }) { }
