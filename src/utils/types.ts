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
  toggleModalFilter: () => void
}

export interface FilterModalState {
  optionsSelected: string[]
}

export interface HandleChangeCheckboxProps {
  type: number
}
