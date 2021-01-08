import "../styles/globals.css";
import React from "react";
import NavGlobal from "@/components/NavGlobal";
import FooterGlobal from "@/components/FooterGlobal";
import { UserProvider } from "@/store/userContext";

function MyApp({ Component, pageProps }) {
    return (
        <React.Fragment>
            <UserProvider>
                <NavGlobal />
                <main className="content-container">
                    <Component {...pageProps} />
                </main>
                <FooterGlobal />
            </UserProvider>
        </React.Fragment>
    );
}

export default MyApp;
