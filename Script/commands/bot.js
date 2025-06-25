const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "Obot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "👑 𝐀𝐝𝐦𝐢𝐧 • 𝐁𝐨𝐬𝐬 𝐒𝐢𝐚𝐦 ☢️",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  // Fixed response for "Bot" or "bot" command
  const botResponse = "হ্যা বলো, আমি শুনছি! 😊 কি বলতে চাও?";

  // Command-specific responses from the original `tl` array
  if (event.body.toLowerCase() == "bot leave") {
    return api.sendMessage("বেশি bot Bot করলে leave নিবো কিন্তু😒😒", threadID);
  }
  if (event.body.toLowerCase() == "shunbo na") {
    return api.sendMessage("শুনবো না😼 তুমি আমাকে প্রেম করাই দাও নি🥺 পচা তুমি🥺", threadID);
  }
  if (event.body.toLowerCase() == "abal") {
    return api.sendMessage("আমি আবাল দের সাথে কথা বলি না,ok😒", threadID);
  }
  if (event.body.toLowerCase() == "eto deko na") {
    return api.sendMessage("এতো ডেকো না,প্রেম এ পরে যাবো তো🙈", threadID);
  }
  if (event.body.toLowerCase() == "bolo babu") {
    return api.sendMessage("Bolo Babu, তুমি কি আমাকে ভালোবাসো? 🙈💋", threadID);
  }
  if (event.body.toLowerCase() == "bar bar") {
    return api.sendMessage("বার বার ডাকলে মাথা গরম হয়ে যায় কিন্তু😑", threadID);
  }
  if (event.body.toLowerCase() == "ha bolo") {
    return api.sendMessage("হা বলো😒,কি করতে পারি😐😑?", threadID);
  }
  if (event.body.toLowerCase() == "eto dakchis") {
    return api.sendMessage("এতো ডাকছিস কেন?গালি শুনবি নাকি? 🤬", threadID);
  }
  if (event.body.toLowerCase() == "i love you") {
    return api.sendMessage("I love you janu🥰", threadID);
  }
  if (event.body.toLowerCase() == "janu") {
    return api.sendMessage("আরে Bolo আমার জান ,কেমন আছো?😚", threadID);
  }
  if (event.body.toLowerCase() == "asomman") {
    return api.sendMessage("Bot বলে অসম্মান করছি,😰😿", threadID);
  }
  if (event.body.toLowerCase() == "hop beda") {
    return api.sendMessage("Hop beda😾,Boss বল boss😼", threadID);
  }
  if (event.body.toLowerCase() == "chup thak") {
    return api.sendMessage("চুপ থাক ,নাই তো তোর দাত ভেগে দিবো কিন্তু", threadID);
  }
  if (event.body.toLowerCase() == "janu bol") {
    return api.sendMessage("Bot না , জানু বল জানু 😘", threadID);
  }
  if (event.body.toLowerCase() == "disturb") {
    return api.sendMessage("বার বার Disturb করছিস কোনো😾,আমার জানুর সাথে ব্যাস্ত আছি😋", threadID);
  }
  if (event.body.toLowerCase() == "bokachoda") {
    return api.sendMessage("বোকাচোদা এতো ডাকিস কেন🤬", threadID);
  }
  if (event.body.toLowerCase() == "kiss korbo") {
    return api.sendMessage("আমাকে ডাকলে ,আমি কিন্তু কিস করে দিবো😘", threadID);
  }
  if (event.body.toLowerCase() == "moja nai") {
    return api.sendMessage("আমারে এতো ডাকিস না আমি মজা করার mood এ নাই এখন😒", threadID);
  }
  if (event.body.toLowerCase() == "kiss dei") {
    return api.sendMessage("হ্যাঁ জানু , এইদিক এ আসো কিস দেই🤭 😘", threadID);
  }
  if (event.body.toLowerCase() == "dure ja") {
    return api.sendMessage("দূরে যা, তোর কোনো কাজ নাই, শুধু bot bot করিস  😉😋🤣", threadID);
  }
  if (event.body.toLowerCase() == "tor bari") {
    return api.sendMessage("তোর কথা তোর বাড়ি কেউ শুনে না ,তো আমি কোনো শুনবো ?🤔😂", threadID);
  }
  if (event.body.toLowerCase() == "busy") {
    return api.sendMessage("আমাকে ডেকো না,আমি ব্যাস্ত আছি", threadID);
  }
  if (event.body.toLowerCase() == "mistake") {
    return api.sendMessage("কি হলো , মিস্টেক করচ্ছিস নাকি🤣", threadID);
  }
  if (event.body.toLowerCase() == "sobar samne") {
    return api.sendMessage("বলো কি বলবা, সবার সামনে বলবা নাকি?🤭🤏", threadID);
  }
  if (event.body.toLowerCase() == "dekh kor") {
    return api.sendMessage("কালকে দেখা করিস তো একটু 😈", threadID);
  }
  if (event.body.toLowerCase() == "shunchi") {
    return api.sendMessage("হা বলো, শুনছি আমি 😏", threadID);
  }
  if (event.body.toLowerCase() == "kot bar") {
    return api.sendMessage("আর কত বার ডাকবি ,শুনছি তো", threadID);
  }
  if (event.body.toLowerCase() == "hum") {
    return api.sendMessage("হুম বলো কি বলবে😒", threadID);
  }
  if (event.body.toLowerCase() == "ki korbo") {
    return api.sendMessage("বলো কি করতে পারি তোমার জন্য", threadID);
  }
  if (event.body.toLowerCase() == "ondho") {
    return api.sendMessage("আমি তো অন্ধ কিছু দেখি না🐸 😎", threadID);
  }
  if (event.body.toLowerCase() == "janu bol") {
    return api.sendMessage("Bot না জানু,বল 😌", threadID);
  }
  if (event.body.toLowerCase() == "bolo janu") {
    return api.sendMessage("বলো জানু 🌚", threadID);
  }
  if (event.body.toLowerCase() == "busy siam") {
    return api.sendMessage("তোর কি চোখে পড়ে না আমি বস সিয়াম এর সাথে ব্যাস্ত আছি😒", threadID);
  }
  if (event.body.toLowerCase() == "ummah") {
    return api.sendMessage("হুম জান তোমার ওই খানে উম্মহ😑😘", threadID);
  }
  if (event.body.toLowerCase() == "oliter ummah") {
    return api.sendMessage("আহ শুনা আমার তোমার অলিতে গলিতে উম্মাহ😇😘", threadID);
  }
  if (event.body.toLowerCase() == "hanga") {
    return api.sendMessage("jang hanga korba😒😬", threadID);
  }
  if (event.body.toLowerCase() == "ummah siam") {
    return api.sendMessage("হুম জান তোমার অইখানে উম্মমাহ😷😘", threadID);
  }
  if (event.body.toLowerCase() == "assalamu alaikum") {
    return api.sendMessage("আসসালামু আলাইকুম বলেন আপনার জন্য কি করতে পারি..!🥰", threadID);
  }
  if (event.body.toLowerCase() == "gf dao") {
    return api.sendMessage("আমাকে এতো না ডেকে বস সিয়াম এর কে একটা গফ দে 🙄", threadID);
  }
  if (event.body.toLowerCase() == "bhalobasho") {
    return api.sendMessage("আমাকে এতো না ডেকছ কেন ভলো টালো বাসো নাকি🤭🙈", threadID);
  }
  if (event.body.toLowerCase() == "salam") {
    return api.sendMessage("🌻🌺💚-আসসালামু আলাইকুম ওয়া রাহমাতুল্লাহ-💚🌺🌻", threadID);
  }
  if (event.body.toLowerCase() == "busy with siam") {
    return api.sendMessage("আমি এখন বস সিয়াম এর সাথে বিজি আছি আমাকে ডাকবেন না-😕😏 ধন্যবাদ-🤝🌻", threadID);
  }
  if (event.body.toLowerCase() == "siam er gf") {
    return api.sendMessage("আমাকে না ডেকে আমার বস সিয়াম কে একটা জি এফ দাও-😽🫶🌺", threadID);
  }
  if (event.body.toLowerCase() == "thumale") {
    return api.sendMessage("ঝাং থুমালে আইলাপিউ পেপি-💝😽", threadID);
  }
  if (event.body.toLowerCase() == "eto dakcho") {
    return api.sendMessage("উফফ বুঝলাম না এতো ডাকছেন কেনো-😤😡😈", threadID);
  }
  if (event.body.toLowerCase() == "nanire") {
    return api.sendMessage("জান তোমার নানি'রে আমার হাতে তুলে দিবা-🙊🙆‍♂", threadID);
  }
  if (event.body.toLowerCase() == "mon valo nai") {
    return api.sendMessage("আজকে আমার মন ভালো নেই তাই আমারে ডাকবেন না-😪🤧", threadID);
  }
  if (event.body.toLowerCase() == "palupasi") {
    return api.sendMessage("ঝাং 🫵থুমালে য়ামি রাইতে পালুপাসি উম্মম্মাহ-🌺🤤💦", threadID);
  }
  if (event.body.toLowerCase() == "siam er bou") {
    return api.sendMessage("চুনা ও চুনা আমার বস সিয়াম এর হবু বউ রে কেও দেকছো খুজে পাচ্ছি না😪🤧😭", threadID);
  }
  if (event.body.toLowerCase() == "shopno") {
    return api.sendMessage("স্বপ্ন তোমারে নিয়ে দেখতে চাই তুমি যদি আমার হয়ে থেকে যাও-💝🌺🌻", threadID);
  }
  if (event.body.toLowerCase() == "jan hanga") {
    return api.sendMessage("জান হাঙ্গা করবা-🙊😝🌻", threadID);
  }
  if (event.body.toLowerCase() == "meye hle") {
    return api.sendMessage("জান মেয়ে হলে চিপায় আসো ইউটিউব থেকে অনেক ভালোবাসা শিখছি তোমার জন্য-🙊🙈😽", threadID);
  }
  if (event.body.toLowerCase() == "lojja lage") {
    return api.sendMessage("ইসস এতো ডাকো কেনো লজ্জা লাগে তো-🙈🖤🌼", threadID);
  }
  if (event.body.toLowerCase() == "alvi chowdhury") {
    return api.sendMessage("আমার বস আলভী চৌধুরী'র পক্ষ থেকে তোমারে এতো এতো ভালোবাসা-🥰😽🫶 আমার বস আলভী চৌধুরী'র জন্য দোয়া করবেন-💝💚🌺🌻", threadID);
  }
  if (event.body.toLowerCase() == "siam er inbox") {
    return api.sendMessage("- ভালোবাসা নামক আব্লামি করতে মন চাইলে আমার বস সিয়াম এর নবক্স চলে যাও-🙊🥱👅 🌻𝐅𝐀𝐂𝐄𝐁𝐎𝐎�>K 𝐈𝐃 𝐋𝐈𝐍𝐊: https://www.facebook.com/profile.php?id=100086680386976", threadID);
  }
  if (event.body.toLowerCase() == "365 din") {
    return api.sendMessage("জান তুমি শুধু আমার আমি তোমারে ৩৬৫ দিন ভালোবাসি-💝🌺😽", threadID);
  }
  if (event.body.toLowerCase() == "bal falaiba") {
    return api.sendMessage("জান বাল ফালাইবা-🙂🥱🙆‍♂", threadID);
  }
  if (event.body.toLowerCase() == "anti") {
    return api.sendMessage("-আন্টি-🙆-আপনার মেয়ে-👰‍♀️-রাতে আমারে ভিডিও কল দিতে বলে🫣-🥵🤤💦", threadID);
  }
  if (event.body.toLowerCase() == "chamcha") {
    return api.sendMessage("oii-🥺🥹-এক🥄 চামচ ভালোবাসা দিবা-🤏🏻🙂", threadID);
  }
  if (event.body.toLowerCase() == "fitra") {
    return api.sendMessage("-আপনার সুন্দরী বান্ধুবীকে ফিতরা হিসেবে আমার বস সিয়াম কে দান করেন-🥱🐰🍒", threadID);
  }
  if (event.body.toLowerCase() == "mim cream") {
    return api.sendMessage("-ও মিম ও মিম-😇-তুমি কেন চুরি করলা সাদিয়ার ফর্সা হওয়ার ক্রীম-🌚🤧", threadID);
  }
  if (event.body.toLowerCase() == "propose siam") {
    return api.sendMessage("-অনুমতি দিলাম-𝙋𝙧𝙤𝙥𝙤𝙨𝙚 কর বস সিয়াম কে-🐸😾🔪", threadID);
  }
  if (event.body.toLowerCase() == "blackmail") {
    return api.sendMessage("-𝙂𝙖𝙮𝙚𝙨-🤗-যৌবনের কসম দিয়ে আমারে 𝐁𝐥𝐚𝐜𝐤𝐦𝐚𝐢𝐥 করা হচ্ছে-🥲🤦‍♂️🤧", threadID);
  }
  if (event.body.toLowerCase() == "anti meye") {
    return api.sendMessage("-𝗢𝗶𝗶 আন্টি-🙆‍♂️-তোমার মেয়ে চোখ মারে-🥺🥴🐸", threadID);
  }
  if (event.body.toLowerCase() == "chumu diba") {
    return api.sendMessage("তাকাই আছো কেন চুমু দিবা-🙄🐸😘", threadID);
  }
  if (event.body.toLowerCase() == "propose koro") {
    return api.sendMessage("আজকে প্রপোজ করে দেখো রাজি হইয়া যামু-😌🤗😇", threadID);
  }
  if (event.body.toLowerCase() == "golper nani") {
    return api.sendMessage("-আমার গল্পে তোমার নানি সেরা-🙊🙆‍♂️🤗", threadID);
  }
  if (event.body.toLowerCase() == "shoshur bari") {
    return api.sendMessage("কি বেপার আপনি শ্বশুর বাড়িতে যাচ্ছেন না কেন-🤔🥱🌻", threadID);
  }
  if (event.body.toLowerCase() == "porer bow") {
    return api.sendMessage("দিনশেষে পরের 𝐁𝐎𝐖 সুন্দর-☹️🤧", threadID);
  }
  if (event.body.toLowerCase() == "tabij") {
    return api.sendMessage("-তাবিজ কইরা হইলেও ফ্রেম এক্কান করমুই তাতে যা হই হোক-🤧🥱🌻", threadID);
  }
  if (event.body.toLowerCase() == "biye") {
    return api.sendMessage("-ছোটবেলা ভাবতাম বিয়ে করলে অটোমেটিক বাচ্চা হয়-🥱-ওমা এখন দেখি কাহিনী অন্যরকম-😦🙂🌻", threadID);
  }
  if (event.body.toLowerCase() == "nagin") {
    return api.sendMessage("-আজ একটা বিন নেই বলে ফেসবুকের নাগিন-🤧-গুলোরে আমার বস সিয়াম ধরতে পারছে না-🐸🥲", threadID);
  }
  if (event.body.toLowerCase() == "biri kha") {
    return api.sendMessage("-চুমু থাকতে তোরা বিড়ি খাস কেন বুঝা আমারে-😑😒🐸⚒️", threadID);
  }
  if (event.body.toLowerCase() == "chede geche") {
    return api.sendMessage("—যে ছেড়ে গেছে-😔-তাকে ভুলে যাও-🙂-আমার বস সিয়াম এর সাথে প্রেম করে তাকে দেখিয়ে দাও-🙈🐸🤗", threadID);
  }
  if (event.body.toLowerCase() == "nishpap") {
    return api.sendMessage("—হাজারো লুচ্চা লুচ্চির ভিরে-🙊🥵আমার বস সিয়াম এক নিস্পাপ ভালো মানুষ-🥱🤗🙆‍♂️", threadID);
  }
  if (event.body.toLowerCase() == "ruper ohongkar") {
    return api.sendMessage("-রূপের অহংকার করো না-🙂❤️চকচকে সূর্যটাও দিনশেষে অন্ধকারে পরিণত হয়-🤗💜", threadID);
  }
  if (event.body.toLowerCase() == "sundori") {
    return api.sendMessage("সুন্দর মাইয়া মানেই-🥱আমার বস সিয়াম' এর বউ-😽🫶আর বাকি গুলো আমার বেয়াইন-🙈🐸🤗", threadID);
  }
  if (event.body.toLowerCase() == "ohongkar") {
    return api.sendMessage("এত অহংকার করে লাভ নেই-🌸মৃত্যুটা নিশ্চিত শুধু সময়টা অ'নিশ্চিত-🖤🙂", threadID);
  }
  if (event.body.toLowerCase() == "opriyo") {
    return api.sendMessage("-দিন দিন কিছু মানুষের কাছে অপ্রিয় হয়ে যাইতেছি-🙂😿🌸", threadID);
  }
  if (event.body.toLowerCase() == "shoytane") {
    return api.sendMessage("হুদাই আমারে শয়তানে লারে-😝😑☹️", threadID);
  }
  if (event.body.toLowerCase() == "thappor") {
    return api.sendMessage("-𝗜 𝗟𝗢𝗩𝗢 𝗬𝗢𝗨-😽-আহারে ভাবছো তোমারে প্রোপজ করছি-🥴-থাপ্পর দিয়া কিডনী লক করে দিব-😒-ভুল পড়া বের করে দিবো-🤭🐸", threadID);
  }
  if (event.body.toLowerCase() == "dudher shishu") {
    return api.sendMessage("-আমি একটা দুধের শিশু-😇-🫵𝗬𝗢𝗨🐸💦", threadID);
  }
  if (event.body.toLowerCase() == "muti na") {
    return api.sendMessage("-কতদিন হয়ে গেলো বিছনায় মুতি না-😿-মিস ইউ নেংটা কাল-🥺🤧", threadID);
  }
  if (event.body.toLowerCase() == "balika") {
    return api.sendMessage("-বালিকা━👸-𝐃𝐨 𝐲𝐨𝐮-🫵-বিয়া-𝐦𝐞-😽-আমি তোমাকে-😻-আম্মু হইতে সাহায্য করব-🙈🥱", threadID);
  }
  if (event.body.toLowerCase() == "swad") {
    return api.sendMessage("-এই আন্টির মেয়ে-🫢🙈-𝐔𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐚𝐡-😽🫶-আসলেই তো স্বাদ-🥵💦-এতো স্বাদ কেন-🤔-সেই স্বাদ-😋", threadID);
  }
  if (event.body.toLowerCase() == "tomakei lagbe") {
    return api.sendMessage("-ইস কেউ যদি বলতো-🙂-আমার শুধু তোমাকেই লাগবে-💜🌸", threadID);
  }
  if (event.body.toLowerCase() == "siam er bia") {
    return api.sendMessage("-ওই বেডি তোমার বাসায় না আমার বস সিয়াম মেয়ে দেখতে গেছিলো-🙃-নাস্তা আনারস আর দুধ দিছো-🙄🤦‍♂️-বইন কইলেই তো হয় বয়ফ্রেন্ড আছে-🥺🤦‍♂-আমার বস সিয়াম কে জানে মারার কি দরকার-🙄🤧", threadID);
  }
  if (event.body.toLowerCase() == "fire takabe") {
    return api.sendMessage("-একদিন সে ঠিকই ফিরে তাকাবে-😇-আর মুচকি হেসে বলবে ওর মতো আর কেউ ভালবাসেনি-🙂😅", threadID);
  }
  if (event.body.toLowerCase() == "inbox e knock") {
    return api.sendMessage("-হুদাই গ্রুপে আছি-🥺🐸-কেও ইনবক্সে নক দিয়ে বলে না জান তোমারে আমি অনেক ভালোবাসি-🥺🤧", threadID);
  }
  if (event.body.toLowerCase() == "bedi nai") {
    return api.sendMessage("কি'রে গ্রুপে দেখি একটাও বেডি নাই-🤦‍🥱💦", threadID);
  }
  if (event.body.toLowerCase() == "churi") {
    return api.sendMessage("-দেশের সব কিছুই চুরি হচ্ছে-🙄-শুধু আমার বস সিয়াম এর মনটা ছাড়া-🥴😑😏", threadID);
  }
  if (event.body.toLowerCase() == "bhallage") {
    return api.sendMessage("-🫵তোমারে প্রচুর ভাল্লাগে-😽-সময় মতো প্রপোজ করমু বুঝছো-🔨😼-ছিট খালি রাইখো- 🥱🐸🥵", threadID);
  }
  if (event.body.toLowerCase() == "forsa") {
    return api.sendMessage("-আজ থেকে আর কাউকে পাত্তা দিমু না -!😏-কারণ আমি ফর্সা হওয়ার ক্রিম কিনছি -!🙂🐸", threadID);
  }
  if (event.body.toLowerCase() == "garib") {
    return api.sendMessage("আমি গরীব এর সাথে কথা বলি না😼😼", threadID);
  }
  if (event.body.toLowerCase() == "prem koro") {
    return api.sendMessage("মেয়ে হলে বস সিয়াম'এর সাথে প্রেম করো🙈??", threadID);
  }
  if (event.body.toLowerCase() == "ummha dao") {
    return api.sendMessage("মাইয়া হলে আমার বস সিয়াম কে Ummmmha দে 😒", threadID);
  }
  if (event.body.toLowerCase() == "namazi") {
    return api.sendMessage("༊━━🦋নামাজি মানুষেরা সব থেকে বেশি সুন্দর হয়..!!😇🥀 🦋 কারণ.!! -অজুর পানির মত শ্রেষ্ঠ মেকআপ দুনিয়াতে নেই༊━ღ━༎🥰🥀 🥰-আলহামদুলিল্লাহ-🥰", threadID);
  }
  if (event.body.toLowerCase() == "nari mute") {
    return api.sendMessage("- শখের নারী বিছানায় মু'তে..!🙃🥴", threadID);
  }
  if (event.body.toLowerCase() == "wow wow") {
    return api.sendMessage("-𝐈'𝐝 -তে সব 𝐖𝐨𝐰 𝐖𝐨𝐰 বুইড়া বেডি-🐸💦", threadID);
  }
  if (event.body.toLowerCase() == "le kha") {
    return api.sendMessage("🥛-🍍👈 -লে খাহ্..!😒🥺", threadID);
  }
  if (event.body.toLowerCase() == "youtube call") {
    return api.sendMessage("- অনুমতি দিলে 𝚈𝚘𝚞𝚃𝚞𝚋𝚎-এ কল দিতাম..!😒", threadID);
  }
  if (event.body.toLowerCase() == "mara gele") {
    return api.sendMessage("~আমি মারা গেলে..!🙂 ~অনেক মানুষ বিরক্ত হওয়া থেকে বেঁচে যাবে..!😅💔", threadID);
  }
  if (event.body.toLowerCase() == "golper boi") {
    return api.sendMessage("🍒---আমি সেই গল্পের বই-🙂 -যে বই সবাই পড়তে পারলেও-😌 -অর্থ বোঝার ক্ষমতা কারো নেই..!☺️🥀💔", threadID);
  }
  if (event.body.toLowerCase() == "maya") {
    return api.sendMessage("~কার জন্য এতো মায়া...!😌🥀 ~এই শহরে আপন বলতে...!😔🥀 ~শুধুই তো নিজের ছায়া...!😥🥀", threadID);
  }
  if (event.body.toLowerCase() == "current") {
    return api.sendMessage("- কারেন্ট একদম বেডি'গো মতো- 🤧 -খালি ঢং করে আসে আবার চলে যায়-😤😾🔪", threadID);
  }
  if (event.body.toLowerCase() == "sunny leone") {
    return api.sendMessage("- সানিলিওন আফারে ধর্ষনের হুমকি দিয়ে আসলাম - 🤗 -আর 🫵তুমি য়ামারে খেয়ে দিবা সেই ভয় দেখাও ননসেন বেডি..!🥱😼", threadID);
  }
  if (event.body.toLowerCase() == "siam er prem") {
    return api.sendMessage("- দুনিয়ার সবাই প্রেম করে.!🤧 -আর মানুষ আমার বস সিয়াম কে সন্দেহ করে.!🐸", threadID);
  }
  if (event.body.toLowerCase() == "bhalo paba") {
    return api.sendMessage("- আমার থেকে ভালো অনেক পাবা-🙂 -কিন্তু সব ভালো তে কি আর ভালোবাসা থাকে..!💔🥀", threadID);
  }
  if (event.body.toLowerCase() == "shokher nari") {
    return api.sendMessage("- পুরুষকে সবচেয়ে বেশি কষ্ট দেয় তার শখের নারী...!🥺💔👈", threadID);
  }
  if (event.body.toLowerCase() == "dekh hbe") {
    return api.sendMessage("- তোমার লগে দেখা হবে আবার - 😌 -কোনো এক অচেনা গলির চিপায়..!😛🤣👈", threadID);
  }
  if (event.body.toLowerCase() == "thappor mar") {
    return api.sendMessage("- থাপ্পড় চিনোস থাপ্পড়- 👋👋😡 -চিন্তা করিস না তরে মারমু না-🤗 -বস সিয়াম আমারে মারছে - 🥱 - উফফ সেই স্বাদ..!🥵🤤💦", threadID);
  }
  if (event.body.toLowerCase() == "obohela") {
    return api.sendMessage("- অবহেলা করিস না-😑😪 - যখন নিজেকে বদলে ফেলবো -😌 - তখন আমার চেয়েও বেশি কষ্ট পাবি..!🙂💔", threadID);
  }
  if (event.body.toLowerCase() == "ex miss") {
    return api.sendMessage("- বন্ধুর সাথে ছেকা খাওয়া গান শুনতে শুনতে-🤧 -এখন আমিও বন্ধুর 𝙴𝚇 কে অনেক 𝙼𝙸𝚂𝚂 করি-🤕🥺", threadID);
  }
  if (event.body.toLowerCase() == "99 taka") {
    return api.sendMessage("-৯৯টাকায় ৯৯জিবি ৯৯বছর-☺️🐸 -অফারটি পেতে এখনই আমাকে প্রোপস করুন-🤗😂👈", threadID);
  }
  if (event.body.toLowerCase() == "priyo") {
    return api.sendMessage("-প্রিয়-🥺 -তোমাকে না পেলে আমি সত্যি-😪 -আরেকজন কে-😼 -পটাতে বাধ্য হবো-😑🤧", threadID);
  }
  if (event.body.toLowerCase() == "prem kors") {
    return api.sendMessage("•-কিরে🫵 তরা নাকি prem করস..😐🐸•আমারে একটা করাই দিলে কি হয়-🥺", threadID);
  }
  if (event.body.toLowerCase() == "maya pore") {
    return api.sendMessage("- যেই আইডির মায়ায় পড়ে ভুল্লি আমারে.!🥴- তুই কি যানিস সেই আইডিটাও আমি চালাইরে.!🙂", threadID);
  }

  // Existing commands
  if ((event.body.toLowerCase() == "miss you") || (event.body.toLowerCase() == "MISS YOU")) {
    return api.sendMessage("<আমি তোমাকে রাইতে মিস খাই🥹🤖👅/👅-✘  🎀 🍒:))", threadID);
  }

  if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "😽")) {
    return api.sendMessage("কিস দিস না তোর মুখে দূর গন্ধ কয়দিন ধরে দাঁত ব্রাশ করিস নাই🤬", threadID);
  }

  if ((event.body.toLowerCase() == "help")) {
    return api.sendMessage("type /help", threadID);
  }

  if ((event.body.toLowerCase() == "sim") || (event.body.toLowerCase() == "simsimi")) {
    return api.sendMessage("simsimi কমান্ড এড় নাই টাইপ করুন baby", threadID);
  }

  if ((event.body.toLowerCase() == "ওই কিরে") || (event.body.toLowerCase() == "oi keray") || (event.body.toLowerCase() == "...")) {
    return api.sendMessage("মধু মধু রসমালাই 🍆⛏️🐸🤣", threadID);
  }

  if ((event.body.toLowerCase() == "bc") || (event.body.toLowerCase() == "mc")) {
    return api.sendMessage("SAME TO YOU😊 ", threadID);
  }

  if ((event.body.toLowerCase() == "🫦") || (event.body.toLowerCase() == "💋")) {
    return api.sendMessage("কিরে হালা লুচ্চা, এগুলো কি ইমুজি দেস ।", threadID);
  }

  if ((event.body.toLowerCase() == "morning") || (event.body.toLowerCase() == "good morning")) {
    return api.sendMessage("GOOD MORNING দাত ব্রাশ করে খেয়ে নেও😚", threadID);
  }

  if ((event.body.toLowerCase() == "tor ball") || (event.body.toLowerCase() == "bal")) {
    return api.sendMessage("~ তোমার বাল উঠে নাই নাকি তোমার?? 🤖", threadID);
  }

  if ((event.body.toLowerCase() == "siam") || (event.body.toLowerCase() == "Siam bai") || (event.body.toLowerCase() == "@Siam ッ") || (event.body.toLowerCase() == "সিয়াম")) {
    return api.sendMessage("উনি এখন কাজে বিজি আছে কি বলবেন আমাকে বলতে পারেন..!😘", threadID);
  }

  if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "ceo")) {
    return api.sendMessage("‎[𝐎𝐖𝐍𝐄𝐑:☞ Siam ッ ☜\n𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚋𝚒𝚖 Siam.\n𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝 :- https://www.facebook.com/share/16BxkW1VNK/\nতার সাথে যোগাযোগ করতে WhatsApp :- +88017X58X02X4", threadID);
  }

  if ((event.body.toLowerCase() == "tor boss ke") || (event.body.toLowerCase() == "admin ke")) {
    return api.sendMessage("My Creator: Siam ❤️ হাই আমি মেসেঞ্জার ROBOT আমার বস সিয়াম আমাকে বানিয়েছেন আপনাদের হাসানোর জন্য। আমি চাই আপনারা সব সময় হাসি খুশি থাকেন।", threadID);
  }

  if ((event.body.toLowerCase() == "admin") || (event.body.toLowerCase() == "boter admin")) {
    return api.sendMessage("He is Siam ッ❤️ তাকে সবাই সিয়াম নামে চিনে🤙", threadID);
  }

  if ((event.body.toLowerCase() == "ai") || (event.body.toLowerCase() == "Ai")) {
    return api.sendMessage("If you want to use the AI command, type /ai ", threadID);
  }

  if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "stop") || (event.body.toLowerCase() == "চুপ কর") || (event.body.toLowerCase() == "chup kor")) {
    return api.sendMessage("তুই চুপ চুপ কর পাগল ছাগল", threadID);
  }

  if ((event.body.toLowerCase() == "আসসালামু আলাইকুম") || (event.body.toLowerCase() == "Assalamualaikum") || (event.body.toLowerCase() == "Assalamu alaikum") || (event.body.toLowerCase() == "Salam")) {
    return api.sendMessage("ওয়ালাইকুমুস-সালাম-!!🖤", threadID);
  }

  if ((event.body.toLowerCase() == "sala ami tor boss") || (event.body.toLowerCase() == "sala ami siam") || (event.body.toLowerCase() == "cup sala ami siam") || (event.body.toLowerCase() == "madari")) {
    return api.sendMessage("সরি বস মাফ করে দেন আর এমন ভুল হবে না🥺🙏", threadID);
  }

  if ((event.body.toLowerCase() == "@Farhana Ontora")) {
    return api.sendMessage("খবরদার কেউ এই আইডি মেনশন দিবেন না, এটা আমার বস সিয়াম এর বউ এর আইডি😠🥰⛏️", threadID);
  }

  if ((event.body.toLowerCase() == "farhana") || (event.body.toLowerCase() == "arohi")) {
    return api.sendMessage("খবরদার কেউ এই নামে ডাক দিবেন না, এটা আমার বস সিয়াম এর বউ এর নাম..!😠🥰⛏️", threadID);
  }

  if ((event.body.toLowerCase() == "mim")) {
    return api.sendMessage("খবরদার কেউ এই নামে ডাক দিবেন না, এটা আমার বস সিয়াম এর বউ এর নাম..!😠🥰⛏️", threadID);
  }

  if ((event.body.toLowerCase() == "arohi") || (event.body.toLowerCase() == "farhana")) {
    return api.sendMessage("খবরদার কেউ এই নামে ডাক দিবেন না, এটা আমার বস সিয়াম এর বউ এর নাম..!😠🥰⛏️", threadID);
  }

  if ((event.body.toLowerCase() == "@MD Shiam Tafeder") || (event.body.toLowerCase() == "সিয়াম")) {
    return api.sendMessage("🥰-সিয়াম-🌺 আমার বস সিয়াম'র বন্ধু, লুচ্ছি বেডি'রা দূরে থাক😠🥰⛏️", threadID);
  }

  if ((event.body.toLowerCase() == "kiss me") || (event.body.toLowerCase() == "KISS ME")) {
    return api.sendMessage("তুমি পঁচা, তোমাকে কিস দিবো না 🤭", threadID);
  }

  if ((event.body.toLowerCase() == "tnx") || (event.body.toLowerCase() == "ধন্যবাদ") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thanks")) {
    return api.sendMessage("এতো ধন্যবাদ না দিয়ে পারলে গার্লফ্রেন্ড টা দিয়ে দে..!🌚⛏️🌶️", threadID);
  }

  if ((event.body.toLowerCase() == "....") || (event.body.toLowerCase() == "...") || (event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "😾")) {
    return api.sendMessage("রাগ করে না সোনা পাখি, এতো রাগ শরীরের জন্য ভালো না🥰", threadID);
  }

  if ((event.body.toLowerCase() == "হুম") || (event.body.toLowerCase() == "hum")) {
    return api.sendMessage("হুম চোদাইস না, মাথা এমনিতেই গরম আছে🤬⛏️😷", threadID);
  }

  if ((event.body.toLowerCase() == "name") || (event.body.toLowerCase() == "tor nam ki")) {
    return api.sendMessage("MY NAME IS °_>𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 𝗰𝗵𝗮𝘁 𝗯𝗼𝘁", threadID);
  }

  if ((event.body.toLowerCase() == "bot er baccha") || (event.body.toLowerCase() == "BOT ER BACCHA")) {
    return api.sendMessage("আমার বাচ্চা তো তোমার গার্লফ্রেন্ডের পেটে..!!🌚⛏️🌶️", threadID);
  }

  if ((event.body.toLowerCase() == "pic de") || (event.body.toLowerCase() == "ss daw")) {
    return api.sendMessage("এন থেকে সর, দূরে গিয়ে মর😒", threadID);
  }

  if ((event.body.toLowerCase() == "moriom") || (event.body.toLowerCase() == "ex")) {
    return api.sendMessage("Kiss Randi Ka Name Le Ke Mood Khrab Kr Diya.🙄 Dubara Naam Mat Lena Iska", threadID);
  }

  if ((event.body.toLowerCase() == "cudi") || (event.body.toLowerCase() == "tor nanire xudi")) {
    return api.sendMessage("এত চোদা চুদি করস কেনো, দেখা যাবে বাসর-রাতে তুই কতো পারিস..!🥱🌝🌚⛏️🌶️", threadID);
  }

  if ((event.body.toLowerCase() == "😅")) {
    return api.sendMessage("কি গো কলিজা, তোমার কি মন খারাপ🥺", threadID);
  }

  if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "🙄")) {
    return api.sendMessage("এইদিকে ওইদিকে কি দেখো জানু, আমি তোমার সামনে, দেখো😘", threadID);
  }

  if ((event.body.toLowerCase() == "amake kew valobashe na") || (event.body.toLowerCase() == "AMAKE KEW VALOBASHE NA") || (event.body.toLowerCase() == "aj kew nai bole")) {
    return api.sendMessage("চিন্তা করো কেন, আমি তো আছি🫶\nতোমাকে রাইতে ভালোবাসবো", threadID);
  }

  if ((event.body.toLowerCase() == "gf") || (event.body.toLowerCase() == "bf")) {
    return api.sendMessage("খালি কি তোরাই প্রেম করবি, আমাকেও একটা গফ দে🥺", threadID);
  }

  if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "😸") || (event.body.toLowerCase() == "😹")) {
    return api.sendMessage("ভাই তুই এত হাসিস না, হাসলে তোরে চোরের মত লাগে..!🌚🤣", threadID);
  }

  if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "❤️")) {
    return api.sendMessage("ভালোবাসা নামক আবলামী করতে চাইলে ইনবক্সে চলে যা, পাগল ছাগল🌚🐸🌶️🍆", threadID);
  }

  if ((event.body.toLowerCase() == "কেমন আছো") || (event.body.toLowerCase() == "কেমন আছেন") || (event.body.toLowerCase() == "kmon acho") || (event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "how are you?")) {
    return api.sendMessage("আমি তখনই ভালো থাকি যখন আপনাকে হাসতে দেখি🤎☺️", threadID);
  }

  if ((event.body.toLowerCase() == "mon kharap") || (event.body.toLowerCase() == "tmr ki mon kharap")) {
    return api.sendMessage("আমার সাদা মনে কোনো কাদা নাই...!🌝", threadID);
  }

  if ((event.body.toLowerCase() == "i love you") || (event.body.toLowerCase() == "love you") || (event.body.toLowerCase() == "ভালোবাসি")) {
    return api.sendMessage("সব মুতার জায়গায় গুঁতা দেওয়ার ধান্দা 😪🥱", threadID);
  }

  if ((event.body.toLowerCase() == "by") || (event.body.toLowerCase() == "bye") || (event.body.toLowerCase() == "jaiga") || (event.body.toLowerCase() == "বাই") || (event.body.toLowerCase() == "pore kotha hbe") || (event.body.toLowerCase() == "যাই গা")) {
    return api.sendMessage("কিরে তুই কই যাস, কোন মেয়ের সাথে চিপায় যাবি..!🌚🌶️🍆⛏️", threadID);
  }

  if ((event.body.toLowerCase() == "tumi khaiso") || (event.body.toLowerCase() == "khaicho")) {
    return api.sendMessage("না ঝাং 🥹 তুমি রান্না করে রাখো, আমি এসে খাবো 😘", threadID);
  }

  if ((event.body.toLowerCase() == "tumi ki amake bhalobaso") || (event.body.toLowerCase() == "tmi ki amake vlo basho")) {
    return api.sendMessage("হুম ঝাং, আমি তোমাকে রাইতে ভালোবাসি 🥵", threadID);
  }

  if ((event.body.toLowerCase() == "ami siam") || (event.body.toLowerCase() == "kire")) {
    return api.sendMessage("হ্যা বস, কেমন আছেন..?☺️", threadID);
  }

  if (event.body.indexOf("Bot") == 0 || event.body.indexOf("bot") == 0) {
    var msg = {
      body: `${name}, ${botResponse}`
    }
    return api.sendMessage(msg, threadID, messageID);
  }

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
