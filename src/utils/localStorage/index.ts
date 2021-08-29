import { NoteCardProps } from 'components/NoteCard'

const APP_KEY = 'NOTEAPP'

export function getStorageItem(key: string) {
  const data = window.localStorage.getItem(`${APP_KEY}_${key}`)
  if (!data) {
    return null
  }
  return JSON.parse(data)
}

export function setStorageItem(key: string, value: NoteCardProps[]) {
  const data = JSON.stringify(value)
  return window.localStorage.setItem(`${APP_KEY}_${key}`, data)
}
