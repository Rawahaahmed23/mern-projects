import { useTheme } from '@/context/theme-provider'
import { Moon, Sun } from 'lucide-react'
import { Link } from 'react-router-dom'
import CitySearch from './City-search'

function Header() {
  const { theme, setTheme } = useTheme() 
  const isDark = theme === 'dark' 
   
  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark'
    setTheme(newTheme)
  }

  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop:blur py-2 supports-[backdrop-filter]:bg-background/60'>
      <div className='container mx-auto flex h-16 items-center justify-between px-4'>
        <Link to={'/'}>
          <img 
            src={"/log.png"} 
            alt="Logo"  
            className='h-22'
          />
        </Link>
        <div className='flex gap-4'>
        <CitySearch /> 


        <div onClick={toggleTheme} className={`flex items-center cursor-pointer transition-transform duration-500 ${isDark ? "rotate-180" : "rotate-0"}`}>
          {isDark ? <Sun  className='h-8 w-8 text-yellow-500 rotate-0 transition-all'/> : <Moon className='h-8  w-8 text-blue-500 rotate-0 transition-all'/>}
        </div>
      </div>
        </div>
    </header>
  )
}

export default Header