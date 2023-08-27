'use client'
import { createContext, useState } from 'react'

interface FilterContextState {
  optionsSelected: number[]
  updateOptions: (options: number[]) => void
  resetOptions: () => void
  isOpenModalFilter: boolean
  openModalFilter: () => void
  closeModalFilter: () => void
}

interface FilterProviderProps {
  children: React.ReactNode
}

export const FilterContext = createContext({} as FilterContextState)

export const FilterProvider = ({ children }: FilterProviderProps) => {
  const [optionsSelected, setOptionsSelected] = useState<number[]>([])
  const [isOpenModalFilter, setIsOpenModalFilter] = useState(false)
  const openModalFilter = () => {
    setIsOpenModalFilter(true)
  }
  const closeModalFilter = () => {
    setIsOpenModalFilter(false)
  }
  const updateOptions = (options: number[]) => {
    setOptionsSelected(options)
  }
  const resetOptions = () => {
    setOptionsSelected([])
  }
  const filterContext: FilterContextState = {
    optionsSelected: optionsSelected,
    updateOptions: updateOptions,
    resetOptions: resetOptions,
    isOpenModalFilter: isOpenModalFilter,
    openModalFilter: openModalFilter,
    closeModalFilter: closeModalFilter,
  }
  return (
    <FilterContext.Provider value={filterContext}>
      {children}
    </FilterContext.Provider>
  )
}
