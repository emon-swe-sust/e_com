import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Products from './products/Products'
import Checkout from './checkout/Checkout'
import PageNotFound from './pageNotFound/PageNotFound'
import ConfirmPurchase from './checkout/ConfirmPurchase'
import { Provider } from 'react-redux'
import { persistor, store } from '../redux/store/store'
import { PersistGate } from 'redux-persist/integration/react'

function Home () {
  return (
    <Router>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Switch>
            <Route exact path='/' component={Products} />
            <Route exact path='/checkout/' component={Checkout} />
            <Route exact path='/confirm/' component={ConfirmPurchase} />
            <Route path='*' component={PageNotFound} />
          </Switch>
        </PersistGate>
      </Provider>
    </Router>
  )
}

export default Home
