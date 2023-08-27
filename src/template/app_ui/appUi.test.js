import { render, screen } from '@testing-library/react'
import { fireEvent } from '@testing-library/react'
import { AppUi } from './AppUi'
import { FilterProvider } from '@/context/FilterContext'

describe('<AppUi />', () => {
  test('Should display button filter and when click open modal filter', async () => {
    render(
      <FilterProvider>
        <AppUi />
      </FilterProvider>,
    )
    const buttonFilter = screen.getByRole('button', { name: 'FILTRAR' })
    expect(buttonFilter).toBeInTheDocument()
    await fireEvent.click(buttonFilter)
    const titleModalFilter = screen.getByRole('heading', { name: 'Filtros' })
    expect(titleModalFilter).toBeInTheDocument()
  })
  test('Should display options to filter and buttons clean and filter', async () => {
    render(
      <FilterProvider>
        <AppUi />
      </FilterProvider>,
    )
    const buttonFilterMain = screen.getByRole('button', { name: 'FILTRAR' })
    expect(buttonFilterMain).toBeInTheDocument()
    await fireEvent.click(buttonFilterMain)
    const options = screen.getAllByRole('checkbox')
    expect(options).toHaveLength(3)
    const buttonFilterModal = screen.getByRole('button', {
      name: 'FILTRAR POR',
    })
    const buttonClean = screen.getByRole('button', { name: 'LIMPIAR' })
    expect(buttonFilterModal).toBeInTheDocument()
    expect(buttonClean).toBeInTheDocument()
  })
  test('Should validate when click in a checkbox is selected and enable button filter', async () => {
    render(
      <FilterProvider>
        <AppUi />
      </FilterProvider>,
    )
    const buttonFilterMain = screen.getByRole('button', { name: 'FILTRAR' })
    expect(buttonFilterMain).toBeInTheDocument()
    await fireEvent.click(buttonFilterMain)
    const options = screen.getAllByRole('checkbox')
    expect(options).toHaveLength(3)
    const [Yellow, Brown, Red] = options
    const buttonClean = screen.getByRole('button', {
      name: 'LIMPIAR',
    })
    const buttonFilterModal = screen.getByText('FILTRAR POR')
    expect(buttonClean).not.toBeEnabled()
    await fireEvent.click(Yellow)
    expect(buttonClean).toBeEnabled()
    expect(buttonFilterModal).toHaveTextContent('FILTRAR POR 1')
    expect(Yellow).toBeChecked()
    await fireEvent.click(Brown)
    expect(Brown).toBeChecked()
    await fireEvent.click(Red)
    expect(Red).toBeChecked()
  })
  test('Should close modal filter when is clicked button filter by and display products by those filter', async () => {
    render(
      <FilterProvider>
        <AppUi />
      </FilterProvider>,
    )
    const buttonFilterMain = screen.getByRole('button', { name: 'FILTRAR' })
    expect(buttonFilterMain).toBeInTheDocument()
    await fireEvent.click(buttonFilterMain)
    const titleModalFilter = screen.getByRole('heading', { name: 'Filtros' })
    expect(titleModalFilter).toBeInTheDocument()
    const options = screen.getAllByRole('checkbox')
    expect(options).toHaveLength(3)
    const [Yellow] = options
    await fireEvent.click(Yellow)
    const buttonFilterModal = screen.getByText('FILTRAR POR 1')
    await fireEvent.click(buttonFilterModal)
    expect(titleModalFilter).not.toBeInTheDocument()
    const productsType1 = screen.getAllByRole('listitem')
    expect(productsType1).toHaveLength(4)
  })
  test('Should close modal when is clicked button clean and display all products', async () => {
    render(
      <FilterProvider>
        <AppUi />
      </FilterProvider>,
    )
    const buttonFilterMain = screen.getByRole('button', { name: 'FILTRAR' })
    expect(buttonFilterMain).toBeInTheDocument()
    await fireEvent.click(buttonFilterMain)
    const titleModalFilter = screen.getByRole('heading', { name: 'Filtros' })
    expect(titleModalFilter).toBeInTheDocument()
    const options = screen.getAllByRole('checkbox')
    expect(options).toHaveLength(3)
    const [Yellow] = options
    await fireEvent.click(Yellow)
    const buttonClean = screen.getByText('LIMPIAR')
    await fireEvent.click(buttonClean)
    expect(titleModalFilter).not.toBeInTheDocument()
    const allProducts = screen.getAllByRole('listitem')
    expect(allProducts).toHaveLength(10)
  })
})
