const crypto = require("crypto");

module.exports = function(plainText, ssid, printHash){
  if(!plainText || !ssid){
    return "Wrong number of arguments";
  }
  const hash = crypto.pbkdf2Sync(plainText, ssid, 4096, 32, "sha1");
  return hash.toString("hex");
}
