module.exports.config = {
  name: "nafisaWarning",
  version: "1.0.0",
  description: "Nafisa বা নাফিসা নাম লিখলেই ওয়ার্নিং মেসেজ",
  usage: "nafisa বা নাফিসা লিখলে রিপ্লাই দেয়",
  permission: 0,
  prefix: false // কোন prefix লাগবে না, সরাসরি মেসেজে খুঁজবে
};

module.exports.handle = async ({ api, event }) => {
  const text = event.body.toLowerCase();

  if (text.includes("nafisa") || text.includes("নাফিসা")) {
    const reply = `😠 খবরদার কেউ এই নামে ডাক দিবেন না!
🥰 এটা আমার বস এডমিন এর বউ এর নাম..! ⛏️`;

    api.sendMessage(reply, event.threadID, event.messageID);
  }
};
