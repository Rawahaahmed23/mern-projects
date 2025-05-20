import React from 'react'
import Header from './header'

function layout({children}) {
  return (
    <div className='bg-gradient-to-br from-background to-muted'>
        <Header />
        <main className='min-h-screen container mx-auto px-4 py-8'>
            {children}
        </main>
        <footer className='border-t-blackdrop-blur'>
            <div className='mx-auto px-4x container text-center text-gray-600'>
                <p>made with Rawaha ahmed</p>
            </div>
        </footer>

    </div>
  )
}

export default layout