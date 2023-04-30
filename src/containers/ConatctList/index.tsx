import Card from '../../components/Card'
import { Container } from './styles'

const ContactList = () => {
  return (
    <Container>
      <Card
        name="Elisberto Alves"
        email="elisberto@gmail.com"
        tel="6299253-3318"
        id={1}
      />
      <Card
        name="Elisberto Alves"
        email="elisberto@gmail.com"
        tel="6299253-3318"
        id={1}
      />
      <Card
        name="Elisberto Alves"
        email="elisberto@gmail.com"
        tel="6299253-3318"
        id={3}
      />
      <Card
        name="Elisberto Alves"
        email="elisberto@gmail.com"
        tel="6299253-3318"
        id={4}
      />
    </Container>
  )
}

export default ContactList
