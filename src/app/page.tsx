import { FilterProvider } from '@/context/FilterContext'
import { AppUi } from '@/template/app_ui/AppUi'

export default function Home() {
  return (
    <FilterProvider>
      <AppUi />
    </FilterProvider>
  )
}
