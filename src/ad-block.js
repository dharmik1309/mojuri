import React from "react";

const Block = () => {
    return (
        <>
            <div class="ad-block">
                <div class="inner">
                    <div class="item">
                        <div class="image">
                            <img src="assests/img/banner-4.jpg" alt="ad-block-1"/>
                            <div class="text">
                                <p>
                                    <span> Summer COLLECTIONS</span> <br/>
                                    <strong>Freshwater pearl necklace and earrings</strong>
                                </p>
                                <div class="btnn">
                                    <a href="#">explore <i class="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="image">
                            <img src="assests/img/banner-5.jpg" alt="ad-block-1"/>
                            <div class="text">
                                <p>
                                    <span> Make it memorable</span> <br/>
                                    <strong>Freshwater pearl necklace and earrings</strong>
                                </p>
                                <div class="btnn">
                                    <a href="#">explore <i class="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Block;