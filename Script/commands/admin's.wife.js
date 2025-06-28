const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "nafisa",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Your Name",
  description: "Response to Nafisa name",
  commandCategory: "noprefix",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = async function({ api, event }) {
  var { threadID, messageID, body } = event;
  
  // Convert message to lowercase for case-insensitive comparison
  const msg = body.toLowerCase();
  
  // Check for Nafisa name in both English and Bengali
  if (msg === "nafisa" || msg === "নাফিসা") {
    return api.sendMessage("খবরদার কেউ এই নামে ডাক দিবেন না, এটা আমার বস এডমিন এর বউ এর নাম..!😠🥰⛏️", threadID, messageID);
  }
};

module.exports.run = function({ api, event, client, __GLOBAL }) { }
