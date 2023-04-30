import * as S from './styles'
import img from '../../assets/contato-logo.png'

const Header = () => {
  return (
    <S.HeaderContainer>
      <div>
        <img src={img} alt="Logo de contato" />
        <S.Title>Lista de Contatos</S.Title>
      </div>
      <S.SearchInput placeholder="Pesquisar contato" />
    </S.HeaderContainer>
  )
}

export default Header
