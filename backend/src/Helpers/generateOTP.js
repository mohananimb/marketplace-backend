const client = require('twilio')(process.env.ACC_SID, process.env.AUTH_TOKEN)

const generate = (mobile) => {
  const otp = client.verify
    .services(process.env.SERVICE_ID)
    .verifications.create({ to: `+${mobile}`, channel: 'sms' })
  return otp
}

module.exports = generate
