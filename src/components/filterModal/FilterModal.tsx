import {
  FilterModalProps,
  FilterModalState,
  HandleChangeCheckboxProps,
} from '@/utils/types'
import { useState } from 'react'

export function FilterModal({
  listOptions,
  toggleModalFilter,
}: FilterModalProps) {
  const [optionsSelected, setOptionsSelected] = useState<number[]>([])
  const isThereOptions = optionsSelected.length > 0 ? false : true
  const labelButtonFilter = `FILTRAR POR ${optionsSelected.join(',')}`
  const handleChangeCheckbox = ({ type }: HandleChangeCheckboxProps) => {
    const isSelectedType = optionsSelected.includes(type)
    if (isSelectedType) {
      const currentOptionsSelected = optionsSelected.filter(
        (option) => option !== type,
      )
      setOptionsSelected(currentOptionsSelected)
    } else {
      const currentOptionsSelected = [...optionsSelected, type]
      setOptionsSelected(currentOptionsSelected)
    }
  }
  return (
    <section>
      <h2>Filtros</h2>
      {listOptions.map((option) => (
        <label key={option.id}>
          <input
            type="checkbox"
            onChange={() => handleChangeCheckbox({ type: option.id })}
          />
          {option.label}
        </label>
      ))}
      <button onClick={toggleModalFilter}>{labelButtonFilter}</button>
      <button disabled={isThereOptions}>LIMPIAR</button>
      <span>{optionsSelected.join(',')}</span>
    </section>
  )
}
