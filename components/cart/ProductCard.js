import React from "react";
import QtyInput from "@/components/form/QtyInput";
import ProductColorSelector from "@/components/product/ColorSelector";

const ProductCartCard = () => {
    return (
        <React.Fragment>
            <div className="cart-card-grid">
                <div className="product-card">
                    <div className="card-body">
                        <div className="product-selected-icon-wrapper">
                            <div className="product-selected-icon blur">
                                <i className="fas fa-check"></i>
                            </div>
                        </div>

                        <div className="close-product-box blur">
                            <i className="fas fa-times fa-xs"></i>
                        </div>

                        <div className="product-grid">
                            <div
                                className="preview-product-image cover-image"
                                style={{ backgroundImage: `url('/images/p1.jpg')` }}
                            ></div>
                            <div>
                                <h5>
                                    <ProductColorSelector w={16} h={16} />
                                    Yellow Sport Suit - Fit to You. If you want, you can get it!
                                </h5>
                                <div className="qty-wrapper">
                                    <span className="price-amount mr-1">125</span>{" "}
                                    <span className="sub-text mr-1">฿ x</span>
                                    <QtyInput />
                                </div>
                                <i className="fas fa-ellipsis-v fa-lg"></i>
                                {/* <div className="action-panel blur text-center">
                                    <button className="btn btn-danger">
                                        <i className="far fa-trash-alt"></i>
                                    </button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .product-selected-icon-wrapper {
                    position: absolute;
                    top: 3.8rem;
                    left: -1.2rem;
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

                .cart-card-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 0 1rem;
                }

                .product-grid {
                    display: grid;
                    grid-template-columns: 1fr 4fr;
                    gap: 0 1rem;
                }

                .product-card {
                    position: relative;
                    width: width;
                    height: auto;
                    background-color: #fff;
                    border: 1px solid rgba(255, 255, 255, 0.15);
                    box-shadow: 0 4px 14px 0 rgba(31, 38, 135, 0.1);
                    border-radius: 0.5rem;
                    margin-bottom: 0.75rem;
                    margin-left: 1.55rem;
                }

                .card-body {
                    padding: 1.2rem;
                }

                .preview-product-image {
                    width: 100%;
                    height: 7rem;
                    border-radius: 0.5rem;
                }

                .price-amount {
                    font-size: 1.7em;
                    font-weight: 500;
                }

                .qty-wrapper {
                    display: inline-flex;
                    align-items: center;
                }

                .fa-ellipsis-v {
                    color: var(--color-blue-light);
                    position: absolute;
                    right: 2rem;
                    bottom: 3rem;
                    cursor: pointer;
                    width: 1rem;
                    text-align: center;
                }

                .action-panel {
                    position: absolute;
                    z-index: 2;
                    background-color: var(--color-white-light);
                    height: auto;
                    padding: 1rem;
                    border-radius: 0.5rem;
                    right: 0.2rem;
                }

                .close-product-box {
                    position: absolute;
                    top: -0.5rem;
                    right: -0.6rem;
                    width: 32px;
                    height: 32px;
                    background-color: #fff;
                    z-index: 3;
                    border-radius: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: var(--color-red);
                    box-shadow: 0 4px 14px 0 rgba(31, 38, 135, 0.1);
                }
            `}</style>
        </React.Fragment>
    );
};

export default ProductCartCard;
