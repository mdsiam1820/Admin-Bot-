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
    // Admin Protection
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
        /(?:^|\s)সিয়াম(?=\s|$)/,
        /(?:^|\s)siam(?=\s|$)/i
      ],
      footer: "📌 প্রয়োজনে ইনবক্সে যোগাযোগ করুন"
    },
    
    // Royal Protection
    royal: {
      "nafisa": {
        emoji: "👸",
        title: "মহারানী নাফিসা",
        responses: [
          "🌸 রানী সাহেবাকে ডাকার আগে অনুমতি নিন!",
          "💐 নাফিসা দেবীর নাম সম্মান সহকারে নিন!",
          "✨ মহারানীর নামে অসম্মান করো না!"
        ],
        pattern: /(?:^|\s)নাফিসা(?=\s|$)/,
        footer: "❤️ সম্মান বজায় রাখুন"
      }
    },

    // Question Answering
    questions: [
      {
        pattern: /(এডমিন|admin|বস|boss)(ের|er)?\s*(নাম|name)\s*(কি|what|who)/i,
        response: `🛡️ এডমিন ইনফো:\n\n» নাম: সিয়াম (Siam)\n» পদ: সর্বোচ্চ এডমিন\n📌 নিয়ম: সরাসরি ডাকা নিষেধ!`
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
    const { pattern, emoji, title, responses, footer } = protectionSystem.royal[name];
    if (pattern.test(body)) {
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      const royalMessage = `${emoji} ${title} ${emoji}\n\n${randomResponse}\n\n${footer}`;
      return api.sendMessage(royalMessage, threadID, messageID);
    }
  }
};

module.exports.run = function({ api, event, client, __GLOBAL }) { }
