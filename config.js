//#ENJOY BRO😍
// Credit: 𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨 by      𝙎-𝙏𝞢𝞜
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "sandrk766@gmail.com";
global.location = "Port-au-Prince, Haiti";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null"; 
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://testbot_2m27_user:Az7LOxZBevfQ7qiZ2aKDwQ4325uumm4v@dpg-crngb4o8fa8c738fs4b0-a.oregon-postgres.render.com/testbot_2m27";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "America/Port-au-Prince";
global.github = process.env.GITHUB || "https://github.com/Bot-hostin/DRK-RAGNA-1.0";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/vRR63CN.jpeg,https://i.imgur.com/ovCfp9J.jpeg,https://i.imgur.com/edzo5dj.jpeg";
global.devs = "https://wa.me/50931461936 , https://wa.me/50931461936";
global.sudo = process.env.SUDO || "50931461936";
global.owner = process.env.OWNER_NUMBER || "2250500161896";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/yBSoUuw.jpeg,https://i.imgur.com/XrUDzUl.jpeg,https://i.imgur.com/edjZiEx.jpeg,https://i.imgur.com/cdS2R7I.jpeg,https://i.imgur.com/u9FxdwH.jpeg,https://i.imgur.com/HEFIrto.jpeg,https://i.imgur.com/Fc0gIpE.jpeg,https://i.imgur.com/iaJtsma.jpeg,https://i.imgur.com/17yE9Uy.jpeg,https://i.imgur.com/ERGVvpZ.png"
global.waPresence = process.env.WAPRESENCE || " ";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://drk-tech-2.onrender.com/;
global.scan = "https://drk-tech-2.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0ljMklQT1pKc3RPUTVHaFkzdzhTSVRISzNMNFd5cW1FNGVCQXdKVytHRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT2RJQ2pRNG9BRzZXbFhYMWRqTHdwQ08ya3c2NzRuQ1lqQW96bk9TcmdEST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPRnd4M2JaQXFJSVgzeDNlL25OQXJHZGlqNXR2emNpWkFsL09RaVB2YVZVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzcjRMYUU1V1YrZVEvS05sazNsU2lNeExreHhTTGZGTEUxVW5EMGRTSEJjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFOSjB6WXo4RHFucE9VSk9INkdKc1ptKy9TU2QyQVhxNUdqM29QcXJSMkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFHWHlvNzI5ZGFEbW5VS3ViTWFTWmFCNHBYRndnREY1T3dkUy9LNk5YV2s9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0lKWm43dzFoV2RZeEJFc0lMc3NvMHZPWXNnZG51dHU0NDJNUEFZWnIxaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMXlVa3huZE9WVzB5dGpqV1ZvY1dhT1RYNVI1bmpCQy9WcGs5Tk1IWWFCRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNZYk1aZ0t0WkhSdFlHdW5IYlpZTG4wWWZJeXVOdkRySE5jVGVjVFovVDhCTTRqaXRuck9UUldPdUg4UHAwSmJiZ3VRd1BkZWJRS1luU3M0VWIxV2dnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMzLCJhZHZTZWNyZXRLZXkiOiIxZS9qWUh3NlFDY0FHWjJwemhqM1A0Q3RIajFIbEUxWkFIZWoyWG1VaVNJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIyNTA1MDAxNjE4OTZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMTBERDlERkIwNzg3Q0NDN0FENTExRTQxMkI5MEVEODMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczNDgyMzM5M30seyJrZXkiOnsicmVtb3RlSmlkIjoiMjI1MDUwMDE2MTg5NkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJFRjJDOTIyNzc4Rjg2OEFCNkRGQjY4RDBFMTk2QkEzQiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM0ODIzMzkzfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJDQ3hKdUxRSVI1S2dFWkE0eTQ3akVnIiwicGhvbmVJZCI6IjA2NDJlMGFhLTM1YzctNDYwNi1iYTUyLWIxOTU1NjY5ODRhMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlZTRrZEdiUDNYYUFkQlJaMkhKbEN6c1N6ekk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRzFKZk9vR1VhZWRIOU9RMTBnSXh6akhLVWtFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlBXWjVBS1dGIiwibWUiOnsiaWQiOiIyMjUwNTAwMTYxODk2OjEyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuKZqO+4j01yIE9pbSBMZHkg8J+GkvCfmI4ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ091Mm9XQVEwcHVkdXdZWUNTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IldFR21FN0FKMnQ2NDRYdG9wTFhYcmJwMVk0RVErYWs3VGhIRmQ1ZFZielE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlZZSDQ0djlCc1h5YnZwT285dEdBZ0tZYnhPekpyVXBNQ2tVbzFyZVlFbWpDQ05DVHdmcHkxTjFNUnh6bXhWQ05MbGFsZWhYSkgyTnlPbVkxYk12VkJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJHb2Q4QjhWTHZRVzdwaTRxTVBVRUR3MnI1L29TY2Yyb0xQVVpNcFN0TU13SWFoSjNzZnhna25hQXYrRzJKY0VRMDNWa053TGQ4TU9mUWRvL1RySDlqZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIyNTA1MDAxNjE4OTY6MTJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVmhCcGhPd0NkcmV1T0Y3YUtTMTE2MjZkV09CRVBtcE8wNFJ4WGVYVlc4MCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNDgyMzM5MSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQdEYifQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF 𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨`",
  author: process.env.PACK_AUTHER || " 𝙎-𝙏𝞢𝞜",
  packname: process.env.PACK_NAME || "♨️Mr Oim Ldy 🆒😎",
  botname: process.env.BOT_NAME || "ST┘𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨𖤐",
  ownername: process.env.OWNER_NAME || "♨️Mr Oim Ldy 🆒😎",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "Privé",
  LANG: (process.env.THEME || "STEN").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
}); 
