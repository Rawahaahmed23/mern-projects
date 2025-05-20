import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom' // ✅ Correct import
import Layout from './components/layout'
import { ThemeProvider } from './context/theme-provider';
import WeatherDashboard from './pages/weather-dashboard';
import { Button } from './components/ui/button'
import CityPage from './pages/city';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


const queryClient =  new QueryClient()
function App() {
  return (

    
    <QueryClientProvider client={queryClient}>   <BrowserRouter>
    
    <ThemeProvider defaultTheme='light'> 
      <Layout>
        <Routes>
          <Route path= "/"element= {<WeatherDashboard />}></Route>
          <Route path= "/city/:cityname"element= {<CityPage />}></Route>
        </Routes> 
      </Layout>
      </ThemeProvider>
    </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
 
  )
}

export default App
