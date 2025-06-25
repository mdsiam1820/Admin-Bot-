module.exports.config = {
    name: "help",
    version: "1.0.2",
    hasPermssion: 0,
    credits: "👑 𝐀𝐝𝐦𝐢𝐧 • 𝐁𝐨𝐬𝐬 𝐒𝐢𝐚𝐦 ☢️",
    description: "FREE SET-UP MESSENGER",
    commandCategory: "system",
    usages: "[Name module]",
    cooldowns: 5,
    envConfig: {
        autoUnsend: false, // অটো আনসেন্ড বন্ধ করা হয়েছে
        delayUnsend: 20
    }
};

module.exports.languages = {
    "en": {
        "moduleInfo": "╭──────•◈•──────╮\n│        𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 𝗰𝗵𝗮𝘁 𝗯𝗼𝘁\n│●𝗡𝗮𝗺𝗲: •—» %1 «—•\n│●𝗨𝘀𝗮𝗴𝗲: %3\n│●𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻: %2\n│●𝗖𝗮𝘁𝗲𝗴𝗼𝗿𝘆: %4\n│●𝗪𝗮𝗶𝘁𝗶𝗻𝗴 𝘁𝗶𝗺𝗲: %5 seconds(s)\n│●𝗣𝗲𝗿𝗺𝗶𝘀𝘀𝗶𝗼𝗻: %6\n│𝗠𝗼𝗱𝘂𝗹𝗲 𝗰𝗼𝗱𝗲 𝗯𝘆\n│•—» SIAM ッ «—•\n╰──────•◈•──────╯",
        "helpList": '[ There are %1 commands on this bot, Use: "%2help nameCommand" to know how to use! ]',
        "user": "User",
        "adminGroup": "Admin group",
        "adminBot": "Admin bot"
    }
};

module.exports.run = async function({ api, event, args, getText }) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const { commands } = global.client;
    const { threadID, messageID } = event;
    const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
    const prefix = threadSetting.PREFIX || global.config.PREFIX;
    const specificImage = "https://i.ibb.co/9mwXdgyG/Picsart-25-02-15-07-13-07-933.jpg";

    // ইমেজ ডাউনলোড ও পাঠানোর ফাংশন
    const sendHelp = async (messageBody) => {
        try {
            const path = __dirname + "/cache/help_image.jpg";
            const { data } = await axios.get(specificImage, { responseType: "stream" });
            const writer = fs.createWriteStream(path);
            data.pipe(writer);
            
            return new Promise((resolve, reject) => {
                writer.on("finish", () => {
                    api.sendMessage({
                        body: messageBody,
                        attachment: fs.createReadStream(path)
                    }, threadID, () => {
                        fs.unlinkSync(path);
                        resolve();
                    }, messageID);
                });
                writer.on("error", reject);
            });
        } catch (error) {
            console.error("Error sending help:", error);
            api.sendMessage(messageBody, threadID, messageID);
        }
    };

    // help all
    if (args[0] === "all") {
        let msg = "✿🄲🄾🄼🄼🄰🄽🄳 🄻🄸🅂🅃✿\n\n";
        const categories = {};

        commands.forEach((cmd) => {
            const category = cmd.config.commandCategory || "Uncategorized";
            if (!categories[category]) categories[category] = [];
            categories[category].push(cmd.config.name);
        });

        for (const [category, cmds] of Object.entries(categories)) {
            msg += `❄️ ${category.toUpperCase()} ❄️\n${cmds.join(" • ")}\n\n`;
        }

        msg += `✿══════════════✿\n│𝗨𝘀𝗲 ${prefix}help [command]\n│𝗧𝗢𝗧𝗔𝗟 𝗖𝗠𝗗: ${commands.size}\n│𝗢𝗪𝗡𝗘𝗥: SIAM ッ`;
        await sendHelp(msg);
        return;
    }

    // help <command>
    if (args[0]) {
        const command = commands.get(args[0].toLowerCase());
        if (command) {
            const infoText = getText(
                "moduleInfo",
                command.config.name,
                command.config.description,
                `${prefix}${command.config.name} ${command.config.usages || ""}`,
                command.config.commandCategory,
                command.config.cooldowns,
                command.config.hasPermssion === 0 ? getText("user") : 
                command.config.hasPermssion === 1 ? getText("adminGroup") : getText("adminBot")
            );
            await sendHelp(infoText);
            return;
        }
    }

    // ডিফল্ট help (পৃষ্ঠা ১)
    const allCommands = Array.from(commands.keys());
    const page = 1;
    const perPage = 15;
    const pageCommands = allCommands.slice(0, perPage);
    
    let msg = "╭──────•◈•──────╮\n";
    msg += "│        𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 𝗰𝗵𝗮𝘁 𝗯𝗼𝘁\n";
    msg += "│   🄲🄾🄼🄼🄰🄽🄳 🄻🄸🅂🅃\n";
    msg += "╰──────•◈•──────╯\n\n";
    msg += pageCommands.map(cmd => `•—» ${cmd} «—•`).join("\n");
    msg += `\n\n╭──────•◈•──────╮\n`;
    msg += `│𝗨𝘀𝗲 ${prefix}help [command]\n`;
    msg += `│𝗨𝘀𝗲 ${prefix}help all\n`;
    msg += `│𝗧𝗢𝗧𝗔𝗟: ${allCommands.length}\n`;
    msg += `│𝗣𝗔𝗚𝗘: ${page}/${Math.ceil(allCommands.length / perPage)}\n`;
    msg += `╰──────•◈•──────╯`;

    await sendHelp(msg);
};
