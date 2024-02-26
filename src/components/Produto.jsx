import React from 'react'

function Produto({ produto, addToCarrinho }) {
  return (
    <>
    <div className="produto bg-slate-400 p-4 rounded-lg">
        <div className='img'>
            <img className='rounded-t-lg' src={`../src/img/${produto.img}`} alt={produto.name}/>
        </div>
        <div className='info'>
            <p className='text-2xl font-bold text-gray-900'>{produto.name}</p>
            <p className='text-lg font-medium text-gray-600 leading-10'>{produto.description}</p>
        </div>
        <div className='buy flex justify-between items-center'>
            <p className='text-xl font-semibold text-gray-700'>R$ {produto.price}</p>
            <button onClick={() => addToCarrinho(produto)} className='p-2 bg-gray-950 text-gray-100 rounded-lg'>Add Carrinho</button>
        </div>
    </div>
    </>
  )
}

export default Produto