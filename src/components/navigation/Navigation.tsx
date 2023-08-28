import { Menu, Search, Shopping } from '../icons/Icons'
import Image from 'next/image'
import Logo from '@/../public/images/logo.png'
import '@/styles/components/navigation.scss'
export function Navigation() {
  return (
    <nav className="navigation">
      <div className="navigation__icon">
        <Menu />
        <Image src={Logo} alt="Logo" width={43} height={30} />
      </div>
      <div className="navigation__icon">
        <Search />
        <div>
          <Shopping />
          <div className="navigation__cart">
            <div>0</div>
          </div>
        </div>
      </div>
    </nav>
  )
}
