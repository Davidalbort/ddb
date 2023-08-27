import { useFilter } from '@/hooks/useFilter'
import { FilterModalProps, HandleChangeCheckboxProps } from '@/utils/types'

export function FilterModal({
  listOptions,
  handleFilter,
  resetProduct,
}: FilterModalProps) {
  const { optionsSelected, updateOptions, resetOptions, closeModalFilter } =
    useFilter()
  const isThereOptions = optionsSelected?.length > 0 ? false : true
  const labelButtonFilter = `FILTRAR POR ${optionsSelected.join(',')}`
  const handleChangeCheckbox = ({ type }: HandleChangeCheckboxProps) => {
    const isSelectedType = optionsSelected.includes(type)
    if (isSelectedType) {
      const currentOptionsSelected = optionsSelected.filter(
        (option) => option !== type,
      )
      updateOptions(currentOptionsSelected)
    } else {
      const currentOptionsSelected = [...optionsSelected, type]
      updateOptions(currentOptionsSelected)
    }
  }
  const handleReset = () => {
    resetOptions()
    closeModalFilter()
    resetProduct()
  }
  return (
    <section>
      <h2>Filtros</h2>
      {listOptions.map((option) => (
        <label key={option.id}>
          <input
            type="checkbox"
            checked={optionsSelected.includes(option.id)}
            onChange={() => handleChangeCheckbox({ type: option.id })}
          />
          {option.label}
        </label>
      ))}
      <button onClick={handleFilter}>{labelButtonFilter}</button>
      <button onClick={handleReset} disabled={isThereOptions}>
        LIMPIAR
      </button>
      <span>{optionsSelected.join(',')}</span>
    </section>
  )
}
