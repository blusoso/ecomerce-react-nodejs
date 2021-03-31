import React from "react";

const Payment = () => {
    return (
        <React.Fragment>
            <section className="payment mb-4">
                <h6 className="text-uppercase topic-header mb-3">Payment</h6>
                <div className="checkout-information-card">
                    <div className="card-body">
                        <div className="row">
                            <div className="Payment-type col-md-4 d-flex">
                                <div className="product-selected-icon-wrapper mr-3">
                                    <div className="product-selected-icon">
                                        <i className="fas fa-check"></i>
                                    </div>
                                </div>
                                <h5>Regular</h5>
                            </div>
                            <div className="col-md-4 --center">
                                <p>Kerry</p>
                            </div>
                            <div className="col-md-2 --center">
                                <p className="sub-text">3-5 Days</p>
                            </div>
                            <div className="col-md-2 --center">
                                <p>30 ฿</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .product-selected-icon-wrapper {
                    position: flex;
                }

                .product-selected-icon {
                    width: 2rem;
                    height: 2rem;
                    background-color: var(--color-blue-light);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--color-blue);
                    border-radius: 100%;
                }

                .topic-header {
                    color: var(--color-midgray);
                    letter-spacing: 1px;
                    font-size: 0.9rem;
                }

                .checkout-information-card {
                    position: relative;
                    width: width;
                    height: auto;
                    background-color: #fff;
                    border: 1px solid rgba(0, 0, 0, 0.08);
                    border-radius: 0.5rem;
                }

                .card-body {
                    padding: 1.5rem;
                }

                .name-shipping {
                    font-weight: 500;
                    margin-top: 1rem;
                    margin-bottom: 0.2rem;
                }

                h5, p {
                    margin: 0;
                }

                .Payment-type {
                    display: flex;
                    align-items: center;
                }
            `}</style>
        </React.Fragment>
    );
};

export default Payment;
