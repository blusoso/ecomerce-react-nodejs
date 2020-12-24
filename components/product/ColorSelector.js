import React from "react";

const ColorSelector = ({ selectedColor }) => {
    return (
        <React.Fragment>
            <div className={`color-selector ${selectedColor && 'selected'}`} style={{ backgroundColor: "#ea4c89" }}>
                {selectedColor && (
                    <div className="icon-selected">
                        <i className="fas fa-check"></i>
                    </div>
                )}
            </div>

            <style jsx>{`
                .color-selector {
                    position: relative;
                    display: inline-block;
                    width: 32px;
                    height: 32px;
                    border-radius: 100%;
                    margin-right: 0.3rem;
                    cursor: pointer;
                }

                .selected {
                    border: 1px solid var(--color-dark);
                }

                .icon-selected {
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 12px;
                    height: 12px;
                    display: flex;
                    align-items: center;
                    background-color: var(--color-dark);
                    border: 1px solid var(--color-dark);
                    border-radius: 100%;
                    color: #fff;
                    justify-content: center;
                    font-size: 6px;
                }
            `}</style>
        </React.Fragment>
    );
};

export default ColorSelector;
