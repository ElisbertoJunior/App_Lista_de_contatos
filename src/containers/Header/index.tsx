import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import img from '../../assets/contato-logo.png'
import { RootReducer } from '../../store'
import { handleTerm } from '../../store/reducers/Filter'

const Header = () => {
  const { term } = useSelector((state: RootReducer) => state.filter)
  const dispatch = useDispatch()

  return (
    <S.HeaderContainer>
      <div>
        <img src={img} alt="Logo de contato" />
        <S.Title>Lista de Contatos</S.Title>
      </div>
      <S.SearchInput
        placeholder="Pesquisar contato"
        value={term}
        onChange={({ target }) => dispatch(handleTerm(target.value))}
      />
    </S.HeaderContainer>
  )
}

export default Header
