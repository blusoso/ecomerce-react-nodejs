import React from "react";

const AngleIcon = () => {
    return (
        <React.Fragment>
            <div className="angle-icon blue-light-text">
                <i className="fas fa-angle-down fa-lg"></i>
            </div>

            <style jsx>{`
                .angle-icon {
                    cursor: pointer;
                    transition: color 200ms ease-out;
                }

                .angle-icon:hover {
                    color: var(--color-blue);
                }
            `}</style>
        </React.Fragment>
    );
};

export default AngleIcon;
