import React from "react";
import Link from "next/link";
import RatingStar from "@/components/RatingStar";
import SocialShareProduct from "@/components/product/SocialShare";
import ProductColorSelector from "@/components/product/ColorSelector";

const Product = () => {
    return (
        <React.Fragment>
            <div className="buy-now-wrapper">
                <button className="btn buy-now-btn blur">
                    <i className="fas fa-receipt fa-fw"></i>
                    <p className="mb-0 text-uppercase">Buy Now!</p>
                </button>
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
                        <ProductColorSelector selectedColor={true} />
                        <ProductColorSelector />
                        <ProductColorSelector />
                        <ProductColorSelector />
                        <ProductColorSelector />
                        {/* <div className="color-selector" style={{ backgroundColor: "#ea4c89" }}></div>
                        <div className="color-selector color-selected" style={{ backgroundColor: "#ffd100" }}></div>
                        <div className="color-selector" style={{ backgroundColor: "#0057ff" }}></div>
                        <div className="color-selector" style={{ backgroundColor: "#6e70cb" }}></div>
                        <div className="color-selector" style={{ backgroundColor: "#bbbcbc" }}></div> */}
                        <span className="sub-text out-of-stock">Out of stock!</span>
                    </div>

                    <div className="d-flex align-items-center position-relative">
                        <label className="qty-label">QTY</label>
                        <input type="text" name="qty" className="qty-input" />
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

                .product-grid-wrapper {
                    display: grid;
                    grid-template-columns: 80px 1fr 155px 1.5fr;
                    gap: 0 0.8rem;
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

                .sub-text {
                    font-size: 0.8em;
                    color: var(--color-gray);
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

                .qty-label {
                    font-size: 0.8em;
                    position: absolute;
                    top: -7.4px;
                    left: 7.3px;
                    background-color: #fff;
                    width: 2rem;
                    text-align: center;
                    color: var(--color-gray);
                }

                .qty-input {
                    width: 3rem;
                    height: 2.5rem;
                    margin-right: 0.7rem;
                    border: 1px solid var(--color-midgray);
                    border-radius: 6px;
                    padding: 0.5rem;
                    text-align: center;
                }
            `}</style>
        </React.Fragment>
    );
};

export default Product;
