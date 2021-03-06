import styled from 'styled-components'
import { CardSize } from '../../../interfaces'
import { desktop, tablet } from '../../../utils/breakpoints'

export const DetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: none;
  transition: opacity 0.18s ease-in;

  ${desktop} {
    display: block;
    opacity: 0;

    &:hover {
      opacity: 1;
    }
  }
`

export const Container = styled.div<{ size: CardSize }>`
  position: relative;
  width: 100%;
  max-width: ${(props) => (props.size === 'large' ? '163px' : '330px')};
  height: ${(props) => (props.size === 'large' ? '328px' : '201px')};
  cursor: pointer;

  ${tablet} {
    max-width: 330px;
    width: 255px;
    height: ${(props) => (props.size === 'large' ? '507px' : '155px')};
  }

  & > img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
`
