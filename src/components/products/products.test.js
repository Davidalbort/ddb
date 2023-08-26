import { render, screen } from '@testing-library/react'
import { Products } from './Products'
import { mockProducts } from '@/mocks/products'

describe('<Products', () => {
  test('render', () => {
    render(<Products products={mockProducts} />)
  })
  test('Should display image of products', () => {
    render(<Products products={mockProducts} />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(mockProducts.length)
  })
  test('Should display name, description, and price of the product', () => {
    render(<Products products={mockProducts} />)
    const names = screen.getAllByRole('heading')
    const descriptions = screen.getAllByRole('definition')
    const prices = screen.getAllByRole('textbox')
    names.forEach((name, index) => {
      const nameExpect = mockProducts[index].name
      expect(name).toHaveTextContent(nameExpect)
    })
    descriptions.forEach((description, index) => {
      const descriptionExpect = mockProducts[index].description
      expect(description).toHaveTextContent(descriptionExpect)
    })
    prices.forEach((price, index) => {
      const priceExpect = mockProducts[index].price
      expect(price).toHaveTextContent(priceExpect)
    })
  })
  test('Should display button', () => {
    render(<Products products={mockProducts} />)
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(mockProducts.length)
  })
})
