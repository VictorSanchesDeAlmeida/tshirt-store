import React, { useState } from 'react'

function Carrinho({ car, addToCarrinho, removeToCarrinho, toggleCarrinho, activeCar}) {

    const [quantidade, setQuantidade] = useState(1);

    return (
        <article className={`${activeCar == true ? 'car-true' : 'car-false'} p-12 fixed top-0 bg-gray-900 h-screen w-1/4 right-0 z-50`}>
            <button onClick={toggleCarrinho} className='text-2xl font-bold text-gray-200'>X</button>
            <h2 className='text-4xl font-bold text-gray-200 text-center'>Carrinho</h2>
            <div className="carrinho">
                {car.map((item, index) => (
                    <div key={index} className='flex justify-around gap-[20px] my-[30px]'>
                        <img className='size-24 rounded-xl' src={`../src/img/${item.img}`} alt={item.name} />
                        <div className='flex flex-col justify-around'>
                            <p className='text-xl text-gray-200'>{item.name}</p>
                            <p className='text-xl text-gray-200'>{item.price}</p>
                        </div>
                        <div className='flex flex-col items-center justify-around'>
                            <button onClick={() => addToCarrinho(item)} className='text-gray-100 text-xl'>+</button>
                            <p className='text-gray-100 text-xl'>{item.quantidade}</p>
                            <button onClick={() => removeToCarrinho(item)} className='text-gray-100 text-xl'>-</button>
                        </div>
                    </div>
                ))}
            </div>
        </article>
    )
}

export default Carrinho