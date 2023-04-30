import { useState } from 'react'
import * as S from './styles'
import ContactClass from '../../models/Contact'

type Props = ContactClass

const Card = ({ name, email, tel }: Props) => {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <S.CardContainer>
      <S.TitleCard>
        {isEditing && <em>Ediando: </em>}
        {name}
      </S.TitleCard>
      <div>
        <label htmlFor={email}>Email: </label>
        <S.Email id={email} type="email" value={email} disabled={!isEditing} />
      </div>
      <div>
        <label htmlFor={name}>Telefone: </label>
        <S.Phone id={tel} type="tel" value={tel} disabled={!isEditing} />
      </div>
      {isEditing ? (
        <>
          <S.SaveButton>Salvar</S.SaveButton>
          <S.RemoveButton onClick={() => setIsEditing(false)}>
            Cancelar
          </S.RemoveButton>
        </>
      ) : (
        <>
          <S.Button onClick={() => setIsEditing(true)}>Editar</S.Button>
          <S.RemoveButton>Remover</S.RemoveButton>
        </>
      )}
    </S.CardContainer>
  )
}

export default Card
