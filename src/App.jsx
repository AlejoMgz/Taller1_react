import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './features/landing/components/Header'
import { Footer } from './features/landing/components/Footer'
import { Main } from './features/landing/components/Main'

const Login = lazy(() => import('./features/auth/components/Login').then(m => ({ default: m.Login })))
const Resgister = lazy(() => import('./features/auth/components/resgister').then(m => ({ default: m.Resgister })))
const Forgot = lazy(() => import('./features/auth/components/Forgot').then(m => ({ default: m.Forgot })))
const Rickandmorty = lazy(() => import('./features/auth/components/Rickandmorty').then(m => ({ default: m.Rickandmorty })))
const Profile = lazy(() => import('./features/auth/components/Props'))

function App() {
  return (
    <BrowserRouter basename="/Taller1_react">
      <Header />
      <Suspense fallback={<div className="text-center text-white my-5">Cargando sección...</div>}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Resgister />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/rickandmorty" element={<Rickandmorty />} />
          <Route path="/Props" element={<Profile />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  )
}

export default App