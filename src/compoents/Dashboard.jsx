import React, { useState } from 'react'
import PokemonList from './PokemonList'

const Dashboard = () => {
    // 빈 나만의 포켓몬 리스트 
    // 선택된 포켓몬을 보여주는 컴포넌트 
    const [myPokemonList, setMyPokemonList] = useState([]);

    return (
        <div className="container">
            <h2> 나만의 포켓몬 </h2>
            <div>

            </div>
            <PokemonList />
        </div>
    )
}

export default Dashboard