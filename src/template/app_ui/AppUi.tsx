'use client'
import { Products } from '@/components/products/Products'
import result from '@/../db.json'
import { Filter } from '@/components/icons/Icons'
import { useState } from 'react'
import { FilterModal } from '@/components/filterModal/FilterModal'
import { useFilter } from '@/hooks/useFilter'
import { Product } from '@/utils/types'
import { options } from '@/utils/constants'

export function AppUi() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(
    result.products,
  )
  const {
    filterProducts,
    isOpenModalFilter,
    openModalFilter,
    closeModalFilter,
  } = useFilter()
  const handleFilter = () => {
    closeModalFilter()
    const newFilteredProducts = filterProducts(result.products)
    setFilteredProducts(newFilteredProducts)
  }
  const resetProduct = () => {
    setFilteredProducts(result.products)
  }
  return (
    <div>
      <h1>Cervezas</h1>
      <Products products={filteredProducts} />
      <button onClick={openModalFilter}>
        <span>FILTRAR</span>
        <Filter />
      </button>
      {isOpenModalFilter ? (
        <FilterModal
          listOptions={options}
          handleFilter={handleFilter}
          resetProduct={resetProduct}
        />
      ) : null}
    </div>
  )
}
