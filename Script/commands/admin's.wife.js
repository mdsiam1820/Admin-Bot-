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
    
    // Royal Protection (নাফিসার জন্য অপরিবর্তিত মেসেজ)
    royal: {
      "nafisa": {
        emoji: "👸",
        title: "মহারানী নাফিসা",
        responses: [
          "🌸 রানী সাহেবাকে ডাকার আগে অনুমতি নিন!",
          "💐 নাফিসা দেবীর নাম সম্মান সহকারে নিন!",
          "✨ মহারানীর নামে অসম্মান করো না!"
        ],
        patterns: [
          /(?:^|\s)(নাফিসা|nafisa)(?=\s|$)/i,
          /@(নাফিসা|nafisa)/i,
          /(?:^|\s)(নাফীসা|nafisa)(?=\s|$)/i  // বানানের ভিন্নতা কভার করতে
        ],
        footer: "❤️ সম্মান বজায় রাখুন"
      }
    },

    // Question Answering (অপরিবর্তিত)
    questions: [
      {
        pattern: /(এডমিন|admin|বস|boss)(ের|er)?\s*(নাম|name)\s*(কি|what|who)/i,
        response: `🛡️ এডমিন ইনফো:\n\n» নাম: সিয়াম (Siam)\n» পদ: সর্বোচ্চ এডমিন\n📌 নিয়ম: সরাসরি ডাকা নিষেধ!`
      }
    ]
  };

  // Check for questions first (অপরিবর্তিত)
  for (const q of protectionSystem.questions) {
    if (q.pattern.test(body)) {
      return api.sendMessage(q.response, threadID, messageID);
    }
  }

  // Check Admin Protection (অপরিবর্তিত)
  for (const pattern of protectionSystem.admin.patterns) {
    if (pattern.test(body)) {
      const randomResponse = protectionSystem.admin.responses[Math.floor(Math.random() * protectionSystem.admin.responses.length)];
      const adminMessage = `${protectionSystem.admin.emoji} ${protectionSystem.admin.title} ${protectionSystem.admin.emoji}\n\n${randomResponse}\n\n${protectionSystem.admin.footer}`;
      return api.sendMessage(adminMessage, threadID, messageID);
    }
  }

  // Check Royal Protection (শুধু ফাংশনালিটি আপডেট করা হয়েছে)
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
