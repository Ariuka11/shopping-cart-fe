import React from 'react'
import { Switch } from 'react-router-dom'
import './less/index.less'
import WrappedRegistrationForm from './components/register'
import LoginForm from './components/login'
import ResetPasswordForm from './components/ResetPassword/resetPassword'
import SetNewPasswordForm from './components/ResetPassword/setNewPassword'
import CreateStoreForm from './components/createStore/firstView'
import AddLogoForm from './components/createStore/addLogo'
import CreateItem from './components/Products/CreateItem'
import UpdateItem from './components/Products/updateItem'
import PrivateRoute from './components/Auth/PrivateRoute'
import PublicRoute from './components/Auth/PublicRoute'
import Main from './components/inventory'
import UpdateProfile from './components/EditProfile'
import Home from './components/DashboardHome'
import Store from './components/store'
import StripeMain from './components/Stripe'
import Review from './components/review'
import OrderSuccessPage from './components/Stripe/OrderSuccessPage'
import Single from './components/singleProduct/index'
import Support from './components/support'
import SaveCartMain from './components/saveCart'
import Account from './components/SellerAccount/SellerAccount'
import Confirmation from './components/orderConfirmation'
import NoMatch from './components/noMatch'

function App () {
  window.addEventListener('load', () => {
    function handleNetworkChange(event) {
      if (navigator.onLine) {
        document.getElementById('offline-notification').style.display = 'none'
      } else {
        document.getElementById('offline-notification').style.display = 'flex'
      }
    }
    window.addEventListener('online', handleNetworkChange);
    window.addEventListener('offline', handleNetworkChange);
  });
  return (
    <>
      <Switch>
        <PublicRoute path='/register' component={WrappedRegistrationForm} />
        <PublicRoute exact path='/' component={LoginForm} />
        <PrivateRoute path='/inventory' component={Main} />
        <PublicRoute path='/resetpassword' component={ResetPasswordForm} />
        <PublicRoute path='/setnewpassword' component={SetNewPasswordForm} />
        <PublicRoute path='/store/:id' component={Store} />
        <PublicRoute path='/cart/:id' component={localStorage.getItem('token') ? Confirmation : StripeMain} />
        <PublicRoute path='/review' component={Review} />
        <PublicRoute path='/savecart' component={SaveCartMain} />
        <PrivateRoute path='/createstore' component={CreateStoreForm} />
        <PrivateRoute path='/addlogo' component={AddLogoForm} />
        <PrivateRoute path='/profile' component={UpdateProfile} />
        <PrivateRoute path='/createitem' component={CreateItem} />
        <PrivateRoute path='/dashboard' component={Home} />
        <PrivateRoute path='/updateitem/:id' component={UpdateItem} />
        <PublicRoute path='/product/:id' component={Single} />
        <PublicRoute path='/success' component={OrderSuccessPage} />
        <PublicRoute exact path='/support' component={Support} />
        <PrivateRoute path='/account' component={Account} />
      </Switch>
      <div id='offline-notification' style={{
        position: 'fixed',
        bottom: '0px',
        width: '100vw',
        height: '4vh',
        textAlign: 'center',
        backgroundColor: '#ff6663',
        justifyContent: 'space-around',
        alignItems: 'center',
        color: 'white',
        fontSize: 'medium',
        display: 'none'
      }}>
        Offline Mode
      </div>
    </>
  )
}

export default App
