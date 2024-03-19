import React from "react";
import Canimatedform from "./animated-form";
const Cform = () => {
    return (
        <>
            <div className="form">
                <div className="form-inner">
                    <div className="form-top">
                        <div className="form-heading">
                            <div className="heading-top">
                                <p>send us your questions!</p>
                            </div>
                            <div className="heading-down">
                               <p> We’ll get back to you within two days.</p>
                            </div>
                        </div>
                    </div>
                    <div className="form-down">
                        <Canimatedform/>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Cform;
