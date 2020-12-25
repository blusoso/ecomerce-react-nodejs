import React from "react";
import Link from "next/link";
import RatingStar from "@/components/RatingStar";
import SocialShareProduct from "@/components/product/SocialShare";
import ProductColorSelector from "@/components/product/ColorSelector";
import QtyInput from "@/components/form/QtyInput";

const Product = () => {
    return (
        <React.Fragment>
            <div className="buy-now-wrapper">
                <button className="btn buy-now-btn blur">
                    <i className="fas fa-receipt fa-fw"></i>
                    <p className="mb-0 text-uppercase">Buy Now!</p>
                </button>
            </div>
            <div className="buy-now-panel-wrapper">
                <div className="product-panel-card blur">
                    <div className="close-product-box blur">
                        <i className="fas fa-times fa-xs"></i>
                    </div>
                    <div className="card-body">
                        <div className="product-list-grid">
                            <div
                                className="preview-buy-now-panel-image cover-image"
                                style={{ backgroundImage: `url('/images/p1.jpg')` }}
                            ></div>
                            <div>
                                <h6>Yellow Sport Suit - Fit to You. If you want...</h6>
                                <span className="price-amount">125</span> <span className="sub-text">฿ x 1</span>
                            </div>
                        </div>
                        <hr className="my-2" />
                        <button className="btn btn-secondary w-100 mt-2">Checkout</button>
                    </div>
                </div>
            </div>
            <div className="product-grid-wrapper">
                <SocialShareProduct />

                <div>
                    <div className="main-image cover-image" style={{ backgroundImage: `url('/images/p1.jpg')` }}></div>
                </div>

                <div className="preview-section">
                    <div
                        className="preview-image cover-image"
                        style={{ backgroundImage: `url('/images/p1.jpg')` }}
                    ></div>
                    <div
                        className="preview-image cover-image"
                        style={{ backgroundImage: `url('/images/p1.jpg')` }}
                    ></div>
                    <div
                        className="preview-image cover-image"
                        style={{ backgroundImage: `url('/images/p1.jpg')` }}
                    ></div>
                    <div
                        className="preview-image cover-image"
                        style={{ backgroundImage: `url('/images/p1.jpg')` }}
                    ></div>
                </div>

                <div className="product-detail-section">
                    <div className="product-badges">
                        <div className="product-badge status-badge">New</div>
                        <div className="product-badge status-badge">Popular</div>
                    </div>
                    <h2 className="product-name">Yellow Sport Suit - Fit to You. If you want, you can get it!</h2>
                    <RatingStar rating={4.5} />
                    <div className="price-section">
                        <span className="price-amount">125</span>{" "}
                        <span className="sub-text">฿ + 50 for delivery cost</span>
                        <div className="sub-text">
                            <span className="product-badge discount-badge">- 30%</span> Discount
                        </div>
                    </div>

                    <div className="color-palette">
                        <ProductColorSelector w={32} h={32} selectedColor={true} />
                        <ProductColorSelector w={32} h={32} />
                        <ProductColorSelector w={32} h={32} />
                        <ProductColorSelector w={32} h={32} />
                        <ProductColorSelector w={32} h={32} />
                        <ProductColorSelector w={32} h={32} />
                        {/* <div className="color-selector" style={{ backgroundColor: "#ea4c89" }}></div>
                        <div className="color-selector color-selected" style={{ backgroundColor: "#ffd100" }}></div>
                        <div className="color-selector" style={{ backgroundColor: "#0057ff" }}></div>
                        <div className="color-selector" style={{ backgroundColor: "#6e70cb" }}></div>
                        <div className="color-selector" style={{ backgroundColor: "#bbbcbc" }}></div> */}
                        <span className="sub-text out-of-stock">Out of stock!</span>
                    </div>

                    <div className="d-flex align-items-center position-relative">
                        <QtyInput />
                        <button className="btn btn-secondary">Add to basket</button>
                    </div>

                    <div className="product-description">
                        <p className="mb-0">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .buy-now-wrapper {
                    position: fixed;
                    bottom: 0;
                    right: 0;
                    padding: 1.7rem;
                }

                .buy-now-btn {
                    width: 80px;
                    height: 80px;
                    background-color: rgba(0, 87, 255, 0.135);
                    border: 1px solid rgba(255, 255, 255, 0.4);
                    color: var(--color-blue);
                    border-radius: 100%;
                    letter-spacing: 0.54px;
                    margin-top: 0.1rem;
                }

                .buy-now-btn > p {
                    font-size: 0.65rem;
                }

                .buy-now-panel-wrapper {
                    position: fixed;
                    bottom: 7.7rem;
                    right: 0;
                    padding: 0 1.7rem;
                    z-index: 2;
                }

                .product-panel-card {
                    position: relative;
                    width: 320px;
                    height: auto;
                    background-color: rgba(255, 255, 255, 0.135);
                    border: 1px solid rgba(255, 255, 255, 0.15);
                    box-shadow: 0 4px 14px 0 rgba(31, 38, 135, 0.1);
                    border-radius: 0.5rem;
                }

                .close-product-box {
                    position: absolute;
                    top: -0.8rem;
                    right: 0;
                    width: 32px;
                    height: 32px;
                    background-color: rgba(255, 255, 255, 0.135);
                    z-index: 3;
                    border-radius: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: var(--color-blue);
                    box-shadow: 0 4px 14px 0 rgba(31, 38, 135, 0.1);
                }

                .close-product-box > i {
                    height: 10px;
                }

                .card-body {
                    padding: 1.1rem;
                }

                .product-list-grid {
                    display: grid;
                    grid-template-columns: 1fr 2fr;
                    gap: 0 0.7rem;
                }

                .product-grid-wrapper {
                    display: grid;
                    grid-template-columns: 80px 1fr 155px 1.5fr;
                    gap: 0 0.8rem;
                }

                .preview-buy-now-panel-image {
                    width: 100%;
                    height: 5rem;
                    border-radius: 0.5rem;
                }

                .main-image {
                    position: relative;
                    width: 100%;
                    height: 580px;
                    border-radius: 0.5rem;
                }

                .preview-section {
                    display: grid;
                    grid-template-rows: repeat(4, 1fr);
                    gap: 0.4rem;
                }

                .preview-image {
                    position: relative;
                    width: 100%;
                    height: 140px;
                    border-radius: 0.5rem;
                }

                .product-detail-section {
                    padding-left: 1.65rem;
                    user-select: none;
                }

                .price-section {
                    margin: 1rem 0;
                }

                .price-name {
                    font-weight: 600;
                    letter-spacing: 0.35px;
                }

                .price-amount {
                    font-size: 1.7em;
                    font-weight: 500;
                }

                .product-badges {
                    display: inline-block;
                    margin-bottom: 0.34rem;
                }

                .product-badge {
                    border-radius: 6px;
                    padding: 0.2rem 0.6rem;
                    font-size: 0.65rem;
                    text-transform: uppercase;
                    font-weight: 500;
                    letter-spacing: 0.75px;
                    display: inline-block;
                    margin-right: 0.4rem;
                }

                .status-badge {
                    color: var(--color-blue);
                    background-color: rgba(0, 87, 255, 0.135);
                }

                .product-description {
                    color: var(--color-gray);
                    margin: 1rem 0;
                    background: var(--color-gray-light);
                    padding: 0.7rem 1rem;
                    border-radius: 6px;
                    font-size: 0.97rem;
                }

                .discount {
                    font-size: 0.7rem;
                }

                .discount-badge {
                    color: rgb(51, 216, 180);
                    background-color: rgba(51, 216, 180, 0.135);
                }

                .color-palette {
                    display: flex;
                    align-items: center;
                    margin: 1rem 0;
                }

                .color-selected {
                    border: 1px solid var(--color-gray);
                }

                .out-of-stock {
                    color: var(--color-red);
                    margin-left: 0.5rem;
                }
            `}</style>
        </React.Fragment>
    );
};

export default Product;
