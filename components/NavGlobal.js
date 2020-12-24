import React from "react";
import Link from "next/link";

const NavGlobal = () => {
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
                    <Link href="/">
                        <a>
                            <button className="btn btn-primary">Sign in</button>
                        </a>
                    </Link>
                </div>
            </nav>
        </React.Fragment>
    );
};

export default NavGlobal;
