import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: #21222a;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  div {
    display: flex;
    align-items: center;
    gap: 8px;

    img {
      height: 62px;
    }
  }
`

export const Title = styled.h1`
  font-weight: bold;
`

export const SearchInput = styled.input`
  background-color: #282d35;
  width: 300px;
  padding: 5px 8px;
  border-radius: 10px;
  border: none;
  color: #fff;
`
