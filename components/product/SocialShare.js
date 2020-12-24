import React from "react";
import Link from "next/link";

const SocialShareProduct = () => {
    return (
        <React.Fragment>
            <div className="reaction-section">
                <div className="reaction-product-button heart-button blur">
                    <i className="far fa-heart disable-icon"></i>
                </div>

                <Link href="/">
                    <a className="reaction-product-button heart-button blur">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                </Link>

                <Link href="/">
                    <a className="reaction-product-button heart-button blur">
                        <i className="fab fa-instagram"></i>
                    </a>
                </Link>

                <Link href="/">
                    <a className="reaction-product-button heart-button blur">
                        <i className="fab fa-twitter"></i>
                    </a>
                </Link>

                <Link href="/">
                    <a className="reaction-product-button heart-button blur">
                        <i className="fas fa-share-alt"></i>
                    </a>
                </Link>
            </div>

            <style jsx>{`
                .reaction-section {
                    display: block;
                    margin: 0 auto;
                }

                .reaction-product-button {
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding-top: 1px;
                    border-radius: 100%;
                    background-color: rgba(255, 255, 255, 0.4);
                    margin-bottom: 0.85rem;
                }

                i {
                    padding-top: 1px;
                }
            `}</style>
        </React.Fragment>
    );
};

export default SocialShareProduct;
