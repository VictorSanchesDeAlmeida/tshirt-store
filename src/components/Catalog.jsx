import React from 'react'
import Produto from './Produto'

function Catalog({addToCarrinho}) {
    
    const catalogo = [
        {
            id: 1,
            img: 'Camisa PSG.png',
            name: 'Uniforme PSG',
            description: 'Uniforme oficial PSG',
            price: '170,00'
        },
        {
            id: 2,
            img: 'Camisa Haumea.png',
            name: 'Uniforme Haumea',
            description: 'Uniforme Personalizado',
            price: '100,00'
        },
        {
            id: 3,
            img: 'Camisa Inglaterra.png',
            name: 'Uniforme Inglaterra',
            description: 'Unifor seleção inglesa',
            price: '160,00'
        },
        {
            id: 4,
            img: 'Camisa Tiger.png',
            name: 'Uniforme Tiger',
            description: 'Uniforme personalizado tiger',
            price: '120,00'
        },
        {
            id: 5,
            img: 'Camisa TioPato.png',
            name: 'Uniforme tio patinhas',
            description: 'Uniforme personalizado tio patinhas',
            price: '140,00'
        }
    ]

    return (
        <>
            <div className='catalogo w-3/4 gap-[40px] mx-auto grid grid-cols-4'>
                {catalogo.map((produto) => (
                    <Produto key={produto.id} produto={produto}  addToCarrinho={addToCarrinho}/>
                ))}
            </div>
        </>
    )
}

export default Catalog