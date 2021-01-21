const client = require('twilio')(process.env.ACC_SID, process.env.AUTH_TOKEN)

const verifyOTP = (mobile, code) => {
  const verify = client.verify
    .services(process.env.SERVICE_ID)
    .verificationChecks.create({
      to: `+${mobile}`,
      code: code
    })
  return verify
}

module.exports = verifyOTP
