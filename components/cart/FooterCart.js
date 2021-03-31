import React from "react";

const FooterCart = () => {
    return (
        <React.Fragment>
            <div className="footer-wrapper footer-panel blur">
                <div className="order-grid">
                    <div>
                        <p className="mb-1">Subtotal</p>
                        <p className="mb-1">Shipping</p>
                        <p className="">Discount</p>
                        <h4 className="d-inline mr-2">Order Total</h4>
                    </div>
                    <div className="text-right">
                        <p className="sub-text mr-2 mb-1">x 2 ID1000301</p>
                        <p className="sub-text mr-2 mb-1">REG 2-4 Days Details</p>
                        <p className="sub-text mr-2">Remove</p>
                        <p></p>
                    </div>
                    <div className="text-right">
                        <p className="mb-1">250.00 ฿</p>
                        <p className="mb-1">75.00 ฿</p>
                        <p className="">10.00 ฿</p>
                        <h4 className="d-inline blue-text">325.00 ฿</h4>
                    </div>
                </div>
                <button className="btn btn-secondary w-100 my-3">Checkout Order</button>
            </div>

            <style jsx>{`
                .footer-wrapper {
                    position: fixed;
                    left: 0;
                    bottom: 0;
                }

                .footer-panel {
                    width: 100%;
                    height: 207px;
                    background-color: var(--color-white-light);
                    z-index: 99;
                    border: 1 px #fff;
                    padding: 1.2rem 22rem;
                    border-top-right-radius: 3rem;
                    border-top-left-radius: 3rem;
                    backdrop-filter: blur(10px);
                }

                .order-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr 200px;
                    font-size: 0.8rem;
                }

                .circle-check-box {
                    width: 20px;
                    height: 20px;
                    background-color: var(--color-blue-light);
                    border-radius: 100%;
                    color: var(--color-blue);
                }
            `}</style>
        </React.Fragment>
    );
};

export default FooterCart;
