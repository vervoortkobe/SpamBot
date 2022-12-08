const robotjs = require("robotjs");

for (let i = 0; i < 6; i++) {
  new Promise(resolve => setTimeout(resolve, 5000));
  robotjs.typeString("discord");
  robotjs.keyTap("enter");
}
