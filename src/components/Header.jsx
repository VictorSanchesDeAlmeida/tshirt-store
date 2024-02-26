import React from 'react'

function Header({toggleCarrinho}) {
  return (
    <>
        <header className='w-3/4 h-12 mx-auto mb-[100px] mt-12 px-4 bg-gray-950 text-gray-300 rounded-full flex justify-between items-center'>
          <h1 className='text-xl font-bold'>T-Shirt Store</h1>
          <nav>
            <ul className='flex gap-[20px]'>
              <li><a href='#' className='text-xl'>Home</a></li>
              <li><button onClick={toggleCarrinho} className='text-xl'>Carrinho</button></li>
            </ul>
          </nav>
        </header>
    </>
  )
}

export default Header