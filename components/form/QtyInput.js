import React from "react";

const QtyInput = () => {
    return (
        <React.Fragment>
            <div className="d-flex align-items-center position-relative">
                <label className="qty-label">QTY</label>
                <input type="text" name="qty" className="qty-input" />
                <div>
                    <button className="btn btn-primary btn-qty">+</button>
                    <button className="btn btn-primary btn-qty mt-1">-</button>
                </div>
            </div>

            <style jsx>{`
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
                    margin-right: 0.3rem;
                    border: 1px solid var(--color-midgray);
                    border-radius: 6px;
                    padding: 0.5rem;
                    text-align: center;
                }

                .btn-qty {
                    width: 18px;
                    height: 18px;
                    padding: 0.2rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-right: 0.7rem;
                }
            `}</style>
        </React.Fragment>
    );
};

export default QtyInput;
