import axios from '../../../utils/axios'

const send = async phone => {
  const data = await axios.get(`generateOTP?mobile=91${phone}&channel=sms`)
  return data
}

export default send
