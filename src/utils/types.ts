export interface Product {
  name: string
  description: string
  price: number
  image: string
  id: number
  type: number
}

export interface ProductsProps {
  products: Product[]
}

export interface FilterOptions {
  id: number
  label: string
}
export interface FilterModalProps {
  listOptions: FilterOptions[]
  handleFilter: () => void
  resetProduct: () => void
}

export interface FilterModalState {
  optionsSelected: string[]
}

export interface HandleChangeCheckboxProps {
  type: number
}

export interface ButtonModalProps {
  handleClick: () => void
  text: string
}
