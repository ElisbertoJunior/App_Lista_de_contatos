import styled from 'styled-components'
import { Button } from '../../styles'

export const Form = styled.form`
  max-width: 800px;
  width: 100%;
  padding: 40px;
  margin: 60px auto;

  border-radius: 8px;
  -webkit-box-shadow: 1px 9px 33px -11px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 9px 33px -11px rgba(0, 0, 0, 0.75);
  box-shadow: 1px 9px 33px -11px rgba(0, 0, 0, 0.75);
`
export const TitleForm = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`
export const Input = styled.input`
  width: 100%;
  padding: 15px;
  background-color: transparent;
  margin-bottom: 24px;
  border: none;
  border-bottom: 1px solid #a9a9a9;
  font-size: 18px;
  color: #fff;
`
export const SaveContactButton = styled(Button)`
  background-color: #44bd32;
  color: #fff;
  font-size: 18px;
  padding: 15px;
  margin-top: 20px;
  border-radius: 18px;
`
