import React from "react";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col h-screen">
            <Header/>
            <div className="flex-grow-1 bg-white text-zinc-950">
                {children}
            </div>
            <Footer/>
        </div>
    )
}