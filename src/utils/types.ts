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
