import { CircularProgress, createTheme, ThemeProvider } from '@mui/material'
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { MainLayout } from './layouts/MainLayout'
import { CartPage } from './pages/CartPage'
import { ProductPage } from './pages/ProductPage'
import { CartProvider } from './services/CardContext'

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
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
        <CartProvider>
        <Suspense fallback={<CircularProgress />} >
          <MainLayout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductListPage />} />
              <Route path="/products/:id" element={<ProductPage />} />
              <Route path="/cart" element={<CartPage />} />

              <Route path="*" element={<h1>404 - Not Found</h1>} />
            </Routes>
          </MainLayout>
        </Suspense>
        </CartProvider>
      </ThemeProvider>
    </Router>
  )
}

export default App