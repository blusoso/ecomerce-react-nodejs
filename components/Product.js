import Link from "next/link";
import React from "react";
import RatingStar from "@/components/RatingStar";

const Product = () => {
    return (
        <React.Fragment>
            <Link href="/product/1">
                <a className="card">
                    <div className="preview-image-wrapper" style={{ backgroundImage: `url('images/p1.jpg')` }}>
                        <div className="reaction-wrapper">
                            <div className="reaction-product-button heart-button blur">
                                <i className="fas fa-heart fa-xs disable-icon"></i>
                            </div>
                            <div className="reaction-product-button cart-button blur">
                                <i className="fas fa-shopping-bag fa-xs disable-icon"></i>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <h6>Yellow Sport Suit</h6>
                        <div className="d-flex">
                            <div>
                                <RatingStar rating={4.5} />
                            </div>

                            <div className="rating ml-auto">
                                <p className="price">120 <small>฿</small></p>
                            </div>
                        </div>
                    </div>
                </a>
            </Link>
        </React.Fragment>
    );
};

export default Product;
