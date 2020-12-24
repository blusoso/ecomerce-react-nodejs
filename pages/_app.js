import "../styles/globals.css";
import React from "react";
import NavGlobal from "@/components/NavGlobal";
import FooterGlobal from "@/components/FooterGlobal";

function MyApp({ Component, pageProps }) {
    return (
        <React.Fragment>
            <NavGlobal />
            <main className="content-container">
                <Component {...pageProps} />
            </main>
            <FooterGlobal />
        </React.Fragment>
    );
}

export default MyApp;
