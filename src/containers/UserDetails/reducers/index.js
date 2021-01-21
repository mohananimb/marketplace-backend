import { createUser } from '../constants'

const initialUserState = {
  loading: false,
  success: false,
  error: '',
  data: []
}

export const user = (state = initialUserState, action) => {
  switch (action.type) {
    case createUser.loading:
      return {
        ...state,
        loading: true
      }

    case createUser.success:
      return {
        loading: false,
        success: true,
        data: action.data.data
      }

    case createUser.error:
      return {
        loading: false,
        success: false,
        error: action.error
      }

    default:
      return state
  }
}
