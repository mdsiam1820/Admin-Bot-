const axios = require("axios");
const fs = require("fs-extra");

module.exports.config = {
  name: "admin",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Developer SIAM",
  description: "Show admin information",
  commandCategory: "info",
  usages: "/admin",
  cooldowns: 5,
  aliases: ["info", "about", "out", "live", "Out"]
};

module.exports.run = async ({ api, event }) => {
  const imageUrl = "https://i.ibb.co/9mwXdgyG/Picsart-25-02-15-07-13-07-933.jpg";

  const msg = `•—»✨𝐀𝐝𝐦𝐢𝐧 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧✨🌺
•┄┅═════❁🌺❁═════┅┄•

𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 : 𝐈𝐬𝐥𝐚𝐦𝐢𝐜 𝐂𝐡𝐚𝐭 𝐁𝐨𝐭 𝐁𝐲 𝐒𝐢𝐚𝐦

𝐁𝐨𝐭 𝐀𝐝𝐦𝐢𝐧 : 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 𝐒𝐈𝐀𝐌 ☢️

𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫 : Hafiz Siam Ahmed ッ

•┄┅══❁CONTACT❁══┅┄• 
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐈𝐝: https://www.facebook.com/share/1BhB1Tobqv/

𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩: 017X58X02X4

𝐖𝐞𝐛𝐬𝐢𝐭𝐞: https://developer_siam_1.bio.link/

•┄┅═════❁🌺❁═════┅┄•
🌺✨𝐎𝐭𝐡𝐞𝐫𝐬 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧✨🌺
𝐁𝐨𝐭 𝐏𝐫𝐞𝐟𝐢𝐱 : /

𝐓𝐨𝐝𝐚𝐲 𝐈𝐬 𝐓𝐢𝐦𝐞 : 『${new Date().toLocaleDateString()}』 【${new Date().toLocaleTimeString()}】

𝐓𝐡𝐚𝐧𝐤𝐬 𝐅𝐨𝐫 𝐔𝐬𝐢𝐧𝐠 ༄🌺
｢🕋｣𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐄𝐑 𝐒𝐈𝐀𝐌 ☢️ 𝐁𝐎𝐓｢🕋｣`;

  try {
    const res = await axios.get(imageUrl, { responseType: "stream" });
    return api.sendMessage({
      body: msg,
      attachment: res.data
    }, event.threadID, event.messageID);
  } catch (e) {
    return api.sendMessage(msg, event.threadID, event.messageID);
  }
};
