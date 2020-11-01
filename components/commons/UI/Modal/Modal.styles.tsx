import styled from 'styled-components'

export const Container = styled.div<{ show: boolean }>`
  position: absolute;
  margin: 0 auto;
  top: 50%;
  left: 50%;
  width: 100%;
  background-color: #ffffff;
  border-radius: 10px;
  z-index: 99999;
  box-sizing: border-box;
  transform: translate(-50%, -50%);
`

export const CloseIcon = styled.img`
  width: 7px;
  height: 7px;
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
`
