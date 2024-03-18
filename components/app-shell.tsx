'use client';
import { useState } from "react";
import Header from "./header";
import NavBar from "./nav-bar";

export default function AppShell() {
    const [open, setOpen] = useState(false);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <>
            <Header open={open} />
            <NavBar open={open} toggleDrawer={toggleDrawer} />
        </>
    )
}