import { useDispatch } from 'react-redux'
import * as S from './styles'
import { useNavigate } from 'react-router-dom'
import { FormEvent, useState } from 'react'
import { register } from '../../store/reducers/contact'

const FormContact = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')

  const registerContact = (event: FormEvent) => {
    event.preventDefault()
    dispatch(register({ name, email, tel }))
    navigate('/')
  }

  return (
    <S.Form onSubmit={registerContact}>
      <S.TitleForm>Novo contato:</S.TitleForm>
      <S.Input
        value={name}
        type="text"
        placeholder="Nome do contato..."
        onChange={({ target }) => setName(target.value)}
      />
      <S.Input
        value={email}
        type="email"
        placeholder="Email..."
        onChange={({ target }) => setEmail(target.value)}
      />
      <S.Input
        value={tel}
        type="tel"
        placeholder="Telefone..."
        onChange={({ target }) => setTel(target.value)}
      />
      <S.SaveContactButton type="submit">Criar contato</S.SaveContactButton>
    </S.Form>
  )
}

export default FormContact
