import axios from '../../../utils/axios'

const signup = async userData => {
  const data = await axios.post(`/sign-up`, userData.data)

  return data
}

export default signup
