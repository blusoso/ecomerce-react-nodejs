import React from "react";

const RatingStar = ({ rating }) => {
    return (
        <React.Fragment>
            <i
                className={`${
                    rating >= 1 ? "fas fa-star" : rating >= 0.5 ? "fas fa-star-half-alt" : "far fa-star"
                } fa-xs`}
            ></i>
            <i
                className={`${
                    rating >= 2 ? "fas fa-star" : rating >= 1.5 ? "fas fa-star-half-alt" : "far fa-star"
                } fa-xs`}
            ></i>
            <i
                className={`${
                    rating >= 3 ? "fas fa-star" : rating >= 2.5 ? "fas fa-star-half-alt" : "far fa-star"
                } fa-xs`}
            ></i>
            <i
                className={`${
                    rating >= 4 ? "fas fa-star" : rating >= 3.5 ? "fas fa-star-half-alt" : "far fa-star"
                } fa-xs`}
            ></i>
            <i
                className={`${
                    rating >= 5 ? "fas fa-star" : rating >= 4.5 ? "fas fa-star-half-alt" : "far fa-star"
                } fa-xs`}
            ></i>
            <span className="reviews-amount">(89)</span>

            <style jsx>{`
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
            `}</style>
        </React.Fragment>
    );
};

export default RatingStar;
