const fs = require("fs-extra");
const request = require("request");

module.exports.config = {
  name: "mix",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Siam Ahmed",
  description: "Mix two emojis into one image",
  commandCategory: "image",
  usages: "[emoji1] [emoji2]",
  cooldowns: 0,
  dependencies: {
    "fs-extra": "",
    "request": ""
  }
};

module.exports.run = async ({ api, event, args }) => {
  const { threadID, messageID } = event;

  // যদি দুইটা ইমোজি না দেয়
  if (args.length < 2) {
    return api.sendMessage(
      `❌ ভুল ফরম্যাট!\n✅ সঠিক ব্যবহার: /mix 😍 😂`,
      threadID,
      messageID
    );
  }

  // ইমোজি ইনপুট নেয়া
  const emoji1 = args[0];
  const emoji2 = args[1];

  // ইমেজ কোথায় সংরক্ষণ হবে
  const savePath = __dirname + "/cache/emojimix.png";

  try {
    // API ইউআরএল তৈরি
    const url = encodeURI(`https://web-api-delta.vercel.app/emojimix?emoji1=${emoji1}&emoji2=${emoji2}`);

    // ইমেজ ডাউনলোড এবং পাঠানো
    const callback = () => {
      api.sendMessage(
        {
          body: `✅ ইমোজি মিক্স করা হলো!`,
          attachment: fs.createReadStream(savePath)
        },
        threadID,
        () => fs.unlinkSync(savePath), // ছবি পাঠানোর পর ফাইল ডিলিট
        messageID
      );
    };

    request(url)
      .pipe(fs.createWriteStream(savePath))
      .on("close", callback);

  } catch (err) {
    // যদি কোনো সমস্যা হয়
    return api.sendMessage(
      `❌ দুঃখিত! ইমোজি মিক্স করা গেল না ${emoji1} এবং ${emoji2} দিয়ে।`,
      threadID,
      messageID
    );
  }
};
