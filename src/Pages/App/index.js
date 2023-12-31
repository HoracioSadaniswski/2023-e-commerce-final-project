import React from 'react';
import { useRoutes, BrowserRouter } from 'react-router-dom';
import { ShoppingCartProvider } from '../../Context';
import { Home } from '../Home';
import { AboutUs } from '../AboutUs';
import { Contact } from '../Contact';
import { CreateAccount } from '../CreateAccount';
import { MyOrder } from '../MyOrder';
import { MyOrders } from '../MyOrders';
import { NotFound } from '../NotFound';
import { SignIn } from '../SignIn';
import { Navbar } from '../../Components/Navbar';
import { CheckoutMenu } from '../../Components/CheckoutMenu';
import { MobileMenu } from '../../Components/MobileMenu';
import { Footer } from '../../Components/Footer';


const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/informatica', element: <Home /> },
    { path: '/audio-video', element: <Home /> },
    { path: '/electronica', element: <Home /> },
    { path: '/redes-conectividad', element: <Home /> },
    { path: '/iluminacion', element: <Home /> },
    { path: '/about-us', element: <AboutUs /> },
    { path: '/contact', element: <Contact /> },
    { path: '/create-account', element: <CreateAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/*', element: <NotFound /> },
    { path: '/sign-in', element: <SignIn /> },
  ])
  return routes
}

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <MobileMenu/>
        <CheckoutMenu />
        <Footer/>
      </BrowserRouter>
    </ShoppingCartProvider>
    
  )
}

export default App;
