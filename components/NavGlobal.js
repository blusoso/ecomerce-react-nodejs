import React, { useContext, useEffect } from "react";
import Link from "next/link";
import { UserContext } from "@/store/userContext";

const NavGlobal = () => {
    const [userInfo, setUserInfo] = useContext(UserContext);

    const signoutHandler = () => {
        localStorage.removeItem("userInfo");
        setUserInfo(null);
    };

    return (
        <React.Fragment>
            <nav>
                <div className="brand">
                    <Link href="/">
                        <a>
                            <h5>Pony.</h5>
                        </a>
                    </Link>
                </div>
                <div>
                    <Link href="/cart">
                        <a className="pr-3">
                            <i className="fas fa-shopping-bag"></i>
                        </a>
                    </Link>
                    {userInfo ? (
                        <>
                            <span className="greeting-message blue-text">Hi, Faa</span>
                            <div className="position-relative">
                                <div className="user-dropdown bg-white-bright blur">
                                    <div onClick={signoutHandler}>
                                        <a href="">Logout</a>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <React.Fragment>
                            <Link href="/signin">
                                <a className="signup-label">
                                    Sign up
                                </a>
                            </Link>
                            <Link href="/signin">
                                <a>
                                    <button className="btn btn-primary">Sign in</button>
                                </a>
                            </Link>
                        </React.Fragment>
                    )}
                </div>
            </nav>

            <style jsx>{`
                .greeting-message {
                    cursor: pointer;
                }

                .user-dropdown {
                    border-radius: 0.5rem;
                    padding: 1rem 1.5rem;
                    width: 15rem;
                    position: absolute;
                    top: 0.5rem;
                    right: 0;
                    z-index: 2;
                }

                .signup-label {
                    color: var(--color-gray);
                    margin-right: .8rem;
                    text-decoration: underline;
                    letter-spacing: 1px;
                }

                .signup-label:hover {
                    color: var(--color-blue);
                }
            `}</style>
        </React.Fragment>
    );
};

export default NavGlobal;
