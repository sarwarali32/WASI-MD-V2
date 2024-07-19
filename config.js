//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0srSGtSZEcwczMrbG4wdlpMVTI4bHRZOTBHcFFUQ21DemtKUVdnL0xYQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOVlWbHdyZXhubnZZbUpwelVCbDRRQzdrZTJvekp1Wnd2em16TXlYZEYydz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2TkdWaFo2K1NyRjRHQUNDa2xycDVDMmo1Sy82R1ZFRjh4UTJpTW1hMVhJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSSnhxc0lUQWxybGlmSm1TN2o3OGlJWjdpNTlDVVhoN1JVSyswVSt3eDFnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVDYlZ6RXhud0I2OTgxdEFWUmxyb1djWkwyVUJnLzRLY0hnMDN5TWpySEE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBkcWdaUk1UNDlNSGNjZGZqT0o3czRTeHhreWJOcXZzM3FRRU1XdzU0Z3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0pFWDFocWQxdzIrUmo2NndjU1RpSkUzSWVUWE45UVVnNmNOSFdxTTJuWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK2pOWE5ISG9Wbmh0N0x2S2FSTnZmaEEwcWl5ZUVvQ0pqRk1aQllZS1Z6UT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdCOGFjQWwzUFRMU2IxWjk1OXhwUTVCOWtVVHRhTkNqQmNVdEYzMytBcFdGVUJRTXNlQXFMK2tGSm0rZEhOOWx1djRjMWJOSG1MQXE3NWZTZTQ0YWdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDMsImFkdlNlY3JldEtleSI6IldTOXBRSjhBRUl5SGhDVGZ2eVlob2h6VEhJRU1CT21IZXdPU1BUeWR2aUk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMzY4NTI1MTI2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkUwNzVEMzBCQjczRjQ0MDEyMjI4Q0UyOUU0REYxOUFGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjEzOTYyMTZ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik9fVFZYRjNxU0NPLVVUMm1XdTRFT0EiLCJwaG9uZUlkIjoiY2QxNmQyNTQtZWNiOC00MjFhLTk4ZmQtMzVjNDdjNDFhZDZiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjI2Nm0xcTZ2Y1hRYmNMNHpzU3cybXFqQlFtOD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxUXFHRmJxNmU0MktiYTFFejFsNDgrS1BRd009In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRUVQM0RBWUgiLCJtZSI6eyJpZCI6IjkyMzM2ODUyNTEyNjoxOEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJTUiDwn5iIIEhBQ0tFUiDwn5iOIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOTHFwNWdERU9yWDZiUUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJLZ3FPbTBTV3FNZGZKbEJjUlpmeldmelFFeVVubW5SbGN3MytSM21tNXh3PSIsImFjY291bnRTaWduYXR1cmUiOiJqOXN2Sk5Va2ZZVUV0L0RxQXRUNTBuOE83bk52cG9yYkdiY2llc0s5bTFhaThFSU82WGZxS3RwWFh0SVVEUnZEYWVjQ2luUi85bERWR1Z1b09PellEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMlFPYUs5NzRTaklDTDFKWlJSdi9NMVFJandjM1RTVmlRYVlhY1lhb2orUmV5WHdWNGs4dDdjODN2Qk5hYTU5QnAwN1RaL2xNRUwvQWNQSkRVSWRuaGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMzNjg1MjUxMjY6MThAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU29LanB0RWxxakhYeVpRWEVXWDgxbjgwQk1sSjVwMFpYTU4va2Q1cHVjYyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTM5NjIxNCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFDQ0EifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
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
