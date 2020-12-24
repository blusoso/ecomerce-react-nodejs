import Link from "next/link";
import React from "react";
import Product from "@/components/Product";

const Home = () => {
    return (
        <React.Fragment>
            <div className="product-grid">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>

            <style jsx global>{`
                .product-grid {
                    display: grid;
                    grid-template-columns: repeat(5, 1fr);
                    grid-template-rows: 410px;
                    gap: 0.8rem 0.5rem;
                }

                .col-md-3 {
                    padding: 0.1rem;
                }

                .preview-image-wrapper {
                    position: relative;
                    height: 335px;
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: center;
                    border-radius: 0.5rem;
                }

                h6 {
                    margin-bottom: 0.2rem;
                }

                p {
                    margin: 0;
                }

                .rating {
                    display: flex;
                    align-items: center;
                }

                .fa-star,
                .fa-star-half-alt {
                    color: var(--color-yellow);
                    padding: 0 0.6px;
                }

                .reviews-amount {
                    font-size: 11px;
                    color: var(--color-gray);
                    margin-left: 0.3rem;
                }

                a.card:hover {
                    color: #000;
                }

                .reaction-wrapper {
                    position: absolute;
                    bottom: 0.8rem;
                    right: 1rem;
                    display: flex;
                }

                .reaction-product-button {
                    width: 32px;
                    height: 32px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding-top: 1px;
                    border-radius: 100%;
                    background-color: rgba(255, 255, 255, 0.4);
                }

                .reaction-product-button.heart-button {
                    margin: 0 .5rem;
                }

                .fa-heart {
                    padding-top: 1.2px;
                }
            `}</style>
        </React.Fragment>
    );
};

export default Home;
