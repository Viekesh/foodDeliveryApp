import React, { useEffect } from 'react';
import { AccountBalanceWalletRounded, Chat, Favorite, HomeRounded, Settings, SummarizeRounded } from '@mui/icons-material';
import MenuContainer from './MenuContainer';
import './Styles/BottomMenu.css';



const BottomMenu = () => {

    useEffect(() => {
        const menuLi = document.querySelectorAll("#menu li");

        function setMenuActive() {
            menuLi.forEach((n) => n.classList.remove("active"));
            this.classList.add("active");
        }

        menuLi.forEach(n => n.addEventListener("click", setMenuActive));
    }, []);

    return (
        <div className='bottom-menu x-y-axis-center'>
            <ul id="menu">
                <MenuContainer link={'/'} icon={<HomeRounded />} isHome />
                <MenuContainer link={'/'} icon={<Chat />} />
                <MenuContainer link={'/'} icon={<Favorite />} />
                <MenuContainer link={'/'} icon={<AccountBalanceWalletRounded />} />
                <MenuContainer link={'/'} icon={<SummarizeRounded />} />
                <MenuContainer link={'/'} icon={<Settings />} />
                <div className="indicator"></div>
            </ul>
        </div>
    )
}

export default BottomMenu;



// Here we can use prop, a prop is nothing but a property of a component
// Here we can use icon as a "HomeRounded"
// Then if it is home we are going to add an active class, thats why we are
// adding it "isHome" (an active class) to understand why we creating this prop over here


// Here we can use useEffect to check those element and everything...
// Whenever we toggle that class then we are going to use this usEffect hook
// This useEffect hook will helps you to write the custom javascript elements that it will be
// rendered once whenever your page is rendered and it takes two different parameter one is the
// function and another one is dependencies so that you can pass any state or dependencies what
// you can need you can over there, so whenever that state is updated this useEffect hook can be
// re-rendered.
// So currently we are not going to pass any state or dependencies inside it all we have to do
// is we are going to get complete that li tag which is inside the "menu" at the
// time we created this id by using that we are going to get that element so inside the #menu
// we get that all "li" tag
// Inside the forEach element we are going to add listener event (we are going to add click).
// whenever we are click that i need to call a function so we passing a reference for the function
// as "setMenuActive" this is just a reference