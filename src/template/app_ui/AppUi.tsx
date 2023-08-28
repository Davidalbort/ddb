'use client'
import { Products } from '@/components/products/Products'
import result from '@/../db.json'
import { useState } from 'react'
import { FilterModal } from '@/components/filterModal/FilterModal'
import { useFilter } from '@/hooks/useFilter'
import { Product } from '@/utils/types'
import { options } from '@/utils/constants'
import { ButtonModal } from '@/components/buttonModal/ButtonModal'
import '@/styles/template/app_ui.scss'
import { Navigation } from '@/components/navigation/Navigation'

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
    <div className="app-ui">
      <Navigation />
      <h1>Cervezas</h1>
      <Products products={filteredProducts} />
      <ButtonModal text="FILTRAR" handleClick={openModalFilter} />
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
