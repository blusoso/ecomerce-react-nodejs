import React from "react";
import ProductCartCard from "@/components/cart/ProductCard";
import ShippingAddress from "@/components/cart/ShippingAddress";
import Courier from "@/components/cart/Courier";
import Payment from "@/components/cart/Payment";
import FooterCart from "@/components/cart/FooterCart";

const Cart = () => {
    return (
        <React.Fragment>
            <div className="cart-grid">
                <section className="checkout-items-section">
                    <h5 className="mb-3">
                        <i className="fas fa-shopping-bag fa-fw fa-sm mr-1"></i>
                        Checkout Item(s)
                    </h5>
                    <div className="check-item-box my-3 ml-4">
                        <button className="btn btn-dark-secondary d-flex align-items-center">
                            <div className="circle-check-box mr-2 --center">
                                <i className="fas fa-check fa-xs"></i>
                            </div>
                            Check all items
                        </button>
                    </div>

                    <ProductCartCard />
                    <ProductCartCard />
                    <ProductCartCard />
                    <ProductCartCard />
                </section>
                <section className="checkout-information-section">
                    <ShippingAddress />
                    <Courier />
                    <Payment />
                </section>
            </div>

            <FooterCart/>

            <style jsx>{`
                h5 {
                    color: var(--color-mid-gray);
                }

                .cart-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 0 3rem;
                }

                .fa-shopping-bag {
                    color: var(--color-blue);
                }
            `}</style>
        </React.Fragment>
    );
};

export default Cart;
