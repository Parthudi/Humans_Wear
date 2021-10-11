import React, { Component, Suspense } from 'react';
import {Route,Switch} from 'react-router-dom'
import {auth,CreateUserProfileDocument } from './firebase.utility/firebase.utility'
import {CircularProgress,Backdrop } from '@material-ui/core';
import Layout from "./components/Layout";
import './App.css'

const HomePage = React.lazy(() => import("./pages/Homepage"))
const SignInAndSignUp = React.lazy(() => import('./pages/signup-signin/signup-signin'))
const  ShopPage = React.lazy(() => import('./pages/Shop/shop'))
const HatsPage = React.lazy(() => import("./pages/Hats"))
const SneakersPage = React.lazy(() => import("./pages/Sneakers"))
const JacketsPage = React.lazy(() => import("./pages/Jackets"))
const WomensPage = React.lazy(() => import("./pages/Womens"))
const MensPage = React.lazy(() => import("./pages/Mens"))
const ShowSingleImage = React.lazy(() => import("./pages/showSingleImage/singleImage"))
const Bag = React.lazy(() => import("./pages/Bag"))
const Address = React.lazy(() => import("./pages/Address"))
const WishList = React.lazy(() => import("./pages/WishList"))
const Payment = React.lazy(() => import("./pages/Payment"))

class App extends Component {

  state = {
    CurrentUser: null 
    }

    unSubscribeFromAuth = null

    componentDidMount() {
      this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
        if(userAuth) {
          const userRef = await CreateUserProfileDocument(userAuth)

          userRef.onSnapshot(snapShot => {
            this.setState({

              CurrentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            })
            console.log(this.state)
         })
         
      }
    else {
      this.setState({ CurrentUser: userAuth })
    }  
     
      })
    }

    componentWillUnmount() {
      this.unSubscribeFromAuth()
    }
  render() {

    const loader =  () => {
      return(
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 100000000 }}
          open={true}
          style={{zIndex:"1"}}>
            <CircularProgress  color="secondary" />
       </Backdrop>
      )
    }

    const routes = () => {
        return(
          <Switch>
              <Route path='/' exact render={() => (
                <Suspense fallback= {loader()}>
                  <HomePage />
                </Suspense>
              )} /> 

              <Route path='/shop' exact  render={() => (
                <Suspense fallback= {loader()}>
                    <ShopPage /> 
                </Suspense>
                )} />

              <Route path='/login' exact render={() => (
                <Suspense fallback= {loader()}>
                    <SignInAndSignUp /> 
                </Suspense>
              )} />    
              
        
              <Route path='/shop/hats' render={() => (
                <Suspense fallback= {loader()}>
                  <HatsPage /> 
                </Suspense>
              )} />

              <Route path='/shop/sneakers' render={() => (
                  <Suspense fallback= {loader()}>
                    <SneakersPage /> 
                  </Suspense>
                )} />

              <Route path='/shop/jackets' render={() => (
                <Suspense fallback= {loader()}>
                  <JacketsPage /> 
                </Suspense>
                )}/>

              <Route path='/shop/womens' render={() => (
                <Suspense fallback= {loader()}>
                  <WomensPage /> 
                </Suspense>
                )}/>
              <Route path='/shop/mens' render={() => (
                <Suspense fallback= {loader()}>
                  <MensPage /> 
                </Suspense>
                )}/>

              <Route path='/shop/product/:name/:id' exact render={() => (
                <Suspense fallback= {loader()}>
                  <ShowSingleImage /> 
                </Suspense>
                )}/>
                
                <Route path='/checkout/cart' exact render={() => (
                <Suspense fallback= {loader()}>
                  <Bag /> 
                </Suspense>
                )}/>

                <Route path='/checkout/address' exact render={() => (
                <Suspense fallback= {loader()}>
                  <Address /> 
                </Suspense>
                )}/>

                <Route path='/whistlist' exact render={() => (
                <Suspense fallback= {loader()}>
                  <WishList /> 
                </Suspense>
                )}/>

                <Route path='/checkout/payment' exact render={() => (
                <Suspense fallback= {loader()}>
                  <Payment /> 
                </Suspense>
                )}/>

              <Route path='*'  render={() => {
                return <h1> 404 Error Page Not Found </h1>
                  }} />
          </Switch>
        )
    }

    return (
      <Layout>
        {routes()}
    </Layout>
    );
  }
}

export default App;
