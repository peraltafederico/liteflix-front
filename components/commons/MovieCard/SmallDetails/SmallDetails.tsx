import React, { ReactElement } from 'react'
import * as Styled from './SmallDetails.styles'

export default function SmallDetails(): ReactElement {
  return (
    <Styled.Container>
      <Styled.InfoContainer>
        <Styled.ActionsContainer>
          <Styled.ActionIconContainer>
            <Styled.AddIcon src="/images/add-list.svg" />
          </Styled.ActionIconContainer>
          <Styled.ActionIconContainer>
            <Styled.LikeIcon src="/images/like.svg" />
          </Styled.ActionIconContainer>
        </Styled.ActionsContainer>
        <Styled.PlayIconContainer>
          <Styled.PlayIcon src="/images/circle-play.svg" />
        </Styled.PlayIconContainer>
        <Styled.MovieDta>
          <Styled.InfoTitle>Secret City</Styled.InfoTitle>
          <Styled.InfoText>
            98% Coincidencia <Styled.Age>+16</Styled.Age> 1h 30 min Suspenso
          </Styled.InfoText>
        </Styled.MovieDta>
      </Styled.InfoContainer>
      <Styled.ArrowIconContainer>
        <Styled.ArrowIcon src="/images/thin-arrow.svg" />
      </Styled.ArrowIconContainer>
    </Styled.Container>
  )
}
