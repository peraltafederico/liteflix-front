import styled from 'styled-components'
import { tablet } from '../../../utils/breakpoints'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  max-width: 1112px;
  margin: 0 auto;

  ${tablet} {
    padding: 0 30px;
  }
`

export const Title = styled.h2`
  margin: 0 0 10px 0;
`