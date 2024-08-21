import React from 'react'
import PokemonList from '../compoents/PokemonList'

const PokemonCard = (item) => {
    // 개별 포켓몬 카드 
    const cardItem = item.pokemon;
    return (
        <div>
            <div className="card" key={cardItem.id}>
                <img src={cardItem.img_url} alt={cardItem.korean_name} />
                <div>{cardItem.korean_name}</div>
                <div>No.{(cardItem.id).toString().padStart(3, '0')}</div>
                <button onClick={() => { console.log("버튼 클릭됨") }}>추가</button>
            </div>
        </div>
    )
}

export default PokemonCard;