'use client'
import { Products } from '@/components/products/Products'
import result from '@/../db.json'
import { Filter } from '@/components/icons/Icons'
import { useState } from 'react'
import { FilterModal } from '@/components/filterModal/FilterModal'

export function AppUi() {
  const [isOpenModalFilter, setIsOpenModalFilter] = useState(false)
  const handleClickModalFilter = () => {
    setIsOpenModalFilter((previousState) => !previousState)
  }
  const options = [
    { id: 1, label: 'Rubia' },
    { id: 2, label: 'Morena' },
    { id: 3, label: 'Roja' },
  ]
  return (
    <div>
      <Products products={result.products} />
      <button onClick={handleClickModalFilter}>
        <span>FILTRAR</span>
        <Filter />
      </button>
      {isOpenModalFilter ? (
        <FilterModal
          listOptions={options}
          toggleModalFilter={handleClickModalFilter}
        />
      ) : null}
    </div>
  )
}
