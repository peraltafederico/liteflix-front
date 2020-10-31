import React, { ReactElement, useState } from 'react'
import { Transition } from 'react-transition-group'
import Backdrop from '../Backdrop/Backdrop'
import * as Styled from './Dropdown.styles'

interface Props {
  trigger?: 'click' | 'hover'
  children: React.ReactNode
  menu: ReactElement
}

export default function Dropdown({
  trigger = 'hover',
  children,
  menu,
}: Props): ReactElement {
  const [show, setShow] = useState(false)

  const getMouseEvents = () => {
    switch (trigger) {
      case 'click':
        return {
          onClick: () => setShow(!show),
        }
      default:
        return {
          onClick: () => setShow(!show),
          onMouseEnter: () => setShow(true),
        }
    }
  }

  const element = React.cloneElement(menu, { setShow })

  return (
    <Styled.Root>
      {show && <Backdrop transparent onClick={() => setShow(!show)} />}
      <Styled.Container {...getMouseEvents()}>{children}</Styled.Container>
      <Transition in={show} timeout={100}>
        {(state) => (
          <Styled.MenuContainer state={state}>{element}</Styled.MenuContainer>
        )}
      </Transition>
    </Styled.Root>
  )
}