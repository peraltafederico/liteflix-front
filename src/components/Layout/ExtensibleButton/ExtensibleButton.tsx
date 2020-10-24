import React, { CSSProperties, ReactElement } from 'react'
import * as Styled from './ExtensibleButton.styles'

interface Props {
  children: React.ReactNode
  extensibleText: React.ReactNode
  onClick: () => void
  styles?: CSSProperties
}

export default function ExtensibleButton({
  children,
  styles,
  extensibleText,
  onClick,
}: Props): ReactElement {
  return (
    <Styled.Container onClick={onClick} style={{ ...styles }}>
      {children}
      <Styled.ExtensibleText>{extensibleText}</Styled.ExtensibleText>
    </Styled.Container>
  )
}
