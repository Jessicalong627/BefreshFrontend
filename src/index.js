import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import React from 'react';
import ReactDOM from 'react-dom';

//CSS Files
import './css/app.css';
import './css/products.css';
import './css/iproduct.css';
import './css/navbar.css';
import './css/login.css';
import './css/loggedhome.css';
import './css/checkout.css';
import './css/orderproducts.css';
import './css/mobile.css';
import './css/tablet.css';
import './css/footer.css';
import './css/started.css';
import './css/confirmation.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Components
import Login from './components/login'
import Loggedin from './components/loggedin'
import ProductContainer from './components/productcontainer'
import Checkout from './components/checkout'
import Iproduct from './components/iproduct'
import Confirmation from './components/confirmation'
import OrderProductContainer from './components/orderproductcontainer'
import Started from './components/started'
import App from './App';
import reducer from './reducers/name.js'
import thunk from 'redux-thunk';

//Redux Store
const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <React.Fragment>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/loggedin" component={Loggedin} />
        <Route path="/products" component={ProductContainer} />
        <Route path="/product" component={Iproduct} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/started" component={Started} />
        <Route path="/order" component={OrderProductContainer} />
        <Route path="/confirm" component={Confirmation} />
      </React.Fragment>
    </Router>
  </Provider>),
  document.getElementById('root')
);
