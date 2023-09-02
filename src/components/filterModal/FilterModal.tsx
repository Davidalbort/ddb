import { useFilter } from '@/hooks/useFilter'
import { FilterModalProps, HandleChangeCheckboxProps } from '@/utils/types'
import '@/styles/components/filter_modal.scss'
import { Filter } from '../icons/Icons'

export function FilterModal({
  listOptions,
  handleFilter,
  resetProduct,
}: FilterModalProps) {
  const {
    optionsSelected,
    updateOptions,
    resetOptions,
    closeModalFilter,
    isOpenModalFilter,
  } = useFilter()
  const isThereOptions = optionsSelected?.length > 0 ? false : true
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
  const classNameModal = isOpenModalFilter ? 'modal modal--active' : 'modal'
  const classNameModal_content = isOpenModalFilter
    ? 'modal__content modal__content--active'
    : 'modal__content'
  const classNameButtonClear = !isThereOptions
    ? 'modal__button modal__button--active'
    : 'modal__button modal__button--clear'
  return (
    <div className={classNameModal}>
      <section className={classNameModal_content}>
        <h2 className="modal__title">Filtros</h2>
        <fieldset className="input">
          {listOptions.map((option) => (
            <label className="input__label" key={option.id}>
              {option.label}
              <input
                className="input__checkbox"
                type="checkbox"
                checked={optionsSelected.includes(option.id)}
                onChange={() => handleChangeCheckbox({ type: option.id })}
              />
            </label>
          ))}
        </fieldset>
        <footer className="modal__footer">
          <button
            className={classNameButtonClear}
            onClick={handleReset}
            disabled={isThereOptions}
          >
            LIMPIAR
          </button>
          <button
            className="modal__button modal__button--filter"
            onClick={handleFilter}
          >
            <div className="modal__button-container">
              <span>FILTRE</span>
              {!isThereOptions && (
                <span className="modal__filter">
                  {optionsSelected.join(',')}
                </span>
              )}
              <Filter />
            </div>
          </button>
        </footer>
        <button className="modal__close" onClick={closeModalFilter}>
          X
        </button>
      </section>
    </div>
  )
}
