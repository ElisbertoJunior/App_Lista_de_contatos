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
      'Juliana Pereira',
      'juliana.pereira@gmail.com',
      '(62) 95553-8328',
      3
    ),
    new Contact(
      'Elisaudo Silva Prado',
      'elisaudo.prado@gmail.com',
      '(62) 93233-3518',
      1
    ),
    new Contact(
      'Pedro Martins Motta',
      'pedro.motta@gmail.com',
      '(62) 99657-5310',
      1
    )
  ]
}

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<Contact>) => {
      state.itens = [...state.itens.filter((c) => c.id !== action.payload.id)]
    },
    edit: (state, action: PayloadAction<Contact>) => {
      const contactIndex = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (contactIndex >= 0) {
        state.itens[contactIndex] = action.payload
      }
    }
  }
})

export const { remove, edit } = contactSlice.actions
export default contactSlice.reducer
