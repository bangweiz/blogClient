export interface UserLogin {
  email: string
  password: string
}

export interface LoginError {
  email?: string
  password?: string
  message?: string
}

export interface LoginSuccess {
  username: string
  email: string
  isAdmin: boolean
}

export interface LoginSuccessReturnData extends LoginSuccess{
  token: string
}
