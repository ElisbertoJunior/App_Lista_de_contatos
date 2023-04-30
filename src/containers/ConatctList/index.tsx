import { useSelector } from 'react-redux'
import Card from '../../components/Card'
import { Container } from './styles'
import { RootReducer } from '../../store'

const ContactList = () => {
  const { itens } = useSelector((state: RootReducer) => state.contacts)

  return (
    <Container>
      {itens.map(({ name, email, tel, id }) => (
        <Card key={id} name={name} email={email} tel={tel} id={id} />
      ))}
    </Container>
  )
}

export default ContactList
