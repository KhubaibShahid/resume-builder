"use client"
import Nav from "./components/nav"
import Home from "./components/home";
import { User } from "./context/app";
import { useLayoutEffect, useState } from "react";
import { onAuthStateChanged , auth} from "./firebase/firebase";

export default function App() {
    
    return (
        <div>
            <Nav pathKey={1}>
                <Home></Home>
            </Nav>
        </div>
    )
}