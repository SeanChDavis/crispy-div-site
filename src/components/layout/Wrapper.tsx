import React from "react";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";

export default function Wrapper({children}: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col h-screen">
            <Header/>
            <div className="flex-grow-1 bg-white text-zinc-950 dark:bg-zinc-900 dark:text-zinc-300">
                {/* App.tsx renders the main content here */}
                {children}
            </div>
            <Footer/>
        </div>
    )
}