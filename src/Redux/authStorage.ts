const KEY = 'auth_token'

export const saveToken = (token: string): void => {
  localStorage.setItem(KEY, token)
}

export const loadToken = (): string | null => {
  return localStorage.getItem(KEY)
}

export const clearToken = (): void => {
  localStorage.removeItem(KEY)
}
