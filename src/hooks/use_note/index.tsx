import React, { createContext, useContext } from 'react'

export type NoteContextData = {}

export const NoteContextDefaultValues = {}

export const NoteContext = createContext<NoteContextData>(
  NoteContextDefaultValues
)

export type NoteProviderProps = {
  children: React.ReactNode
}

const NoteProvider = ({ children }: NoteProviderProps) => {
  return <NoteContext.Provider value={{}}>{children}</NoteContext.Provider>
}

const useNote = () => useContext(NoteContext)

export { NoteProvider, useNote }
