import styled from 'styled-components'

export const Container = styled.div`
  max-height: calc(100vw - 116px);
  height: 100%;
  padding: 40px;

  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`
