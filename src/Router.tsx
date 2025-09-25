import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Error from './pages/Error';

const Main = lazy(() => import('./pages/Main'))
const Sight = lazy(() => import('./pages/Sight'))
const Sights = lazy(() => import('./pages/Sights'))
const Abouts= lazy(() => import('./pages/Abouts'))

const Router = () => {

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Suspense fallback={<p>Загрузка</p>}><Main /></Suspense>} />
        <Route path='sights' element={<Suspense fallback={<p>Загрузка</p>}><Sights /></Suspense>} />
        <Route path='sight/:id' element={<Suspense fallback={<p>Загрузка</p>}><Sight /></Suspense>} />
        <Route path='about' element={<Suspense fallback={<p>Загрузка</p>}><Abouts /></Suspense>} />
        <Route path='*' element={<Error/>} />
      </Route>
    </Routes>
  )
}

export default Router
