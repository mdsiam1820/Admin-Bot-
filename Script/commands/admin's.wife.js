const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "ultimate-protect",
  version: "5.0.0",
  hasPermssion: 0,
  credits: "Developer",
  description: "সম্পূর্ণ এডমিন ও রয়্যাল প্রটেকশন সিস্টেম",
  commandCategory: "noprefix",
  usages: "",
  cooldowns: 3,
};

module.exports.handleEvent = async function({ api, event }) {
  const { threadID, messageID, body } = event;
  
  // Complete Protection System
  const protectionSystem = {
    // Admin Protection (অপরিবর্তিত)
    admin: {
      name: "সিয়াম (Siam)",
      title: "👑 সর্বোচ্চ এডমিন ও গ্রুপ মালিক 👑",
      emoji: "🛡️",
      responses: [
        "⚠️ সতর্কতা! এডমিন সিয়াম সাহেবকে ডাকবেন না!",
        "⛔ সরাসরি এডমিনকে ডাকা নিষেধ!",
        "🔴 নামটি মুছে ফেলুন! এডমিন ট্যাগ করা যাবে না!"
      ],
      patterns: [
        /(?:^|\s)(সিয়াম|siam)(?=\s|$)/i,
        /@(সিয়াম|siam)/i
      ],
      footer: "📌 প্রয়োজনে ইনবক্সে যোগাযোগ করুন"
    },
    
    // Royal Protection (নাফিসার জন্য আপডেটেড মেসেজ)
    royal: {
      "nafisa": {
        emoji: "👸",
        title: "মহারানী নাফিসা (সিয়ামের বউ)",
        responses: [
          "🌸 রানী সাহেবাকে ডাকার আগে অনুমতি নিন!",
          "💐 নাফিসা দেবীর নাম সম্মান সহকারে নিন!",
          "✨ মহারানীর নামে অসম্মান করো না!",
          "👑 সিয়ামের রানীকে ডাকতে সাহস করছো?",
          "💖 সিয়ামের প্রিয়তমাকে এভাবে ডাকা উচিত নয়!",
          "⚠️ সতর্ক! সিয়ামের বউকে ডাকছো?",
          "💞 সিয়ামের জীবনসঙ্গিনীকে সম্মান করুন",
          "💘 সিয়ামের ভালোবাসাকে ডিস্টার্ব করো না"
        ],
        patterns: [
          /(?:^|\s)(নাফিসা|nafisa)(?=\s|$)/i,
          /@(নাফিসা|nafisa)/i,
          /(?:^|\s)(নাফীসা|nafisa)(?=\s|$)/i,
          /(?:^|\s)(সিয়ামের বউ|siamer bou)(?=\s|$)/i,
          /(?:^|\s)(সিয়ামের স্ত্রী|siamer stri)(?=\s|$)/i
        ],
        footer: "❤️ সম্মান বজায় রাখুন | 👑 সিয়ামের রানী"
      }
    },

    // Question Answering (অপরিবর্তিত)
    questions: [
      {
        pattern: /(এডমিন|admin|বস|boss)(ের|er)?\s*(নাম|name)\s*(কি|what|who)/i,
        response: `🛡️ এডমিন ইনফো:\n\n» নাম: সিয়াম (Siam)\n» পদ: সর্বোচ্চ এডমিন\n📌 নিয়ম: সরাসরি ডাকা নিষেধ!`
      },
      {
        pattern: /(নাফিসা|nafisa)(ের|er)?\s*(বিয়ে|bou|husband|স্বামী)( কে| who)/i,
        response: `💍 বিয়ে সংক্রান্ত তথ্য:\n\n» নাফিসার স্বামী: সিয়াম (Siam)\n» সম্পর্ক: জীবনসঙ্গী\n💖 তারা পরস্পরের জন্য তৈরি!`
      }
    ]
  };

  // Check for questions first
  for (const q of protectionSystem.questions) {
    if (q.pattern.test(body)) {
      return api.sendMessage(q.response, threadID, messageID);
    }
  }

  // Check Admin Protection
  for (const pattern of protectionSystem.admin.patterns) {
    if (pattern.test(body)) {
      const randomResponse = protectionSystem.admin.responses[Math.floor(Math.random() * protectionSystem.admin.responses.length)];
      const adminMessage = `${protectionSystem.admin.emoji} ${protectionSystem.admin.title} ${protectionSystem.admin.emoji}\n\n${randomResponse}\n\n${protectionSystem.admin.footer}`;
      return api.sendMessage(adminMessage, threadID, messageID);
    }
  }

  // Check Royal Protection
  for (const name in protectionSystem.royal) {
    const royal = protectionSystem.royal[name];
    for (const pattern of royal.patterns) {
      if (pattern.test(body)) {
        const randomResponse = royal.responses[Math.floor(Math.random() * royal.responses.length)];
        const royalMessage = `${royal.emoji} ${royal.title} ${royal.emoji}\n\n${randomResponse}\n\n${royal.footer}`;
        return api.sendMessage(royalMessage, threadID, messageID);
      }
    }
  }
};

module.exports.run = function({ api, event, client, __GLOBAL }) { }
