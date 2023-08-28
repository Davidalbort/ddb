import { ButtonModalProps } from '@/utils/types'
import { Filter } from '@/components/icons/Icons'
import '@/styles/components/button_modal.scss'
export function ButtonModal({ handleClick, text }: ButtonModalProps) {
  return (
    <button className="button-modal" onClick={handleClick}>
      <div className="button-modal__container">
        <span>{text}</span>
        <Filter />
      </div>
    </button>
  )
}
