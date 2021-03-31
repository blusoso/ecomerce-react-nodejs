import React from "react";
import AngleIcon from "@/components/template/icon/angle";

const ShippingAddress = () => {
    return (
        <React.Fragment>
            <section className="shipping-address mb-4">
                <h6 className="text-uppercase topic-header mb-3">Shipping</h6>
                <div className="checkout-information-card">
                    <div className="card-body">
                        <div className="d-flex">
                            <h5>Home Address</h5>
                            <div className="ml-auto">
                                <AngleIcon />
                            </div>
                        </div>
                        <p className="name-shipping">Sopita Jullaprasertsak. 080-8653900</p>
                        <p className="gray-text">
                            11 Room 999, Marisa Residence Apartment, Soi Punnawitee 11, Sukhumwit 101 Road, Bangchak,
                            Phrakhanong, Bankok 10210
                        </p>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .shipping-address {
                    cursor: pointer;
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
            `}</style>
        </React.Fragment>
    );
};

export default ShippingAddress;
