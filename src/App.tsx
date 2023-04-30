import { Provider } from 'react-redux'
import ContactList from './containers/ConatctList'
import Header from './containers/Header'
import GlobalStyle from './styles'
import store from './store'

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Header />
      <ContactList />
    </Provider>
  )
}

export default App
