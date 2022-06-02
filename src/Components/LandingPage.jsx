import React from 'react'
import BottomMenu from './SubComponents/BottomMenu';
import MainPage from './SubComponents/MainPage';
import "./SubComponents/Styles/Common.css";

const LandingPage = () => {
    return (
        <>
            <MainPage />
            <BottomMenu />
        </>
    )
}

export default LandingPage;