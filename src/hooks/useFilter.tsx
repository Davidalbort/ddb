import { FilterContext } from '@/context/FilterContext'
import { Product } from '@/utils/types'
import { useContext } from 'react'

export function useFilter() {
  const context = useContext(FilterContext)
  if (context === undefined) {
    throw new Error('useFilter must be used within a FilterProvider')
  }
  const {
    optionsSelected,
    resetOptions,
    updateOptions,
    isOpenModalFilter,
    openModalFilter,
    closeModalFilter,
  } = context
  const filterProducts = (products: Product[]): Product[] => {
    const isThereOptions = optionsSelected.length > 0
    if (!isThereOptions) return products
    return products.filter((product) => optionsSelected.includes(product.type))
  }
  return {
    optionsSelected,
    resetOptions,
    updateOptions,
    filterProducts,
    isOpenModalFilter,
    openModalFilter,
    closeModalFilter,
  }
}
