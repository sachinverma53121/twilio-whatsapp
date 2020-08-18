require("dotenv").config();
const accountSid = process.env.TWILIO_ACC_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    from: "whatsapp:+14155238886",
    to: "whatsapp:" + process.env.MY_MOB,
    body: "Hello from Youtube!",
  })
  .then((msg) => console.log(msg.sid));
