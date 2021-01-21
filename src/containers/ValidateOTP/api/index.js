import axios from '../../../utils/axios'

const verify = async data => {
  console.log(data)
  const info = await axios.get(
    `verify?mobile=91${data.payload.phone}&code=${data.payload.code}`
  )
  return info
}

export default verify
