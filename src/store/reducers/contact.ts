import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contact from '../../models/Contact'

type ContactState = {
  itens: Contact[]
}

const initialState: ContactState = {
  itens: [
    new Contact(
      'Elisberto Alves',
      'elisberto.alves@gmail.com',
      '(62) 99253-3318',
      1
    ),
    new Contact(
      'Jose Alves Silva',
      'jose.alves@gmail.com',
      '(62) 98253-0018',
      2
    ),
    new Contact(
      'Alane Pereira',
      'alane.pereira@gmail.com',
      '(62) 95553-8328',
      3
    ),
    new Contact(
      'Matias Silva Prado',
      'matias.prado@gmail.com',
      '(62) 93233-3518',
      4
    ),
    new Contact(
      'Pedro Martins Motta',
      'pedro.motta@gmail.com',
      '(62) 99657-5310',
      5
    )
  ]
}

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.itens = [...state.itens.filter((c) => c.id !== action.payload)]
    },
    edit: (state, action: PayloadAction<Contact>) => {
      const contactIndex = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (contactIndex >= 0) {
        state.itens[contactIndex] = action.payload
      }
    },
    register: (state, action: PayloadAction<Omit<Contact, 'id'>>) => {
      const contactExists = state.itens.find(
        (c) => c.name.toLowerCase() === action.payload.name.toLowerCase()
      )

      if (contactExists) {
        alert('Este contato já existe.')
      } else {
        const lastContact = state.itens[state.itens.length - 1]

        const newContact = {
          ...action.payload,
          id: lastContact ? lastContact.id + 1 : 1
        }
        state.itens.push(newContact)
      }
    }
  }
})

export const { remove, edit, register } = contactSlice.actions
export default contactSlice.reducer
