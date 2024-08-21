import React from 'react'
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    console.log("LandingPage >>");
    const navgiate = useNavigate();

    return (
        <div>
            <img alt="react logo" className="app-logo" />
            <button onClick={() => navgiate('/dex')}>포켓몬 도감 시작하기</button>
        </div>
    )
}

export default LandingPage