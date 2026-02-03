const KEY = 'auth_token'

export const saveToken = (token: string): void => {
  localStorage.setItem(KEY, token)
}

export const loadToken = (): string | null => {
  return (
    sessionStorage.getItem(KEY) ?? localStorage.getItem(KEY)
  )
}

export const clearToken = (): void => {
  localStorage.removeItem(KEY)
}


export const saveTempToken = (token: string): void => {
  sessionStorage.setItem(KEY, token)
}


export const clearTempToken = (): void => {
  sessionStorage.removeItem(KEY)
}
