import React from 'react'
import MOCK_DATA from '../MOCK_DATA.js'
import '../styles/Component.css'
import PokemonCard from './PokemonCard.jsx'
const PokemonList = () => {
    // 포켓몬 리스트를 보여주는 컴포넌트ㄴ
    return (
        <div className='content-wrapper'>
            {
                // ㅜ먼가 졸린데?? 
                MOCK_DATA.map((pokemon) => {
                    return (
                        <PokemonCard pokemon={pokemon} />
                    )
                })
            }
        </div>
    )
}

export default PokemonList