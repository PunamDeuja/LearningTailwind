
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Pages/Components/Navbar'
import Card from './Pages/Components/Card'
import Footer from './Pages/Components/Footer'
import Banner from './Pages/Banner'
import Login from './Pages/Login'
import Singleblog from './Pages/Singleblog'
import Signup from './Pages/Signup'
import Profile from './Pages/Profile'
import ForgetPassword from './Pages/ForgetPassword'
import OTP from './Pages/OTP'
import ResetPassword from './Pages/ResetPassword'
import BlogForm from './Pages/BlogForm'
import Home from './Pages/Home'
import EditBlogForm from './Pages/EditBlogForm'
import { Provider } from 'react-redux'
import store from './store/store'

function App() {

  return (
    <>
    <Provider store={store}>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/banner' element={<Banner />} />
          <Route path='/card' element={<Card />} />
          <Route path='/footer' element={<Footer />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/blog/:id' element={<Singleblog/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/forgetpassword' element={<ForgetPassword/>} />
          <Route path='/otp' element={<OTP/>} />
          <Route path='/resetpassword' element={<ResetPassword/>} />
          <Route path='/blogform' element={<BlogForm/>} />
          <Route path='/editform/:id' element={<EditBlogForm/>} />


        </Routes>
      </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
