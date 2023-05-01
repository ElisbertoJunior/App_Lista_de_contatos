import { useDispatch } from 'react-redux'
import * as S from './styles'
import { useNavigate } from 'react-router-dom'

const FormContact = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  return (
    <S.Form>
      <S.TitleForm>Novo contato:</S.TitleForm>
      <S.Input type="text" placeholder="Nome do contato..." />
      <S.Input type="email" placeholder="Email..." />
      <S.Input type="tel" placeholder="Telefone..." />
      <S.SaveContactButton onClick={() => navigate('/')}>
        Criar contato
      </S.SaveContactButton>
    </S.Form>
  )
}

export default FormContact
