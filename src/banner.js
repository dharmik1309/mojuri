import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Banner = () => {
    const demo = {
        responsive: {

            0: {
                items: 1,
                nav: false,
                loop: true,
                dots: false,
                autoplay: true,
                autoplayTimeout: 5000,
            },

            400: {
                items: 1,
                nav: false,
                loop: true,
                dots: false,
                autoplay: true,
                autoplayTimeout: 5000,
            },
            600: {
                items: 1,
                nav: false,
                loop: true,
                dots: false,
                autoplay: true,
                autoplayTimeout: 5000,
            },
            1000: {
                items: 1,
                nav: false,
                loop: true,
                dots: false,
                autoplay: true,
                autoplayTimeout: 5000,
            }
        }
    }
    return (
        <>
            <OwlCarousel className='owl-theme' loop margin={10} nav {...demo}>
                <div class='item'>
                    <h4>
                        <img src="assests/img/Untitled-2.png" alt="banner..img.." />
                        <div class="banner-main">
                            <div class="banner-inner">
                                <div class="main-img">
                                    <div class="img-content">
                                        <span class="big-text">Discover the</span>
                                        <div class="big-text">world of jewelry </div>
                                        <a href="#">EXPLORE BESTSELLER</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </h4>
                </div>
                <div class='item'>
                    <h4>
                        <img src="assests/img/Untitled-1.png" alt="banner..img.." />
                        <div class="banner-main">
                            <div class="banner-inner">
                                <div class="main-img">
                                    <div class="img-content">
                                        <span class="big-text">Discover the</span>
                                        <div class="big-text">world of jewelry </div>
                                        <a href="#">EXPLORE BESTSELLER</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </h4>
                </div>
                <div class='item'>
                    <h4>
                        <img src="assests/img/Untitled.png" alt="banner..img.." />
                        <div class="banner-main">
                            <div class="banner-inner">
                                <div class="main-img">
                                    <div class="img-content">
                                        <span class="big-text">Discover the</span>
                                        <div class="big-text">world of jewelry </div>
                                        <a href="#">EXPLORE BESTSELLER</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </h4>
                </div>
            </OwlCarousel>

        </>
    );
}
export default Banner;