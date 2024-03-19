import React from "react";

const Abmail = () => {
    return (
        <>
           <div class="mail-main">
                <div class="mail-inner">
                    <div class="email-section">
                        <div class="details-content">
                            <strong>Latest From MoJuri!</strong>
                            <br />
                            <p>Sign-up to receive 10% off your next purchase. Plus hear about new arrivals and offers.
                            </p>
                        </div>
                        <div class="mail-write">
                            <div class="address">
                                <input type="text" name="mail" id="e-mail" placeholder="Email address..." />
                            </div>
                            <div class="submission">
                                <input type="button" value="submit" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr /> 
        </>
    );
}
export default Abmail;