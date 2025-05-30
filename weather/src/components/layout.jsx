import React from 'react'
import Header from './header'
import { Github } from 'lucide-react'

function Layout({children}) {
  return (
    <div className='bg-gradient-to-br from-background to-muted min-h-screen flex flex-col'>
        <Header />
        <main className='flex-1 container mx-auto px-4 py-8'>
            {children}
        </main>
        <footer className='border-t border-border bg-background/80 backdrop-blur-sm'>
            <div className='container mx-auto px-4 py-6'>
                <div className='flex flex-col items-center justify-center space-y-4'>
                    {/* Main footer content */}
                    <div className='flex items-center space-x-2'>
                        <span className='text-foreground/80'>Made with</span>
                        <span className='text-red-500 dark:text-red-400'>♥</span>
                        <span className='text-foreground/80'>by</span>
                        <span className='font-bold text-foreground'>Rawaha Ahmed</span>
                    </div>
                    
                    {/* GitHub link */}
                    <a 
                        href="https://github.com/Rawahaahmed23" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className='flex items-center space-x-3 bg-muted hover:bg-foreground text-foreground hover:text-background px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md border border-border hover:border-transparent'
                    >
                        <Github className='w-5 h-5' />
                        <span className='font-semibold'>GitHub</span>
                    </a>
                </div>
            </div>
        </footer>
     </div>
  )
}

export default Layout