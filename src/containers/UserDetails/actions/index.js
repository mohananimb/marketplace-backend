import { createUser } from '../constants'

export const loading = data => {
  return {
    type: createUser.loading,
    data
  }
}

export const success = data => {
  return {
    type: createUser.success,
    data
  }
}

export const error = error => {
  return {
    type: createUser.error,
    error
  }
}
