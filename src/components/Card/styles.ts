import styled from 'styled-components'
import { Button } from '../../styles'

export const CardContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 20px;
  border-radius: 8px;
  -webkit-box-shadow: 1px 9px 33px -11px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 9px 33px -11px rgba(0, 0, 0, 0.75);
  box-shadow: 1px 9px 33px -11px rgba(0, 0, 0, 0.75);

  div {
    margin: 15px 0;
  }
`
export const TitleCard = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`

export const Email = styled.input`
  width: 100%;
  font-size: 16px;
  padding: 10px 0;
  border: none;
  border-radius: 8px;

  color: #fff;
  background-color: transparent;
`

export const RemoveButton = styled(Button)`
  background-color: #f44336;
`
export const SaveButton = styled(Button)`
  background-color: #44bd32;
`

export const Phone = styled(Email)``
