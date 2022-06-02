import React, { useState, useEffect } from 'react';
import { BarChart, SearchRounded, ShoppingCartRounded } from '@mui/icons-material';
import "./Styles/Header.css";
import "./Styles/Main.css";
import "./Styles/DishContainer.css";
import "./Styles/RightMenu.css";
import "./Styles/CartItem.css";
import { MenuItems, Items } from "../../Data/Data";
import logo from "../../Images/logo.png";
import ProfilePic from "../../Images/dragon-ball-super-new-super-hero-movie-goku-toei-animation-1276890.jpg";
import BannerContent from './BannerContent.';
import deliveryMan2 from '../../Images/delivery-boy2.png';
import DishMenu from './DishMenu';
import RowMenuCard from './RowMenuCard';
import SubMenuItems from './SubMenuItems';
import DebitCard from './DebitCard';
import CartItem from './CartItem';
import { useStateValue } from './StateProvider';



const MainPage = () => {

    const [isMainData, setMainData] = useState(
        Items.filter((element) => element.itemId === "buger01")
    );

    // Set main dish items on filter
    const setData = (itemId) => {
        setMainData(Items.filter((element) => element.itemId === itemId))
    };

    const [{ cart }, dispatch] = useStateValue();

    useEffect(() => {
        const rMenuContainer = document.querySelector(".row-container").querySelectorAll(".rowMenuCard");
        function setMenuCardActive() {
            rMenuContainer.forEach((n) => n.classList.remove("active"));
            this.classList.add("active");
        };
        rMenuContainer.forEach(n => n.addEventListener("click", setMenuCardActive));
    }, [isMainData, cart]);


    useEffect(() => {
        const toggleMenu = document.querySelector(".toggleMenu");
        toggleMenu.addEventListener("click", () => {
            document.querySelector(".rightMenu").classList.toggle("active");
        })
    }, [])


    return (
        <>
            <header className='header y-axis-center'>

                <img src={logo} alt="logo" className='logo' />

                <div className="search-box y-axis-center">
                    <SearchRounded className='search-icon' />
                    <input type="text" placeholder='Search Here' className='search-input' />
                </div>

                <div className="shopping-cart x-y-axis-center">
                    <ShoppingCartRounded className='cart' />
                    <p className="no-of-items y-axis-center">
                        <span>2</span>
                    </p>
                </div>

                <div className="profile-container y-axis-center">
                    <div className="profile-img x-y-axis-center">
                        <img src={ProfilePic} alt="profile" className='profile-pic' />
                    </div>
                    <h2 className="username">Jack</h2>
                </div>

                <div className="toggleMenu">
                    <BarChart className='toggle-icon' />
                </div>
            </header>


            <main className="main">
                <div className="banner y-axis-center">
                    <BannerContent name={"Jack"} discount={"20"} more={"#"} />
                    <img src={deliveryMan2} alt="DeliveryMan" className='deliveryPic' />
                </div>

                <div className="dish-container">
                    <div className="menu-card">
                        <DishMenu name={"Menu Category"} />
                    </div>

                    <div className="row-container y-axis-center">
                        {
                            MenuItems && MenuItems.map(data => (
                                <div key={data.id} onClick={() => setData(data.itemId)}>
                                    <RowMenuCard imgSrc={data.imgSrc} name={data.name} isActive={data.id === 1 ? true : false} />
                                </div>
                            ))
                        }
                    </div>

                    <div className="dish-item-container y-axis-center">
                        {
                            isMainData && isMainData.map(data => (
                                <SubMenuItems
                                    key={data.id}
                                    itemId={data.id}
                                    imgSrc={data.imgSrc}
                                    name={data.name}
                                    rating={data.ratings}
                                    price={data.price}
                                />
                            ))
                        }
                    </div>
                </div>

                <div className="rightMenu">
                    <div className="debitcard-container">
                        <div className="debit-card">
                            <DebitCard />
                        </div>
                    </div>

                    {
                        !cart ? (
                            <div className="add-some-item">
                                <img src=""
                                    alt=""
                                    className='empty-cart'
                                />
                            </div>
                        ) : (
                            <div className="cart-checkout-container">
                                <DishMenu name={"Cart Items"} />
                                <div className="cart-container">
                                    <div className="cart-items">
                                        {
                                            cart && cart.map((data) => (
                                                <CartItem
                                                    key={data.id}
                                                    itemId={data.id}
                                                    name={data.name}
                                                    imgSrc={data.imgSrc}
                                                    // qtty={1}
                                                    price={data.price}
                                                />
                                            ))
                                        }
                                    </div>
                                </div>

                                <div className="total-section">
                                    <h3>Total</h3>
                                    <p>
                                        <span>$45</span>
                                    </p>
                                </div>
                                <button className='checkout'>Checkout</button>
                            </div>
                        )
                    }

                </div>
            </main>
        </>
    )
}

export default MainPage;









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