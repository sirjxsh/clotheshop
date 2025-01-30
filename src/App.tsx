import { createTheme, ThemeProvider } from '@mui/material'
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { MainLayout } from './layouts/MainLayout'

const theme = createTheme({
  palette: {
    primary: {
      main: '#CCD5AE',
      dark: '#8e9579',
      light: '#d6ddbe',
      contrastText: '#000'
    },
    secondary: {
      main: '#D4A373',
      dark: '#D4A373',
      light: '#dcb58f',
      contrastText: '#000'
    }
  }
})

const HomePage = lazy(() => import('./pages/HomePage').then(module => ({ default: module.HomePage })))
const ProductListPage = lazy(() => import('./pages/ProductListPage').then(module => ({ default: module.ProductListPage })))

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<div>Loading...</div>} >
          <MainLayout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductListPage />} />
            </Routes>
          </MainLayout>
        </Suspense>
      </ThemeProvider>
    </Router>
  )
}

export default App