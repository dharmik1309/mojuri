import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Offcanvas from 'react-bootstrap/Offcanvas';



const Headbottom = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div class="nav-bottom">
            <div class="container1">
                <div class="inner">
                    <div class="left">
                        <div class="logo">
                            <a href="#">
                                <img src="assests/img/LOGO.png" alt="" />
                            </a>
                        </div>
                    </div>
                    <div class="midd">
                        <ul class="menu-list">
                            <li><Link to="/">
                                Home
                            </Link></li>
                            <li class="main-li" id="shop"><a href="#">shop <i class="fa-solid fa-chevron-down"></i></a>
                                <div class="inner">
                                    <div class="top">
                                        <ul class="inner-menu">
                                            <li class="title"><a href="#">pasta</a></li>
                                            <li><a href="#">Fedelini</a></li>
                                            <li><a href="#">Lasagna</a></li>
                                            <li><a href="#">Perciatelli</a></li>
                                            <li><a href="#">Rustiche</a></li>
                                            <li><a href="#">Mandala</a></li>
                                            <li><a href="#">Boccoli</a></li>
                                            <li><a href="#">Chifferi</a></li>
                                        </ul>
                                        <ul class="inner-menu">
                                            <li class="title"><a href="#">french fries</a></li>
                                            <li><a href="#">Sachets</a></li>
                                            <li><a href="#">Ziti</a></li>
                                            <li><a href="#">Rotelle</a></li>
                                            <li><a href="#">Fregula</a></li>
                                            <li><a href="#">Puntine</a></li>
                                            <li><a href="#">Gnocchi</a></li>
                                            <li><a href="#">Stortini</a></li>
                                        </ul>
                                        <ul class="inner-menu">
                                            <li class="title"><a href="#">Drink</a></li>
                                            <li><a href="#">sosyo</a></li>
                                            <li><a href="#">coca-cola</a></li>
                                            <li><a href="#">Cheddar Cheese</a></li>
                                            <li><a href="#">green papper</a></li>
                                            <li><a href="#">Mushrooms</a></li>
                                            <li><a href="#">Spinach</a></li>
                                            <li><a href="#">greek</a></li>
                                        </ul>
                                        <ul class="inner-menu">
                                            <li class="title"><a href="#">salad</a></li>
                                            <li><a href="#">Tossed Salad</a></li>
                                            <li><a href="#">Taco Salad</a></li>
                                            <li><a href="#">Italian Salad</a></li>
                                            <li><a href="#">Pepperoni</a></li>
                                            <li><a href="#">Corn Chips</a></li>
                                            <li><a href="#">Mozzarella </a></li>
                                            <li><a href="#">Tomato</a></li>
                                            <li><a href="#">Piombi</a></li>
                                        </ul>
                                    </div>
                                    <div class="bottom">
                                        <div class="image">
                                            <img src="assets/image/inner1.jpg" alt="inner-banner" />
                                        </div>
                                        <div class="image">
                                            <img src="assets/image/inner2.jpg" alt="inner-banner" />
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="main-li" id="categories"><a href="#">categories <i class="fa-solid fa-chevron-down"></i></a>
                                <div class="inner" id="categories-inner">
                                    <div class="top">
                                        <ul class="inner-menu">
                                            <li class="title"><a href="#">Special Product</a></li>
                                            <a href="#">
                                                <div className="inner-child">
                                                    <div className="image">
                                                        <img src="assets/image/10.jpg" alt="inner-banner" />
                                                    </div>
                                                    <div className="content">
                                                        <p className="name">Sicilian Pizza</p>

                                                        <span><i class="fa-solid fa-star"></i></span>
                                                        <span><i class="fa-solid fa-star"></i></span>
                                                        <span><i class="fa-solid fa-star"></i></span>
                                                        <span><i class="fa-solid fa-star"></i></span>
                                                        <span><i class="fa-solid fa-star"></i></span>

                                                        <p><span className="price">$123</span> <span className="price"><del>$150</del></span></p>
                                                    </div>
                                                </div>

                                            </a>
                                            <a href="#">
                                                <div className="inner-child">
                                                    <div className="image">
                                                        <img src="assets/image/10.jpg" alt="inner-banner" />
                                                    </div>
                                                    <div className="content">
                                                        <p className="name">Sicilian Pizza</p>

                                                        <span><i class="fa-solid fa-star"></i></span>
                                                        <span><i class="fa-solid fa-star"></i></span>
                                                        <span><i class="fa-solid fa-star"></i></span>
                                                        <span><i class="fa-solid fa-star"></i></span>
                                                        <span><i class="fa-solid fa-star"></i></span>

                                                        <p><span className="price">$123</span> <span className="price"><del>$150</del></span></p>
                                                    </div>
                                                </div>

                                            </a>
                                            <a href="#">
                                                <div className="inner-child">
                                                    <div className="image">
                                                        <img src="assets/image/10.jpg" alt="inner-banner" />
                                                    </div>
                                                    <div className="content">
                                                        <p className="name">Sicilian Pizza</p>

                                                        <span><i class="fa-solid fa-star"></i></span>
                                                        <span><i class="fa-solid fa-star"></i></span>
                                                        <span><i class="fa-solid fa-star"></i></span>
                                                        <span><i class="fa-solid fa-star"></i></span>
                                                        <span><i class="fa-solid fa-star"></i></span>

                                                        <p><span className="price">$123</span> <span className="price"><del>$150</del></span></p>
                                                    </div>
                                                </div>

                                            </a>

                                        </ul>
                                        <ul class="inner-menu">
                                            <li class="title"><a href="#">donuts</a></li>
                                            <li><a href="#">Glazed</a></li>
                                            <li><a href="#">Jelly</a></li>
                                            <li><a href="#">Sour Cream</a></li>
                                            <li><a href="#">Sprinkled</a></li>
                                            <li><a href="#">suop</a></li>
                                            <img src="assets/image/category_banner1.jpg" alt="inner-banner" />

                                        </ul>
                                        <ul class="inner-menu">
                                            <li class="title"><a href="#">salad</a></li>
                                            <li><a href="#">Taco Salad</a></li>
                                            <li><a href="#">Tossed Salad</a></li>
                                            <li><a href="#">Italian Salad</a></li>

                                            <img src="assets/image/category_banner1.jpg" alt="inner-banner" />
                                        </ul>

                                    </div>
                                </div>
                            </li>
                            <li class="main-li" id="product"><a href="#">product <i class="fa-solid fa-chevron-down"></i></a>
                                <div class="inner" id="categories-inner">
                                    <div class="top">
                                        <ul class="inner-menu">
                                            <li class="title"><a href="#">Special Product</a></li>
                                            <a href="#">
                                                <div className="inner-child">
                                                    <div className="image">
                                                        <img src="assets/image/10.jpg" alt="inner-banner" />
                                                    </div>
                                                    <div className="content">
                                                        <p className="name">Sicilian Pizza</p>

                                                        <span><i class="fa-solid fa-star"></i></span>
                                                        <span><i class="fa-solid fa-star"></i></span>
                                                        <span><i class="fa-solid fa-star"></i></span>
                                                        <span><i class="fa-solid fa-star"></i></span>
                                                        <span><i class="fa-solid fa-star"></i></span>

                                                        <p><span className="price">$123</span> <span className="price"><del>$150</del></span></p>
                                                    </div>
                                                </div>

                                            </a>
                                            <a href="#">
                                                <div className="inner-child">
                                                    <div className="image">
                                                        <img src="assets/image/10.jpg" alt="inner-banner" />
                                                    </div>
                                                    <div className="content">
                                                        <p className="name">Sicilian Pizza</p>

                                                        <span><i class="fa-solid fa-star"></i></span>
                                                        <span><i class="fa-solid fa-star"></i></span>
                                                        <span><i class="fa-solid fa-star"></i></span>
                                                        <span><i class="fa-solid fa-star"></i></span>
                                                        <span><i class="fa-solid fa-star"></i></span>

                                                        <p><span className="price">$123</span> <span className="price"><del>$150</del></span></p>
                                                    </div>
                                                </div>

                                            </a>
                                            <a href="#">
                                                <div className="inner-child">
                                                    <div className="image">
                                                        <img src="assets/image/10.jpg" alt="inner-banner" />
                                                    </div>
                                                    <div className="content">
                                                        <p className="name">Sicilian Pizza</p>

                                                        <span><i class="fa-solid fa-star"></i></span>
                                                        <span><i class="fa-solid fa-star"></i></span>
                                                        <span><i class="fa-solid fa-star"></i></span>
                                                        <span><i class="fa-solid fa-star"></i></span>
                                                        <span><i class="fa-solid fa-star"></i></span>

                                                        <p><span className="price">$123</span> <span className="price"><del>$150</del></span></p>
                                                    </div>
                                                </div>

                                            </a>

                                        </ul>
                                        <ul class="inner-menu">
                                            <li class="title"><a href="#">Special Product</a></li>
                                            <a href="#">
                                                <div className="inner-child">
                                                    <div className="image">
                                                        <img src="assets/image/10.jpg" alt="inner-banner" />
                                                    </div>
                                                    <div className="content">
                                                        <p className="name">Sicilian Pizza</p>

                                                        <span><i class="fa-solid fa-star"></i></span>
                                                        <span><i class="fa-solid fa-star"></i></span>
                                                        <span><i class="fa-solid fa-star"></i></span>
                                                        <span><i class="fa-solid fa-star"></i></span>
                                                        <span><i class="fa-solid fa-star"></i></span>

                                                        <p><span className="price">$123</span> <span className="price"><del>$150</del></span></p>
                                                    </div>
                                                </div>

                                            </a>
                                            <a href="#">
                                                <div className="inner-child">
                                                    <div className="image">
                                                        <img src="assets/image/10.jpg" alt="inner-banner" />
                                                    </div>
                                                    <div className="content">
                                                        <p className="name">Sicilian Pizza</p>

                                                        <span><i class="fa-solid fa-star"></i></span>
                                                        <span><i class="fa-solid fa-star"></i></span>
                                                        <span><i class="fa-solid fa-star"></i></span>
                                                        <span><i class="fa-solid fa-star"></i></span>
                                                        <span><i class="fa-solid fa-star"></i></span>

                                                        <p><span className="price">$123</span> <span className="price"><del>$150</del></span></p>
                                                    </div>
                                                </div>

                                            </a>
                                            <a href="#">
                                                <div className="inner-child">
                                                    <div className="image">
                                                        <img src="assets/image/10.jpg" alt="inner-banner" />
                                                    </div>
                                                    <div className="content">
                                                        <p className="name">Sicilian Pizza</p>

                                                        <span><i class="fa-solid fa-star"></i></span>
                                                        <span><i class="fa-solid fa-star"></i></span>
                                                        <span><i class="fa-solid fa-star"></i></span>
                                                        <span><i class="fa-solid fa-star"></i></span>
                                                        <span><i class="fa-solid fa-star"></i></span>

                                                        <p><span className="price">$123</span> <span className="price"><del>$150</del></span></p>
                                                    </div>
                                                </div>

                                            </a>

                                        </ul>
                                        <ul class="inner-menu">
                                            <li class="title"><a href="#">Special Product</a></li>
                                            <a href="#">
                                                <div className="inner-child">
                                                    <div className="image">
                                                        <img src="assets/image/10.jpg" alt="inner-banner" />
                                                    </div>
                                                    <div className="content">
                                                        <p className="name">Sicilian Pizza</p>

                                                        <span><i class="fa-solid fa-star"></i></span>
                                                        <span><i class="fa-solid fa-star"></i></span>
                                                        <span><i class="fa-solid fa-star"></i></span>
                                                        <span><i class="fa-solid fa-star"></i></span>
                                                        <span><i class="fa-solid fa-star"></i></span>

                                                        <p><span className="price">$123</span> <span className="price"><del>$150</del></span></p>
                                                    </div>
                                                </div>

                                            </a>
                                            <a href="#">
                                                <div className="inner-child">
                                                    <div className="image">
                                                        <img src="assets/image/10.jpg" alt="inner-banner" />
                                                    </div>
                                                    <div className="content">
                                                        <p className="name">Sicilian Pizza</p>

                                                        <span><i class="fa-solid fa-star"></i></span>
                                                        <span><i class="fa-solid fa-star"></i></span>
                                                        <span><i class="fa-solid fa-star"></i></span>
                                                        <span><i class="fa-solid fa-star"></i></span>
                                                        <span><i class="fa-solid fa-star"></i></span>

                                                        <p><span className="price">$123</span> <span className="price"><del>$150</del></span></p>
                                                    </div>
                                                </div>

                                            </a>
                                            <a href="#">
                                                <div className="inner-child">
                                                    <div className="image">
                                                        <img src="assets/image/10.jpg" alt="inner-banner" />
                                                    </div>
                                                    <div className="content">
                                                        <p className="name">Sicilian Pizza</p>

                                                        <span><i class="fa-solid fa-star"></i></span>
                                                        <span><i class="fa-solid fa-star"></i></span>
                                                        <span><i class="fa-solid fa-star"></i></span>
                                                        <span><i class="fa-solid fa-star"></i></span>
                                                        <span><i class="fa-solid fa-star"></i></span>

                                                        <p><span className="price">$123</span> <span className="price"><del>$150</del></span></p>
                                                    </div>
                                                </div>
                                            </a>
                                        </ul>
                                    </div>

                                </div>
                            </li>
                            <li class="main-li" id="pages"><a href="#">pages <i class="fa-solid fa-chevron-down"></i></a>
                                <div class="inner" id="page-inner" >
                                    <div className="top">
                                    <ul class="inner-menu">
                                                    <li><Link to="/About">About</Link></li>
                                                    <li><Link to="/Contact">Contact-Us</Link></li>
                                                    <li><Link to="/Sidemap">Side-Map</Link></li>
                                                    <li><a href="#">special</a></li>
                                                </ul>

                                    </div>

                                </div></li>
                            <li><Link to="/Blog">Blog</Link></li>
                        </ul>
                    </div>
                    <Offcanvas show={show} onHide={handleClose}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title><div class="logo">
                                <a href="#">
                                    <img src="assets/image/logo-white.png" alt="logo" />
                                </a>
                            </div>
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <div class="midd" id="side-bar">
                                <ul class="menu-list">
                                    <li><Link to="/">
                                        Home
                                    </Link></li>
                                    <li class="main-li" id="shop"><a href="#">shop <i class="fa-solid fa-chevron-down"></i></a>
                                        <div class="inner">
                                            <div class="top">
                                                <ul class="inner-menu">
                                                    <li class="title"><a href="#">pasta</a></li>
                                                    <li><a href="#">Fedelini</a></li>
                                                    <li><a href="#">Lasagna</a></li>
                                                    <li><a href="#">Perciatelli</a></li>
                                                    <li><a href="#">Rustiche</a></li>
                                                    <li><a href="#">Mandala</a></li>
                                                    <li><a href="#">Boccoli</a></li>
                                                    <li><a href="#">Chifferi</a></li>
                                                </ul>
                                                <ul class="inner-menu">
                                                    <li class="title"><a href="#">french fries</a></li>
                                                    <li><a href="#">Sachets</a></li>
                                                    <li><a href="#">Ziti</a></li>
                                                    <li><a href="#">Rotelle</a></li>
                                                    <li><a href="#">Fregula</a></li>
                                                    <li><a href="#">Puntine</a></li>
                                                    <li><a href="#">Gnocchi</a></li>
                                                    <li><a href="#">Stortini</a></li>
                                                </ul>
                                                <ul class="inner-menu">
                                                    <li class="title"><a href="#">Drink</a></li>
                                                    <li><a href="#">sosyo</a></li>
                                                    <li><a href="#">coca-cola</a></li>
                                                    <li><a href="#">Cheddar Cheese</a></li>
                                                    <li><a href="#">green papper</a></li>
                                                    <li><a href="#">Mushrooms</a></li>
                                                    <li><a href="#">Spinach</a></li>
                                                    <li><a href="#">greek</a></li>
                                                </ul>
                                                <ul class="inner-menu">
                                                    <li class="title"><a href="#">salad</a></li>
                                                    <li><a href="#">Tossed Salad</a></li>
                                                    <li><a href="#">Taco Salad</a></li>
                                                    <li><a href="#">Italian Salad</a></li>
                                                    <li><a href="#">Pepperoni</a></li>
                                                    <li><a href="#">Corn Chips</a></li>
                                                    <li><a href="#">Mozzarella </a></li>
                                                    <li><a href="#">Tomato</a></li>
                                                    <li><a href="#">Piombi</a></li>
                                                </ul>
                                            </div>
                                            <div class="bottom">
                                                <div class="image">
                                                    <img src="assets/image/inner1.jpg" alt="inner-banner" />
                                                </div>
                                                <div class="image">
                                                    <img src="assets/image/inner2.jpg" alt="inner-banner" />
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="main-li" id="categories"><a href="#">categories <i class="fa-solid fa-chevron-down"></i></a>
                                        <div class="inner" id="categories-inner">
                                            <div class="top">

                                                <ul class="inner-menu">
                                                    <li class="title"><a href="#">donuts</a></li>
                                                    <li><a href="#">Glazed</a></li>
                                                    <li><a href="#">Jelly</a></li>
                                                    <li><a href="#">Sour Cream</a></li>
                                                    <li><a href="#">Sprinkled</a></li>
                                                    <li><a href="#">suop</a></li>
                                                    {/* <img src="assets/image/category_banner1.jpg" alt="inner-banner" /> */}

                                                </ul>
                                                <ul class="inner-menu">
                                                    <li class="title"><a href="#">salad</a></li>
                                                    <li><a href="#">Taco Salad</a></li>
                                                    <li><a href="#">Tossed Salad</a></li>
                                                    <li><a href="#">Italian Salad</a></li>

                                                    {/* <img src="assets/image/category_banner1.jpg" alt="inner-banner" /> */}
                                                </ul>

                                            </div>
                                        </div>
                                    </li>
                                    <li class="main-li" id="categories"><a href="#">product <i class="fa-solid fa-chevron-down"></i></a>
                                        <div class="inner" id="categories-inner">
                                            <div class="top">
                                                <ul class="inner-menu">
                                                    <li class="title"><a href="#">donuts</a></li>
                                                    <li><a href="#">Glazed</a></li>
                                                    <li><a href="#">Jelly</a></li>
                                                    <li><a href="#">Sour Cream</a></li>
                                                    <li><a href="#">Sprinkled</a></li>
                                                    <li><a href="#">suop</a></li>
                                                    {/* <img src="assets/image/category_banner1.jpg" alt="inner-banner" /> */}

                                                </ul>
                                                <ul class="inner-menu">
                                                    <li class="title"><a href="#">salad</a></li>
                                                    <li><a href="#">Taco Salad</a></li>
                                                    <li><a href="#">Tossed Salad</a></li>
                                                    <li><a href="#">Italian Salad</a></li>

                                                    {/* <img src="assets/image/category_banner1.jpg" alt="inner-banner" /> */}
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="main-li" id="pages"><a href="#">pages <i class="fa-solid fa-chevron-down"></i></a>
                                        <div class="inner" id="page-inner" >
                                            <div className="top">
                                                <ul class="inner-menu">
                                                    <li><Link to="/About">About</Link></li>
                                                    <li><Link to="/Contact">Contact-Us</Link></li>
                                                    <li><Link to="/Sidemap">Side-Map</Link></li>
                                                    <li><a href="#">special</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li><Link to="/Blog">Blog</Link></li>
                                </ul>
                            </div>
                        </Offcanvas.Body>
                    </Offcanvas>
                    <div class="right">
                        <div class="inner">
                            <div class="toggle-bar icon">
                                <Button onClick={handleShow}>
                                    <i class="fa-solid fa-bars"></i>
                                </Button>

                            </div>
                            <div class="search icon">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                            <div class="search-bar ">
                                <input type="text" name="search" placeholder="search..." />
                                <span>
                                    <button type="button"><i class="fa-solid fa-magnifying-glass"></i> </button>
                                </span>
                            </div>
                            <div class="cart-account">
                                <div class="cart icon">
                                    <i class="fa-solid fa-bag-shopping"></i>
                                    <div class="count icon">
                                        <p>2</p>
                                    </div>
                                </div>
                                <div class="user icon">
                                    <Link to="/Account"> <i class="fa-regular fa-user"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
}

export default Headbottom;