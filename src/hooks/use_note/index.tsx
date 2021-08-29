import React, { createContext, useContext, useEffect, useState } from 'react'

import { NoteCardProps } from 'components/NoteCard'

import formatDate from 'utils/format-date'
import { getStorageItem, setStorageItem } from 'utils/localStorage'

const NOTE_KEY = 'noteCards'

export type NoteContextData = {
  notes: NoteCardProps[]
  addNote: (note: NoteCardProps) => void
  updateNote: (note: NoteCardProps) => void
  changeStatus: (id: string, status: boolean) => void
  removeNote: (id: string) => void
}

export const NoteContextDefaultValues = {
  notes: [],
  addNote: () => null,
  updateNote: () => null,
  changeStatus: () => null,
  removeNote: () => null
}

export const NoteContext = createContext<NoteContextData>(
  NoteContextDefaultValues
)

export type NoteProviderProps = {
  children: React.ReactNode
}

const NoteProvider = ({ children }: NoteProviderProps) => {
  const [noteCards, setNoteCards] = useState<NoteCardProps[]>([])

  useEffect(() => {
    const data = getStorageItem(NOTE_KEY)

    if (data) {
      setNoteCards(data)
    }
  }, [])

  const saveNote = (noteItems: NoteCardProps[]) => {
    setNoteCards([...noteItems])
    setStorageItem(NOTE_KEY, noteItems)
  }

  const addNote = (note: NoteCardProps) => {
    note.date = formatDate(new Date())
    note.isFinished = false
    saveNote([...noteCards, note])
  }

  const removeNote = (id: string) => {
    const newNotes = noteCards.filter((note: NoteCardProps) => note.id !== id)
    saveNote(newNotes)
  }

  const changeStatus = (id: string, status: boolean) => {
    const newNotes = noteCards
    const noteIndex = newNotes.findIndex((note) => note.id === id)

    if (noteIndex >= 0) {
      newNotes[noteIndex].isFinished = status

      saveNote(newNotes)
    }
  }

  const updateNote = (note: NoteCardProps) => {
    const newNotes = noteCards
    const noteIndex = newNotes.findIndex((item) => item.id === note.id)

    if (noteIndex >= 0) {
      newNotes[noteIndex] = { ...newNotes[noteIndex], ...note }

      saveNote(newNotes)
    }
  }

  return (
    <NoteContext.Provider
      value={{
        notes: noteCards,
        addNote,
        removeNote,
        updateNote,
        changeStatus
      }}
    >
      {children}
    </NoteContext.Provider>
  )
}

const useNote = () => useContext(NoteContext)

export { NoteProvider, useNote }
