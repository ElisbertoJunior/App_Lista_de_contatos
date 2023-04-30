import styled from 'styled-components'

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
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;

  color: #fff;
  background-color: transparent;
`
export const Button = styled.button`
  background-color: #00d8ff;
  color: #000;
  font-weight: bold;
  padding: 8px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  margin-right: 8px;

  :hover {
    opacity: 0.8;
  }
`
export const RemoveButton = styled(Button)`
  background-color: #f44336;
  color: #fff;
`
export const SaveButton = styled(Button)`
  background-color: #44bd32;
  color: #fff;
`

export const Phone = styled(Email)``