import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import ContactUs from './pages/ContactUs'
import Blog from './pages/Blog'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import BlogDetail from './pages/BlogDetail'
import ScrollToTop from './hooks/ScrollToTop'
import ProductDetail from './pages/ProductDetail'
import SearchPage from './pages/SearchPage'
import CartResultMobile from './components/Layouts/Cart/CartResultMobile'
import ProfileSetting from './components/Layouts/ProfileSetting/ProfileSetting'
import WishlistMobile from './components/Layouts/Wishlist/WishlistMobile'

function App() {

  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/product' element={<Product />}></Route>
          <Route path='/product/:id' element={<ProductDetail />}></Route>
          <Route path='/contact' element={<ContactUs />}></Route>
          <Route path='/blogs' element={<Blog />}></Route>
          <Route path='/blog/:slug' element={<BlogDetail />}></Route>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/register' element={<RegisterPage />}></Route>
          <Route path='/search' element={<SearchPage />}></Route>
          <Route path='/cart' element={<CartResultMobile />}></Route>
          <Route path='/profile' element={<ProfileSetting />}></Route>
          <Route path='/wishlist' element={<WishlistMobile />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
